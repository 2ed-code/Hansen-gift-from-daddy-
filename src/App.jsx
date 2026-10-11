import { useEffect, useRef, useState } from 'react';
import { daysSince } from './dateUtils.js';

// This date reproduces the original counter: 108 days on 2026-06-05.
const RELATIONSHIP_START_DATE = '2026-02-17';
const SONG_URL = 'https://www.image2url.com/r2/default/files/1780677145758-8e39fc6a-d069-480d-ac2c-37aaf1ce9140.mp3';
const HEARTS = ['❤️', '💖', '💗', '💓', '💞', '🌸', '🌹'];

function FloatingHearts({ burstKey }) {
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    if (!burstKey) return;
    const burst = Array.from({ length: 34 }, (_, index) => ({
      id: burstKey + '-' + index,
      left: Math.random() * 100,
      delay: Math.random() * 0.75,
      duration: 3.1 + Math.random() * 2.8,
      size: 15 + Math.random() * 20,
      symbol: HEARTS[Math.floor(Math.random() * HEARTS.length)]
    }));
    setHearts(burst);
    const timeout = window.setTimeout(() => setHearts([]), 6500);
    return () => window.clearTimeout(timeout);
  }, [burstKey]);

  return <div className="heart-rain" aria-hidden="true">
    {hearts.map((heart) => <span className="falling-heart" key={heart.id} style={{
      left: heart.left + '%',
      animationDelay: heart.delay + 's',
      animationDuration: heart.duration + 's',
      fontSize: heart.size + 'px'
    }}>{heart.symbol}</span>)}
  </div>;
}

export default function App() {
  const [days, setDays] = useState(() => daysSince(RELATIONSHIP_START_DATE));
  const [secretOpen, setSecretOpen] = useState(false);
  const [burstKey, setBurstKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicError, setMusicError] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    const update = () => setDays(daysSince(RELATIONSHIP_START_DATE));
    update();
    const timer = window.setInterval(update, 60000);
    return () => window.clearInterval(timer);
  }, []);

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;
    setMusicError('');
    if (!audio.paused) {
      audio.pause();
      setIsPlaying(false);
      return;
    }
    try {
      await audio.play();
      setIsPlaying(true);
    } catch {
      setIsPlaying(false);
      setMusicError('مش قادر أشغّل الأغنية دلوقتي. جرّبي تضغطي تاني أو اتأكدي إن الإنترنت شغال.');
    }
  }

  return <main className="page-shell">
    <div className="ambient ambient-one" aria-hidden="true" />
    <div className="ambient ambient-two" aria-hidden="true" />
    <div className="star-field" aria-hidden="true">
      {Array.from({ length: 26 }, (_, i) => <span className="star" key={i} style={{
        '--x': ((i * 37 + 9) % 100) + '%',
        '--y': ((i * 23 + 5) % 100) + '%',
        '--delay': ((i % 7) * -0.6) + 's'
      }} />)}
    </div>
    <FloatingHearts burstKey={burstKey} />

    <section className="love-card" aria-labelledby="page-title">
      <div className="top-ornament"><span /> ✦ <span /></div>
      <p className="eyebrow">حكاية صغيرة… وحب كبير</p>
      <header className="royal-names">
        <h1 id="page-title"><span>حنين</span><b aria-hidden="true">♡</b><span>يوسف</span></h1>
        <p>حُبّنا حكاية نفسي تكمّل العمر كله</p>
      </header>

      <div className="heart-emblem" aria-label="قلب حب متوهج">
        <span className="orbit orbit-one" /><span className="orbit orbit-two" />
        <span className="main-heart">♥</span>
        <span className="tiny-spark spark-one">✦</span><span className="tiny-spark spark-two">✧</span>
      </div>

      <div className="days-counter" aria-live="polite">
        <span className="counter-heart" aria-hidden="true">♥</span>
        <div><strong className="days-number">{days.toLocaleString('ar-EG')}</strong><span className="days-label">يوم حلو وإنتِ في حياتي</span></div>
        <span className="counter-calendar" aria-hidden="true">∞</span>
      </div>

      <article className="love-letter">
        <p className="letter-kicker">من قلب يوسف لنونتي</p>
        <h2>يا نونتي الحلوة… <span>🤍</span></h2>
        <p>أنا بحبك أوي بجد، وكل يوم بيعدّي بحس إن وجودك في حياتي نعمة كبيرة بدعي ربنا تفضل معايا.</p>
        <p>نفسي أفضل جنبك في الحلوة والمُرّة، ونعدّي أي حاجة سوا، ونشوف أحلامنا وهي بتتحقق واحدة واحدة.</p>
        <p>ربنا يفرّح قلبك، ويوفّقك في كل خطوة، ويكتب لنا الخير ويقرّبنا من بعض بالحلال. إنتِ مش يوم حلو في حياتي… إنتِ من أحلى الحاجات اللي حصلتلي. 💗</p>
        <div className="letter-signature">بحبك النهارده، وبكرة، وكل يوم جاي <span>— بابي</span></div>
      </article>

      <div className="actions">
        <button className="button button-primary" type="button" onClick={() => setBurstKey((key) => key + 1)}>
          <span aria-hidden="true">♡</span> ابعتيلي قلب من بعيد
        </button>
        <button className="button button-secret" type="button" aria-expanded={secretOpen} aria-controls="secret-message" onClick={() => setSecretOpen((open) => !open)}>
          <span aria-hidden="true">{secretOpen ? '♡' : '✉'}</span>
          {secretOpen ? 'اقفلي رسالتي السرية' : 'افتحي رسالتي السرية'}
        </button>
      </div>

      <div id="secret-message" className={'secret-message ' + (secretOpen ? 'is-open' : '')} aria-hidden={!secretOpen} hidden={!secretOpen}>
        <div className="secret-seal" aria-hidden="true">♥</div>
        <p className="letter-kicker">سرّ صغير ليكي إنتِ وبس</p>
        <p>يا نونتي، لو الدنيا في يوم تعبتك أو حسّيتي إن كل حاجة تقيلة، افتكري إن في قلب بيتمنالك الخير والراحة والفرحة من كل قلبه. نفسي أكون أمانك وسندك، وأشوف ضحكتك مطمّنة، ونبني مستقبل نفتخر بيه سوا. إنتِ غالية عندي، ومشاعري ليكي مش مجرد كلام في صفحة… دي نية حلوة بدعي ربنا يبارك فيها. 🤍</p>
        <span className="secret-signature">بحبك يا نونتي ✨</span>
      </div>

      <footer className="signature">
        <span aria-hidden="true">✦</span><p>رسالة من يوسف إلى حنين</p>
        <small>كل يوم حكاية جديدة… ولسه أجمل أيامنا جاية</small>
      </footer>
    </section>

    <button className={'music-button ' + (isPlaying ? 'is-playing' : '')} type="button" onClick={toggleMusic} aria-pressed={isPlaying}>
      <span className="music-icon" aria-hidden="true">{isPlaying ? 'Ⅱ' : '♫'}</span>
      <span>{isPlaying ? 'وقّفي الأغنية' : 'شغّلي أغنيتنا'}</span>
    </button>
    {musicError && <p className="music-error" role="status">{musicError}</p>}
    <audio ref={audioRef} src={SONG_URL} loop preload="none" onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} />
    <p className="page-note">اتصمّمت بحب، مخصوص لنونتي ♡</p>
  </main>;
}
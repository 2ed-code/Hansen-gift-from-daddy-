import { useEffect, useRef, useState } from 'react';
import { daysSince } from './dateUtils.js';

const RELATIONSHIP_START_DATE = '2026-02-17';
// Replace this URL with your chosen song MP3 when ready.
const SONG_URL = 'https://www.image2url.com/r2/default/files/1780677145758-8e39fc6a-d069-480d-ac2c-37aaf1ce9140.mp3';
const REASONS = [
  { title: 'ضحكتك', text: 'لأن ضحكتك بتخلّي اليوم العادي ذكرى حلوة.' },
  { title: 'قلبك', text: 'لأن طيبتك وتفاصيلك الصغيرة غالية عندي.' },
  { title: 'وجودك', text: 'لأن حتى الكلام البسيط معاكي بيطمن قلبي.' },
  { title: 'حلمنا', text: 'لأن نفسي نبني أيامنا واحدة واحدة، بحب وراحة ورضا.' }
];

function FloatingHearts({ burstKey }) {
  const [hearts, setHearts] = useState([]);
  useEffect(() => {
    if (!burstKey) return;
    const burst = Array.from({ length: 14 }, (_, i) => ({
      id: burstKey + '-' + i,
      left: 8 + Math.random() * 84,
      delay: Math.random() * 0.25,
      size: 13 + Math.random() * 12,
      symbol: ['♡', '♥', '✦'][i % 3]
    }));
    setHearts(burst);
    const timeout = window.setTimeout(() => setHearts([]), 2600);
    return () => window.clearTimeout(timeout);
  }, [burstKey]);
  return <div className="heart-rain" aria-hidden="true">
    {hearts.map((heart) => <span key={heart.id} className="falling-heart" style={{
      left: heart.left + '%', animationDelay: heart.delay + 's', fontSize: heart.size + 'px'
    }}>{heart.symbol}</span>)}
  </div>;
}

function Envelope({ opened, onOpen }) {
  return <button className={'envelope-button ' + (opened ? 'is-open' : '')} onClick={onOpen} type="button" aria-expanded={opened} aria-label={opened ? 'إغلاق الظرف' : 'افتحي الظرف واكتشفي المفاجأة'}>
    <span className="envelope-glow" />
    <span className="envelope">
      <span className="envelope-back" />
      <span className="envelope-paper"><span>إلى حنين، من يوسف</span><b>في كلام قلبي ليكي…</b></span>
      <span className="envelope-flap" />
      <span className="wax-seal">Y<span>♥</span>H</span>
    </span>
    <span className="envelope-hint">{opened ? 'المفاجأة اتفتحت ♡' : 'اضغطي على الختم وافتحي هديتك'}</span>
  </button>;
}

export default function App() {
  const [days, setDays] = useState(() => daysSince(RELATIONSHIP_START_DATE));
  const [opened, setOpened] = useState(false);
  const [secretOpen, setSecretOpen] = useState(false);
  const [reasonIndex, setReasonIndex] = useState(0);
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
      setMusicError('تعذّر تشغيل الموسيقى. اتأكدي من الإنترنت وجربي تاني.');
    }
  }

  return <main className="page-shell">
    <div className="night-glow glow-a" aria-hidden="true" />
    <div className="night-glow glow-b" aria-hidden="true" />
    <div className="grain" aria-hidden="true" />
    <FloatingHearts burstKey={burstKey} />

    <header className="intro">
      <span className="top-label"><i /> A LITTLE SURPRISE FOR YOU <i /></span>
      <p className="arabic-kicker">فيه حد في الدنيا دي… بيحبك أكتر ما تتخيلي</p>
      <h1>يا <em>نونتي</em></h1>
      <p className="intro-copy">عملتلك حاجة صغيرة، بس حطّيت فيها حتة كبيرة من قلبي.</p>
    </header>

    <section className="surprise-stage" aria-label="المفاجأة">
      <Envelope opened={opened} onOpen={() => { setOpened((value) => !value); if (!opened) setBurstKey((key) => key + 1); }} />
    </section>

    {opened && <section className="reveal-panel" aria-live="polite">
      <div className="section-eyebrow">✦ رسالة مخصوص ليكي ✦</div>
      <h2>حنين… إنتِ مش صدفة حلوة، إنتِ اختياري كل يوم.</h2>
      <p>يا نونتي، يمكن مش بعرف كل مرة أقول اللي جوايا بالطريقة الصح، بس الحقيقة إن وجودك بقى جزء من يومي ومن أحلامي. بحب تفاصيلك، صوتك، ضحكتك، وحتى الحكايات الصغيرة اللي يمكن إنتِ تنسيها وأنا تفضل في بالي.</p>
      <p>نفسي نكبر سوا، ونفرح بالخطوات الصغيرة قبل الكبيرة، ونبقى لبعض راحة وسند. ولما الأيام تبقى صعبة، نفتكر إننا فريق واحد، وإن الحب مش كلام حلو وبس… الحب اهتمام وصبر وصدق واختيار بيتجدد كل يوم.</p>
      <p>ربنا يحفظ قلبك، ويكتبلك كل خير، ويجمعنا على اللي فيه رضا وراحة. ولو هختار من أول وجديد، هختار أتعرف عليكي وأحبك تاني. 🤍</p>
      <div className="letter-end"><span>بحبك يا حنين</span><b>— يوسف</b></div>
    </section>}

    <section className="time-section">
      <div className="section-eyebrow">OUR LITTLE TIMELINE</div>
      <h2>كل يوم من يوم ما عرفتك، له مكانه</h2>
      <div className="counter-card">
        <span className="counter-caption">عدّى على حكايتنا</span>
        <div className="counter-number">{days.toLocaleString('ar-EG')} <small>يوم</small></div>
        <div className="counter-date"><span>♡</span> بدأت حكايتنا يوم ١٧ فبراير ٢٠٢٦ <span>♡</span></div>
        <div className="counter-progress" aria-hidden="true"><span style={{ width: ((days % 30) / 30 * 100) + '%' }} /></div>
        <small className="counter-footnote">والأجمل لسه قدّامنا، يوم ورا يوم.</small>
      </div>
    </section>

    <section className="reasons-section">
      <div className="section-eyebrow">LITTLE THINGS I LOVE</div>
      <h2>أربع حاجات… ولسه في كتير</h2>
      <div className="reason-card" key={reasonIndex}>
        <span className="reason-number">0{reasonIndex + 1} / 04</span>
        <span className="reason-symbol">{['✧', '♡', '☾', '∞'][reasonIndex]}</span>
        <h3>{REASONS[reasonIndex].title}</h3>
        <p>{REASONS[reasonIndex].text}</p>
        <div className="reason-controls">
          <button type="button" onClick={() => setReasonIndex((reasonIndex + REASONS.length - 1) % REASONS.length)} aria-label="السبب السابق">→</button>
          <span>{reasonIndex + 1} من {REASONS.length}</span>
          <button type="button" onClick={() => setReasonIndex((reasonIndex + 1) % REASONS.length)} aria-label="السبب التالي">←</button>
        </div>
      </div>
    </section>

    <section className="secret-section">
      <button type="button" className="secret-toggle" onClick={() => { setSecretOpen((value) => !value); if (!secretOpen) setBurstKey((key) => key + 1); }} aria-expanded={secretOpen}>
        <span className="secret-icon">{secretOpen ? '♡' : '✉'}</span>
        <span><b>{secretOpen ? 'اقفلي السر الصغير' : 'فيه سر صغير مستخبي ليكي'}</b><small>{secretOpen ? 'خليه بينا وبين بعض' : 'اضغطي هنا لوحدك واكتشفيه'}</small></span>
        <span className="secret-arrow">{secretOpen ? '−' : '+'}</span>
      </button>
      {secretOpen && <div className="secret-note">
        <span className="secret-star">✦</span>
        <p>لو جه يوم وشكّيتي إنك مش كفاية، افتكري إنك مش مطالبة تبقي مثالية عشان تتحبي. أنا بحبك وإنتِ على طبيعتك، بفرحتك وتعبك وهدوءك وكلامك الكتير. نفسي أكون الشخص اللي تقدري تكوني معاه على راحتك، من غير خوف ولا تكلّف. ربنا يخلّي قلبك مطمّن، ويخلّي بينا دايمًا مساحة للكلام والضحك والتفاهم. دي أمنيتي ليكي قبل ما تكون أمنية لينا. 🤍</p>
        <b>سرّ نونتي وبابي بس.</b>
      </div>}
    </section>

    <section className="music-card">
      <div className={'vinyl ' + (isPlaying ? 'spinning' : '')}><span>♡</span></div>
      <div className="music-copy"><b>موسيقى لحظتنا</b><small>{isPlaying ? 'خلي اللحظة تاخد وقتها…' : 'شغّليها وإنتِ بتقرأي رسالتي'}</small></div>
      <button type="button" className="play-button" onClick={toggleMusic} aria-label={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}>{isPlaying ? 'Ⅱ' : '▶'}</button>
    </section>
    {musicError && <p className="music-error" role="status">{musicError}</p>}
    <audio ref={audioRef} src={SONG_URL} loop preload="none" onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} />

    <footer className="page-footer">
      <div className="footer-mark">Y <span>♡</span> H</div>
      <p>من يوسف لحنين، بحبّ صادق ونية حلوة.</p>
      <small>17.02.2026 — وإلى كل الأيام اللي لسه جاية</small>
    </footer>
  </main>;
}

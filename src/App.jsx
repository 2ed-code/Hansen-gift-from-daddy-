import { useEffect, useRef, useState } from 'react';
import { daysSince } from './dateUtils.js';

const START_DATE = '2026-02-17';
const SONG_URL = 'https://orangefreesounds.com/wp-content/uploads/2025/04/Emotional-romantic-piano-music.mp3';
const REASONS = [
  { icon: '✧', title: 'ضحكتك', text: 'بتخلّي أبسط يوم عادي يبقى حاجة أفتكرها وأنا مبتسم.' },
  { icon: '☾', title: 'صوتك', text: 'فيه طمأنينة غريبة كده… كأن الدنيا بتهدى شوية.' },
  { icon: '♡', title: 'قلبك', text: 'بحب حنيتك وطريقتك وتفاصيلك اللي يمكن إنتِ مش واخدة بالك منها.' },
  { icon: '∞', title: 'حكايتنا', text: 'عشان مش عايز لحظات حلوة وبس؛ عايز نبني أيام حلوة كتير سوا.' },
  { icon: '✿', title: 'نونتي', text: 'عشان إنتِ مش شبه حد في قلبي… ليكي مكانك لوحدك.' }
];
const SURPRISES = [
  { title: 'قسيمة حضن طويل 🤍', text: 'صالحة في أي وقت، ومن غير تاريخ انتهاء. تتصرف أول ما نتقابل.' },
  { title: 'وعد صغير من يوسف ✨', text: 'هفضل أختار إننا نتكلم ونفهم بعض، ونحافظ على الحلو اللي بينا.' },
  { title: 'أمنية ليكي 🌷', text: 'يا رب أشوفك مبسوطة ومطمنة، وتوصلي لكل حاجة نفسك فيها.' },
  { title: 'رسالة من المستقبل 💌', text: 'تخيّلي نفسنا بعد سنين بنضحك على حكايات النهارده… نفسي نفضل أصحاب وحبايب.' },
  { title: 'مفاجأة أخيرة 🎁', text: 'الهدية الحقيقية مش الصفحة دي؛ هي كل مرة نختار فيها بعض ونصنع ذكرى جديدة.' }
];
const QUIZ_ANSWERS = [
  { label: 'أسمعك وأكون جنبك', correct: true },
  { label: 'أختفي وأسيبك لوحدك', correct: false },
  { label: 'أقولك متكبّريش الموضوع', correct: false }
];

function Confetti({ burstKey }) {
  const [pieces, setPieces] = useState([]);
  useEffect(() => {
    if (!burstKey) return;
    setPieces(Array.from({ length: 24 }, (_, i) => ({
      id: burstKey + '-' + i,
      x: 4 + Math.random() * 92,
      delay: Math.random() * 0.25,
      rotate: Math.random() * 260,
      hue: [344, 12, 39, 326, 52][i % 5]
    })));
    const timeout = window.setTimeout(() => setPieces([]), 1900);
    return () => window.clearTimeout(timeout);
  }, [burstKey]);
  return <div className="confetti-layer" aria-hidden="true">
    {pieces.map((piece) => <i key={piece.id} style={{
      left: piece.x + '%', animationDelay: piece.delay + 's',
      transform: 'rotate(' + piece.rotate + 'deg)', background: 'hsl(' + piece.hue + ' 76% 66%)'
    }} />)}
  </div>;
}

function SectionHeading({ eyebrow, children }) {
  return <div className="section-heading"><span>{eyebrow}</span><h2>{children}</h2></div>;
}

export default function App() {
  const [days, setDays] = useState(() => daysSince(START_DATE));
  const [letterOpen, setLetterOpen] = useState(false);
  const [surprise, setSurprise] = useState(null);
  const [reasonIndex, setReasonIndex] = useState(0);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [heartTaps, setHeartTaps] = useState(0);
  const [burstKey, setBurstKey] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [musicError, setMusicError] = useState('');
  const audioRef = useRef(null);

  useEffect(() => {
    const update = () => setDays(daysSince(START_DATE));
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
      setMusicError('الموسيقى ما اشتغلتش من المصدر الخارجي. جربي تاني أو افتحي رابط الموسيقى من المصدر.');
    }
  }

  function openSurprise() {
    const next = Math.floor(Math.random() * SURPRISES.length);
    setSurprise(SURPRISES[next]);
    setBurstKey((key) => key + 1);
  }

  return <main className="love-page" dir="rtl">
    <div className="ambient ambient-one" aria-hidden="true" />
    <div className="ambient ambient-two" aria-hidden="true" />
    <Confetti burstKey={burstKey} />

    <header className="hero">
      <div className="hero-topline"><span>17 · 02 · 2026</span><span className="top-heart">♥</span><span>حكايتنا لسه بتبدأ</span></div>
      <div className="hero-ornament" aria-hidden="true"><span>✿</span><i /><span>♡</span><i /><span>✿</span></div>
      <p className="hero-kicker">إلى البنت اللي ليها مكان مختلف</p>
      <h1>يا <em>نونتي</em><br /><span>يا حنين قلبي</span></h1>
      <p className="hero-description">مش مناسبة عادية… دي مساحة صغيرة معمولة مخصوص عشانك، فيها شوية من قلبي وشوية مفاجآت ليكي.</p>
      <button className="primary-button" type="button" onClick={() => { setLetterOpen(true); setBurstKey((key) => key + 1); }}>
        <span>افتحي رسالتي</span><b aria-hidden="true">↙</b>
      </button>
      <div className="hero-footnote"><span className="tiny-dot" /> معمولة بحب، من يوسف ليكي</div>
      <div className="hero-stamp" aria-hidden="true"><span>FOR</span><b>H</b><span>MY LOVE</span></div>
    </header>

    <section className="letter-section" id="letter">
      <div className={'letter-card ' + (letterOpen ? 'letter-card-open' : '')}>
        <div className="letter-top"><span>رسالة خاصة</span><span>♡ 01 / 05</span></div>
        <div className="letter-flower" aria-hidden="true">❦</div>
        {letterOpen ? <>
          <p className="letter-label">يا نونتي الحلوة،</p>
          <h2>وجودك بيخلّي للحكاية معنى تاني.</h2>
          <p>عارفة يا حنين، في ناس بتعدّي في حياتنا وخلاص، وفي حد بيغيّر شكل الأيام من غير ما يحس. إنتِ بالنسبالي من النوع التاني. بقيت أحب أحكيلك تفاصيل يومي، وأستنى ضحكتك، وأفرح بالحاجات الصغيرة اللي بتحصل بينا.</p>
          <p>أنا مش بوعدك إن كل يوم هيبقى مثالي، لكن بوعدك إني أفضل أحاول أخلي اللي بينا مليان صدق واهتمام وونس. نفسي نحقق أحلامنا واحدة واحدة، ونفضل نضحك مع بعض حتى بعد ما تبقى عندنا حكايات كتير نحكيها.</p>
          <p>ربنا يفرّح قلبك، ويطمن بالك، ويكتبلك الخير في كل خطوة. وإنتِ عارفة إن في حد هنا بيتمنى يشوفك دايمًا بخير، وبيفتخر بيكي، وبيحب وجودك في حياته أكتر ما الكلام يقدر يوصف.</p>
          <div className="letter-signoff"><span>من قلبي لقلبك،</span><strong>يوسف ♡</strong></div>
          <button className="text-button" type="button" onClick={() => setLetterOpen(false)}>اطوي الرسالة ↑</button>
        </> : <>
          <p className="letter-label">إلى حنين…</p>
          <h2>في كلام كتير نفسي أقولهولك.</h2>
          <p>فتحي الرسالة براحتك، واقريها كأنّي قاعد جنبك وبحكيلك من قلبي.</p>
          <button className="outline-button" type="button" onClick={() => setLetterOpen(true)}>افتحي الظرف <span>✉</span></button>
        </>}
      </div>
    </section>

    <section className="counter-section">
      <SectionHeading eyebrow="OUR STORY, ONE DAY AT A TIME">من يوم ١٧ فبراير… وإنتِ حكاية</SectionHeading>
      <div className="counter-panel">
        <div className="counter-ring"><span className="counter-heart">♥</span><strong>{days.toLocaleString('ar-EG')}</strong><small>يوم مع بعض</small></div>
        <p>كل يوم عدى زوّد في حكايتنا ذكرى، وكل يوم جاي لسه فيه مساحة لحاجة أجمل.</p>
        <div className="counter-meta"><span>البداية</span><b>١٧ فبراير ٢٠٢٦</b><span>والنهارده فصل جديد</span></div>
      </div>
    </section>

    <section className="reasons-section">
      <SectionHeading eyebrow="LITTLE THINGS, BIG FEELINGS">حاجات بحبها فيكي</SectionHeading>
      <div className="reason-card" key={reasonIndex}>
        <div className="reason-card-head"><span>ملاحظة من يوسف</span><span>{String(reasonIndex + 1).padStart(2, '0')} / {String(REASONS.length).padStart(2, '0')}</span></div>
        <div className="reason-icon">{REASONS[reasonIndex].icon}</div>
        <h3>{REASONS[reasonIndex].title}</h3>
        <p>{REASONS[reasonIndex].text}</p>
        <div className="reason-progress" aria-label={'السبب ' + (reasonIndex + 1) + ' من ' + REASONS.length}>
          {REASONS.map((reason, index) => <button key={reason.title} type="button" aria-label={'عرض ' + reason.title} className={index === reasonIndex ? 'active' : ''} onClick={() => setReasonIndex(index)} />)}
        </div>
        <div className="reason-actions">
          <button type="button" className="round-button" onClick={() => setReasonIndex((index) => (index + REASONS.length - 1) % REASONS.length)} aria-label="السابق">→</button>
          <span>واحدة من حاجات كتير بحبها</span>
          <button type="button" className="round-button" onClick={() => setReasonIndex((index) => (index + 1) % REASONS.length)} aria-label="التالي">←</button>
        </div>
      </div>
    </section>

    <section className="surprise-section">
      <SectionHeading eyebrow="PICK A LITTLE MAGIC">اختاري مفاجأتك 🎁</SectionHeading>
      <p className="section-description">كل ضغطة بتخبّي هدية مختلفة… يلا نشوف طالعلك إيه.</p>
      <button type="button" className="gift-button" onClick={openSurprise}>
        <span className="gift-emoji" aria-hidden="true">🎁</span><span>افتحي هدية عشوائية</span><small>اضغطي واكتشفي</small>
      </button>
      {surprise && <div className="surprise-reveal" aria-live="polite">
        <span className="surprise-sparkle">✦</span><h3>{surprise.title}</h3><p>{surprise.text}</p>
        <button type="button" className="text-button" onClick={openSurprise}>عايزة مفاجأة كمان ↻</button>
      </div>}
    </section>

    <section className="quiz-section">
      <SectionHeading eyebrow="A TINY LOVE QUIZ">سؤال صغير ليكي</SectionHeading>
      <div className="quiz-card">
        <span className="quiz-number">سؤال ١ من ١</span>
        <h3>لو يومي كان صعب، إيه أكتر حاجة هتفرق معايا؟</h3>
        <div className="quiz-options">
          {QUIZ_ANSWERS.map((answer) => <button type="button" key={answer.label} className={quizAnswer?.label === answer.label ? 'chosen' : ''} onClick={() => setQuizAnswer(answer)}>{answer.label}<span>{quizAnswer?.label === answer.label ? (answer.correct ? '♡' : '·') : '＋'}</span></button>)}
        </div>
        {quizAnswer && <p className={'quiz-feedback ' + (quizAnswer.correct ? 'correct' : '')} aria-live="polite">{quizAnswer.correct ? 'إجابة صح يا نونتي 🤍 ساعات وجودك وسماعك بس بيخلّي الدنيا أخف.' : 'قريبة، بس جرّبي تاني… أهم حاجة عندي إننا نسمع بعض ونبقى سند لبعض.'}</p>}
      </div>
    </section>

    <section className="heart-section">
      <div className="heart-card">
        <span className="heart-card-eyebrow">مقياس الحب الصغير</span><h2>ابعتيلي قلب من هنا ♡</h2><p>كل لمسة بتزوّد قلب في رصيد الدلع.</p>
        <button type="button" className="big-heart-button" onClick={() => { setHeartTaps((count) => count + 1); setBurstKey((key) => key + 1); }} aria-label="ابعتي قلب">♥</button>
        <div className="heart-count">{heartTaps.toLocaleString('ar-EG')} <span>قلب وصل من نونتي</span></div>
        {heartTaps >= 5 && <p className="heart-milestone">خلاص كده قلبي محتاج شاحن مخصوص ليكي 😭♡</p>}
      </div>
    </section>

    <section className="music-section">
      <SectionHeading eyebrow="A SOFT LITTLE SOUNDTRACK">موسيقى على هدوء الحكاية</SectionHeading>
      <div className="music-card">
        <div className={'record ' + (isPlaying ? 'record-playing' : '')} aria-hidden="true"><span>♡</span></div>
        <div className="music-info"><strong>لحن هادي للحظة دي</strong><span>{isPlaying ? 'سيبي الموسيقى تكمل الحكاية…' : 'شغّليها وإنتِ بتتصفحي الهدية'}</span><small>Soft romantic piano · Alexander Blu</small></div>
        <button type="button" className="music-toggle" onClick={toggleMusic} aria-label={isPlaying ? 'إيقاف الموسيقى' : 'تشغيل الموسيقى'}>{isPlaying ? 'Ⅱ' : '▶'}</button>
      </div>
      {musicError && <p className="music-error" role="status">{musicError} <a href="https://orangefreesounds.com/emotional-romantic-piano-music/" target="_blank" rel="noreferrer">المصدر</a></p>}
      <p className="music-credit">الموسيقى: Emotional Romantic Piano — Alexander Blu · <a href="https://creativecommons.org/licenses/by-nc/4.0/" target="_blank" rel="noreferrer">CC BY-NC 4.0</a></p>
      <audio ref={audioRef} src={SONG_URL} loop preload="none" onPause={() => setIsPlaying(false)} onPlay={() => setIsPlaying(true)} onError={() => { setIsPlaying(false); setMusicError('المصدر الموسيقي مش متاح دلوقتي.'); }} />
    </section>

    <footer className="footer">
      <div className="footer-flourish">✿　♡　✿</div><p>اتعملت مخصوص ليكي، يا حنين.</p><strong>من يوسف، بكل الحب.</strong>
      <small>17.02.2026 — وإلى كل الأيام اللي جاية</small>
      <button type="button" className="back-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>ارجعي لأول الحكاية ↑</button>
    </footer>
  </main>;
}
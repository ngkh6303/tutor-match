/* TutorLink HK style reminder: contemporary editorial design, warm paper, deep indigo, bookmark vermilion, asymmetrical layouts, DM Serif Display + IBM Plex Sans. */
import { useState } from "react";
import { ArrowUpRight, BookOpen, Check, ChevronDown, ClipboardCheck, Mail, Menu, ShieldCheck, Sparkles, X } from "lucide-react";
import { toast } from "sonner";

const heroImage = "/manus-storage/tutorlink-hero_1a469003.jpg";
const tutorImage = "/manus-storage/tutorlink-tutor_c743ef50.jpg";
const notesImage = "/manus-storage/tutorlink-notes_ac528698.jpg";
const logoImage = "/manus-storage/tutorlink-logo_49c89470.png";
const tutorFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd0oxmcshU8bqgeDbippxlRu2jJjtaw5G2pSnLHLCyDhF1vvQ/viewform?usp=publish-editor";

const faqs = [
  { q: "HK$600 包括甚麼？", a: "HK$600 是一次性的導師配對服務費，包括了解你的教學背景、整理需求、按條件推薦合適學生，以及協助建立初步聯絡。成功完成首次配對後，TutorLink HK 不會再向導師收取平台服務費、月費或佣金。" },
  { q: "之後真的不再收費嗎？", a: "按現行方案，導師只需支付一次 HK$600 配對服務費。其後不設月費、續費、課堂抽成或按學生收取的佣金；如日後更改方案，會先清楚公布並只適用於新申請。" },
  { q: "如果配對不合適，可以怎樣處理？", a: "首次推薦後，如學生需求與你的科目、年級、地區或時間明顯不符，請在 7 日內聯絡我們。我們會按實際情況作一次免費重新配對；重新配對不代表保證一定成功接單。" },
  { q: "需要甚麼導師資料？", a: "我們會要求基本身份及聯絡資料、可教授科目與年級、學歷或教學經驗、可授課地區／模式、時間及期望課酬。資料只會在獲你同意後，用於配對及聯絡。" },
  { q: "平台會否保證學生數量或收入？", a: "不會。TutorLink HK 提供的是配對及介紹服務，不保證學生數量、課堂時數、收入、學生最終聘用或長期續課。導師與家長／學生需要自行確認課堂安排及合作條件。" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleApply = () => {
    toast.success("正在開啟導師申請表", { description: "請在 Google Form 填寫你的教學資料。" });
    window.open(tutorFormUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="site-shell">
      <header className="topbar">
        <a className="brand" href="#top" aria-label="TutorLink HK 首頁">
          <img src={logoImage} alt="TutorLink HK 標誌" />
          <span><strong>TutorLink</strong><em>HK</em></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label="開啟選單">{menuOpen ? <X size={21} /> : <Menu size={21} />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#why" onClick={() => setMenuOpen(false)}>為何加入</a>
          <a href="#process" onClick={() => setMenuOpen(false)}>配對流程</a>
          <a href="#rules" onClick={() => setMenuOpen(false)}>服務規則</a>
          <a href="#faq" onClick={() => setMenuOpen(false)}>常見問題</a>
          <button className="nav-cta" onClick={handleApply}>申請成為導師 <ArrowUpRight size={16} /></button>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow"><span>01</span> 導師招募・香港一對一配對</p>
          <h1>把你的教學，<br /><i>帶到對的人面前。</i></h1>
          <p className="hero-lede">我們替你整理需求、理解專長，連接正在尋找一對一補習導師的學生與家長。</p>
          <div className="hero-actions">
            <button className="primary-btn" onClick={handleApply}>以 HK$600 開始配對 <ArrowUpRight size={18} /></button>
            <button className="text-btn" onClick={() => scrollToId("rules")}>先了解服務規則 <span>↓</span></button>
          </div>
          <div className="hero-note"><ShieldCheck size={17} /><span><b>一次性收費</b>　配對後不再收取平台費用</span></div>
        </div>
        <div className="hero-visual">
          <img src={heroImage} alt="安靜而有秩序的書房與學習桌面" />
          <div className="price-card"><span className="card-label">ONE-TIME MATCHING FEE</span><strong><small>HK$</small>600</strong><p>只收一次<br />之後不再收費</p><div className="card-mark">↗</div></div>
          <div className="side-caption">DESIGNED FOR<br />HONG KONG TUTORS</div>
        </div>
      </section>

      <section id="why" className="section why-section">
        <div className="section-index">02 <span>THE SIMPLE PROMISE</span></div>
        <div className="why-intro"><h2>少一點抽成，<br /><i>多一點專注。</i></h2><p>我們相信導師應該把時間留給備課與教學，而不是反覆計算平台費。方案簡單、價格透明，合作前先講清楚每一步。</p></div>
        <div className="feature-stack">
          <article className="feature"><span className="feature-no">01</span><div><h3>一次付款，長期清楚</h3><p>HK$600 配對服務費一次付清，不設月費、續費、課堂抽成或隱藏收費。</p></div><Check /></article>
          <article className="feature"><span className="feature-no">02</span><div><h3>配對條件由你話事</h3><p>科目、年級、地區、上課模式、時間與課酬，由你先設定合適範圍。</p></div><Check /></article>
          <article className="feature"><span className="feature-no">03</span><div><h3>資料先獲同意，再作介紹</h3><p>我們只按你授權的資料進行配對及聯絡，不把導師資料公開成任意瀏覽的名單。</p></div><Check /></article>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="process-art"><img src={notesImage} alt="教學筆記與文具" /><div className="vertical-note">A CLEARER WAY TO MATCH</div></div>
        <div className="process-content"><div className="section-index">03 <span>HOW IT WORKS</span></div><h2>四步，<br /><i>由認識到配對。</i></h2><p className="muted">不用長期綁約，不用追逐大量廣告。先讓我們認識你的教學方式，再一起判斷每個學生需求是否適合。</p>
          <div className="steps"><div><b>01</b><span><strong>提交導師資料</strong><small>填寫科目、經驗、時段及期望條件。</small></span></div><div><b>02</b><span><strong>支付一次性 HK$600</strong><small>確認服務範圍後才進入配對程序。</small></span></div><div><b>03</b><span><strong>收到合適需求</strong><small>按你的條件整理並介紹相關學生需求。</small></span></div><div><b>04</b><span><strong>自行確認合作</strong><small>由你與家長／學生確認課堂細節。</small></span></div></div>
        </div>
      </section>

      <section id="rules" className="rules-section"><div className="rules-inner"><div className="section-index light">04 <span>THE WORKING RULES</span></div><div className="rules-heading"><h2>先把規則<br /><i>寫在桌面上。</i></h2><p>透明不是一句口號，而是讓你在付款前知道服務做到哪裡、不做到哪裡。</p></div><div className="rules-grid"><div className="rule-card"><ClipboardCheck size={22} /><h3>服務包括</h3><ul><li>導師資料及教學條件初步整理</li><li>按科目、年級、地區及時段進行配對</li><li>提供學生／家長需求的初步介紹</li><li>首次配對明顯不合適時，7 日內可申請一次重新配對</li></ul></div><div className="rule-card"><BookOpen size={22} /><h3>服務不包括</h3><ul><li>不保證學生數量、收入或最終聘用</li><li>不代替導師與家長議定課酬及課堂安排</li><li>不負責課堂教學質素、取消課堂或私下爭議</li><li>不代表導師作出學歷、經驗或背景聲明</li></ul></div><div className="rule-card accent-card"><Sparkles size={22} /><h3>收費與退款</h3><ul><li>配對服務費為 HK$600，一次性收取</li><li>開始整理及配對後，費用原則上不設退款</li><li>如因平台未能按約提供基本配對服務，會按個案處理</li><li>任何新收費安排會清楚列明於付款前</li></ul></div></div><p className="legal-note">以上為網站服務規則草案，正式營運前應按實際公司資料、付款安排、私隱政策及香港適用法規作最終審閱。</p></div></section>

      <section className="tutor-story"><div className="story-image"><img src={tutorImage} alt="專業導師在書桌旁準備教學" /><span>THE PEOPLE<br />BEHIND THE LESSON</span></div><div className="story-copy"><div className="section-index">05 <span>WHO WE WELCOME</span></div><h2>你不只是<br /><i>一個科目。</i></h2><p>我們歡迎有責任感、願意溝通，並重視學生學習需要的導師加入。無論你是大學生、在職教師，還是有豐富經驗的專科導師，都可以先讓我們了解你的專長。</p><div className="tag-row"><span>大專生導師</span><span>在職教師</span><span>專科導師</span><span>網課導師</span></div><button className="outline-btn" onClick={handleApply}>分享你的教學資料 <ArrowUpRight size={17} /></button></div></section>

      <section id="faq" className="section faq-section"><div className="faq-heading"><div className="section-index">06 <span>QUESTIONS, ANSWERED</span></div><h2>你想知道的，<br /><i>我們先寫好。</i></h2></div><div className="faq-list">{faqs.map((faq, i) => <div className={openFaq === i ? "faq-item active" : "faq-item"} key={faq.q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{faq.q}</span><ChevronDown size={20} /></button>{openFaq === i && <p>{faq.a}</p>}</div>)}</div></section>

      <section id="apply" className="apply-section"><div className="apply-copy"><div className="section-index light">07 <span>TAKE THE FIRST STEP</span></div><h2>有合適學生時，<br /><i>通知我。</i></h2><p>導師申請表現已開放。填寫你的教學背景與可配對條件，讓我們按科目、年級、地區及時間了解你。</p></div><div className="apply-card"><div className="apply-card-top"><Mail size={21} /><span>Google Form 導師申請</span></div><h3>先留下你的<br />教學方向。</h3><p>姓名、專長科目、可授課地區／模式、時間、課酬及教學經驗。</p><a className="primary-btn" href={tutorFormUrl} target="_blank" rel="noreferrer">開啟導師申請表 <ArrowUpRight size={18} /></a></div></section>

      <footer><div className="footer-brand"><img src={logoImage} alt="" /><span><strong>TutorLink</strong><em>HK</em></span></div><p>一對一補習導師配對，清楚、直接、只收一次。</p><div className="footer-links"><a href="#rules">服務規則</a><a href="#faq">常見問題</a><a href={tutorFormUrl} target="_blank" rel="noreferrer">導師申請表</a></div><small>© 2026 TutorLink HK · 服務規則草案，正式上線前更新</small></footer>
    </main>
  );
}

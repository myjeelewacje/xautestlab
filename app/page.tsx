import Link from "next/link";
import { KickPlayer } from "@/components/KickPlayer";
import { InterestForm, PollBox, QuestionForm } from "@/components/Forms";
import { db } from "@/lib/db";

export const dynamic = "force-dynamic";

const faqs = [
  ["Is this financial advice?", "No. The website documents an experimental trading-bot project and does not provide financial advice."],
  ["Are profits guaranteed?", "No. Trading involves substantial risk, and the bot can generate losses."],
  ["Can I follow the progress live?", "Yes. Testing sessions and updates will be streamed on Kick when available."],
  ["Can I test it on a demo account first?", "Demo testing may be offered during later testing stages. Register your interest to receive updates."],
  ["Is the bot only for XAUUSD?", "The current testing phase focuses on XAUUSD and MetaTrader 5."],
  ["How often are questions answered?", "New public answers are planned once per day."],
];

export default async function Home() {
  const questions = await db.visitorQuestion.findMany({ where: { approved: true, published: true, rejected: false }, orderBy: { createdAt: "desc" }, take: 6 });
  const kick = "https://kick.com/XAUtestlabLIVE";

  return <>
    <header>
      <a className="brand" href="#top"><span>XA</span>XAU<span>TestLab</span></a>
      <nav><a href="#how">How It Works</a><a href="#poll">Interest Poll</a><a href="#questions">Live Q&amp;A</a><a href="#faq">FAQ</a></nav>
      <a className="button ghost" href="#live-player">LIVE NOW</a>
    </header>
    <main id="top">
      <section className="hero">
        <div className="hero-copy">
          <span className="badge"><i /> Testing Phase</span>
          <h1>Automated XAUUSD Trading Bot for <em>MT5</em></h1>
          <p>The bot is already running and being tested. I’m sharing the progress live and looking for early users who want to follow the testing phase and help shape how access will be offered.</p>
          <div className="actions"><a className="button" href="#live-player">▶ Watch Live</a><a className="button ghost" href="#register">Register Interest</a></div>
          <div className="live on"><i />Live XAUUSD Bot Testing</div>
        </div>
        <KickPlayer />
      </section>
      <aside className="disclosure">⚠ <span><b>Experimental testing project.</b> Results can vary, losses are possible, and nothing on this website is financial advice or a guarantee of performance.</span></aside>
      <PollBox />
      <div className="two">
        <InterestForm />
        <section className="panel questions" id="questions">
          <span className="eyebrow">Live Q&amp;A</span><h2>Live Questions from Visitors</h2><p>Ask anything — new answers are posted once a day.</p><QuestionForm />
          <div className="question-list">{questions.length ? questions.map(q => <article key={q.id}><div><b>{q.displayName || "Visitor"}</b><time>{q.createdAt.toLocaleDateString("en-GB")}</time></div><p>{q.question}</p><small>{q.answer ? "Answered" : "Waiting for answer"}</small>{q.answer && <blockquote>{q.answer}</blockquote>}</article>) : <div className="empty">No published questions yet. Be the first to ask.</div>}</div>
        </section>
      </div>
      <section id="how"><div className="section-title"><span className="eyebrow">A transparent testing loop</span><h2>How it works</h2></div><div className="steps">{[["01", "Watch live results", "Follow the bot’s testing progress on Kick."], ["02", "Vote how you want access", "Help decide whether the bot should be sold, offered through a commission model, or released another way."], ["03", "Join the testing phase", "Register your interest and receive future testing updates."]].map(x => <article className="panel" key={x[0]}><span>{x[0]}</span><h3>{x[1]}</h3><p>{x[2]}</p></article>)}</div></section>
      <section id="faq" className="faq"><div className="section-title"><span className="eyebrow">Clear answers</span><h2>Frequently asked questions</h2></div>{faqs.map(f => <details key={f[0]}><summary>{f[0]}<span>+</span></summary><p>{f[1]}</p></details>)}</section>
    </main>
    <footer><div className="brand">XAU<span>TestLab</span></div><p>Early Access Testing · Built for transparent experimentation.</p><div><Link href="/privacy">Privacy Policy</Link><Link href="/terms">Terms &amp; Risk Disclosure</Link><a href={kick} target="_blank" rel="noopener noreferrer">Kick</a></div><small>© {new Date().getFullYear()} XAUTestLab. All rights reserved.</small></footer>
  </>;
}

import styles from "./AccessProcess.module.css";

const assurances = [
  ["The bot is not for sale", "We do not sell or publish the bot, its source code or its strategy."],
  ["Your account stays yours", "We never receive access to your Fusion Markets login, account or funds."],
  ["No entry fee", "There is no upfront fee to apply or enter the early-access process."],
] as const;

export function AccessProcess() {
  return <section className={`panel ${styles.access}`} aria-labelledby="access-title">
    <div className={styles.intro}>
      <div><span className="eyebrow">How to join</span><h2 id="access-title">Join through early access</h2></div>
      <p>Start by submitting the <a href="#register">early-access registration form</a>. If selected, we contact you after review and send a private invitation that lets your own Fusion Markets account follow our trading account through Fusion+.</p>
    </div>

    <div className={styles.assurances}>{assurances.map(([title, text]) => <article key={title}><i>✓</i><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>

    <div className={styles.platform}>
      <div><span className={styles.platformLabel}>Copy-trading platform</span><h3>Powered through Fusion Markets</h3><p>Our bot runs only on our own Fusion Markets account. Fusion+ makes it possible for approved participants to follow that account, review live performance through the Fusion Markets Client Hub and use an agreed lot setting—without us taking custody of participant funds.</p></div>
      <div className={styles.platformLinks}><a href="https://fusionmarkets.com/Platforms/Fusion-plus" target="_blank" rel="noopener noreferrer">About Fusion+ ↗</a><a href="https://hub.fusionmarkets.com/" target="_blank" rel="noopener noreferrer">Fusion Markets Client Hub ↗</a></div>
    </div>

    <div className={styles.phases}>
      <article><span>Phase 1</span><h3>Entry phase · first month</h3><p>Phase 1 is mandatory and uses a fixed <b>0.01-lot setting</b> for the full first month. You can follow the same live testing progress shown on this website. The live testing account may move to 0.02 lots when its 3% daily balance target is not reached; this target is not guaranteed and does not automatically change the participant setting.</p><small>A 30% performance fee applies to net copy-trading profits during phase 1. No fee is charged when there is no net copy profit.</small></article>
      <article><span>Phase 2</span><h3>Personal setting after review</h3><p>After phase 1 is completed, we contact you. You can then discuss the lot setting used for copying, based on your own risk tolerance and account circumstances.</p><small>The performance-fee percentage is reduced for phase 2 and agreed with you before the next phase starts.</small></article>
    </div>

    <div className={styles.cta}><div><b>Ready to apply?</b><p>Create or use your own Fusion Markets account, then register here so we can review your application and contact you with the private following link.</p></div><a className="button" href="#register">Register for early access</a></div>
    <p className={styles.risk}>Copy trading and leveraged products involve substantial risk. You remain responsible for your account, lot setting and trading decisions. Targets and historical results are not guarantees of future returns, and losses can exceed copied profits.</p>
  </section>;
}

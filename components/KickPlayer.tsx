"use client";

import { useState } from "react";
import styles from "./KickPlayer.module.css";

const channelUrl = "https://kick.com/XAUtestlabLIVE";

export function KickPlayer({ live }: { live: boolean }) {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.card} id="live-player">
      <div className={styles.frame}>
        <div className={`${styles.status} ${live ? styles.on : ""}`}><i /> XAUtestlabLIVE {live ? <b>LIVE</b> : <span>Currently offline</span>}</div>
        {!loaded && !failed && <div className={styles.placeholder}>Loading XAUtestlabLIVE…</div>}
        {failed ? <div className={`${styles.placeholder} ${styles.fallback}`}><p>The embedded player could not be loaded. Watch directly on Kick.</p><a className="button" href={channelUrl} target="_blank" rel="noopener noreferrer">Watch on Kick</a></div> : <iframe className={loaded ? styles.loaded : ""} src="https://player.kick.com/XAUtestlabLIVE?autoplay=false&muted=false" title="XAUTestLab live stream on Kick" allow="autoplay; fullscreen" allowFullScreen loading="lazy" onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />}
      </div>
      <div className={styles.meta}><strong>{live ? "Live XAUUSD Bot Testing" : "Currently offline"}</strong>{!live && <a className="button ghost" href={channelUrl} target="_blank" rel="noopener noreferrer">Follow XAUtestlabLIVE on Kick</a>}</div>
      <p className={styles.disclosure}>Live streams show experimental testing only. Trading involves substantial risk. Nothing shown is financial advice or a guarantee of future performance.</p>
    </div>
  );
}

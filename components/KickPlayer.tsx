"use client";

import { useState } from "react";
import styles from "./KickPlayer.module.css";

const channelUrl = "https://kick.com/XAUtestlabLIVE";

export function KickPlayer() {
  const [failed, setFailed] = useState(false);

  return (
    <div className={styles.card} id="live-player">
      <div className={styles.frame}>
        <div className={`${styles.status} ${styles.on}`}><i /> <span>XAUtestlabLIVE</span> <b>LIVE NOW</b></div>
        {failed ? (
          <div className={`${styles.placeholder} ${styles.fallback}`}>
            <p>Unable to load the embedded stream. Watch directly on Kick.</p>
            <a className="button" href={channelUrl} target="_blank" rel="noopener noreferrer">Open Kick Stream</a>
          </div>
        ) : (
          <iframe
            src="https://player.kick.com/XAUtestlabLIVE?autoplay=false"
            title="XAUTestLab live stream on Kick"
            allow="autoplay; fullscreen"
            allowFullScreen
            onError={() => setFailed(true)}
          />
        )}
      </div>
      <div className={styles.meta}><strong>Live XAUUSD Bot Testing</strong></div>
      <p className={styles.disclosure}>Live streams show experimental testing only. Trading involves substantial risk. Nothing shown is financial advice or a guarantee of future performance.</p>
    </div>
  );
}

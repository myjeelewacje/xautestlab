import styles from "./Performance.module.css";

const points = [
  ["15 Jul", 540], ["16 Jul", 610], ["17 Jul", 670], ["20 Jul", 755],
  ["21 Jul", 795], ["22 Jul", 855], ["23 Jul", 815], ["24 Jul", 865],
  ["27 Jul", 945], ["28 Jul", 995], ["29 Jul", 1045], ["30 Jul", 1095],
  ["31 Jul", 1175], ["3 Aug", 1231.19],
] as const;

const width = 1000;
const height = 350;
const left = 58;
const right = 20;
const top = 18;
const bottom = 48;
const min = 500;
const max = 1300;
const plotWidth = width - left - right;
const plotHeight = height - top - bottom;
const coords = points.map(([, value], index) => ({
  x: left + (index / (points.length - 1)) * plotWidth,
  y: top + ((max - value) / (max - min)) * plotHeight,
}));
const line = coords.map(point => `${point.x},${point.y}`).join(" ");
const area = `${left},${height - bottom} ${line} ${width - right},${height - bottom}`;

const metrics = [
  ["Profit & Loss", "$690.85 USD"],
  ["Balance", "$1,231.19 USD"],
  ["Equity", "$1,190.63 USD"],
  ["Equity level", "96.71%"],
  ["Performance", "+138.17%"],
] as const;

export function Performance() {
  return <section className={`panel ${styles.performance}`} id="performance" aria-labelledby="performance-title">
    <div className={styles.heading}>
      <div><span className="eyebrow">Bot performance</span><h2 id="performance-title">Performance update</h2><p>Testing account snapshot · Updated 3 August 2026</p></div>
      <span className={styles.date}><i /> Latest update</span>
    </div>
    <div className={styles.metrics}>
      {metrics.map(([label, value], index) => <div className={styles.metric} key={label}><small>{label}</small><strong className={index === metrics.length - 1 ? styles.positive : ""}>{value}</strong></div>)}
    </div>
    <div className={styles.chart}>
      <div className={styles.toolbar}><b>Balance growth</b><span>15 July – 3 August 2026</span></div>
      <svg viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Balance increased from 540 US dollars on 15 July to 1,231.19 US dollars on 3 August 2026">
        <defs><linearGradient id="performanceArea" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#78dc3b" stopOpacity=".28"/><stop offset="1" stopColor="#78dc3b" stopOpacity=".02"/></linearGradient></defs>
        {[500, 600, 700, 800, 900, 1000, 1100, 1200, 1300].map(value => { const y = top + ((max - value) / (max - min)) * plotHeight; return <g key={value}><line className={styles.grid} x1={left} x2={width - right} y1={y} y2={y}/><text className={styles.axis} x={left - 10} y={y + 4} textAnchor="end">${value}</text></g>; })}
        <polygon points={area} fill="url(#performanceArea)"/>
        <polyline points={line} className={styles.line}/>
        {coords.map((point, index) => <g key={points[index][0]}><circle cx={point.x} cy={point.y} r="5" className={styles.point}/><text className={`${styles.axis} ${styles.xAxis}`} x={point.x} y={height - 18} textAnchor="middle">{points[index][0]}</text></g>)}
      </svg>
    </div>
    <p className={styles.note}>Historical testing results are a snapshot, not a guarantee of future performance. Trading involves risk and losses are possible.</p>
  </section>;
}

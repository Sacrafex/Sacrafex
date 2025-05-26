const fs = require("fs");
const dayjs = require("dayjs");
const duration = require("dayjs/plugin/duration");

dayjs.extend(duration);

const birthdate = dayjs("2010-03-01T00:00:00Z");
const now = dayjs();
const diff = now.diff(birthdate);
const uptimeDuration = dayjs.duration(diff);

const years = Math.floor(uptimeDuration.asYears());
const months = uptimeDuration.months();
const days = uptimeDuration.days();

const uptime = `${years}y ${months}m ${days}d`;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="300" height="20">
  <linearGradient id="grad" x1="0" y1="0" x2="1" y2="0">
    <stop offset="0%" stop-color="#8e2de2"/>
    <stop offset="100%" stop-color="#4a00e0"/>
  </linearGradient>
  <rect rx="3" width="300" height="20" fill="url(#grad)"/>
  <text x="150" y="14" fill="#fff" text-anchor="middle" font-family="monospace" font-size="12">
    Uptime $> ${uptime}
  </text>
</svg>
`;

fs.writeFileSync("uptime.svg", svg.trim());

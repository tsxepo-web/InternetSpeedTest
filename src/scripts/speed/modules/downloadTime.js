export function responseTime() {
const [entry] = performance.getEntriesByType('navigation');
const downloadTime = (entry.responseEnd - entry.requestStart) / 1000;
return downloadTime;
}
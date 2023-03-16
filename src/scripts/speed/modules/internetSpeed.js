import { contentLength } from "../downloadProgress.js";
import { responseTime } from "./downloadTime.js";

export function speed() {  
  var timeInSeconds = responseTime();
  const fileSizeBytes = contentLength;
  const fileSizeBits = fileSizeBytes * 8;
  const speedMbps = ((fileSizeBits / timeInSeconds) / 1024 / 1024).toFixed(0);
  return speedMbps;
}
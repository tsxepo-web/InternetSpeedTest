export function showProgress(percentage, progressCircle) {
    let radius = progressCircle.r.baseVal.value;
    let circumference = radius * 2 * Math.PI;

    progressCircle.style.strokeDasharray = circumference;
    progressCircle.style.strokeDashoffset = circumference  - (percentage / 100 ) * circumference;
}
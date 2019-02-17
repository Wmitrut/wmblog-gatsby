export function cups(minutes) {
    let cups = Math.round(minutes / 5);
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min de leitura`;
} 
function timeFormate(n) {
    const hour = Math.floor(n / 3600);
    const min = Math.floor((n % 3600) / 60);
    const sec = n % 60;
    return `${hour} hour : ${min} min : ${sec} sec`;
}

console.log(timeFormate(5654));

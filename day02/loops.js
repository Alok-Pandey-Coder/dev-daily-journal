function sumOfN(n) {
    let sum = (n * (n+1))/2;
  return sum;
}

function printMultiplicationTable(n) {
    let arr = [];
    for(let i = 1; i <= 10; i++) {
        arr.push(`${n} * ${i} = ${n * i}`);
    }
  return arr;
}

function countVowels(str) {
    let str2 = str.toLowerCase();
    let cnt = 0;
    for(let ch of str2) {
        if(ch === 'a' || ch ==='e' || ch==='i' || ch ==='o' || ch ==='u') {
            cnt++;
        }
    }
  return cnt;
}

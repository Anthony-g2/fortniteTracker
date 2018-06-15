function levelTiers(l=1,s=0,g=100) {
  let stars = s;
  for (let i = l+1;i < g+1;i ++){
    if (i % 5 === 0 && i % 10 !== 0) {
      stars += 5;
    } else if (i % 10 === 0) {
      stars += 10;
    } else {
      stars += 2;
    }
  }
  return this.tiers(stars);
}

funciton tiers(s) {
  if (s < 10) {
    return `${s} stars`;
  } else if (s % 10 === 0) {
    let t = s / 10;
    return `${t} tiers`;
  } else {
    let op = [],
        sNum = s.toString();
    for (let i = 0; i < sNum.length; i += 1) {
      op.push(+sNum.charAt(i));
    }
    let	starTot = op[op.length - 1],
        tierPop = op.pop(),
        tierTot = op.join('');
    return `${tierTot} tiers and ${starTot} stars`
  }
}

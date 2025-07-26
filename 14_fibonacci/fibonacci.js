const fibonacci = function(num) {
  const numtonum = Number(num);
 if (numtonum < 0) {
        return;
    }
    if (numtonum === 0) {
        return 0;
    }
 let sequence = [0, 1];
for (let i = 2; i <= numtonum; i++){
  let addtosequence = sequence[i - 1] + sequence[i - 2];
  sequence.push(addtosequence);
}
  let seqnum = sequence.at(numtonum);
  return seqnum;

};

// Do not edit below this line
module.exports = fibonacci;

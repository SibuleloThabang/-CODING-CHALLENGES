
function multiples(integer) {
  let sum = 0;

  for (let i = 0; i < integer; i++) {
    if ( i % 3 === 0 || i % 5 === 0) {
      sum += i;

    }
  }
  return sum;
}

module.exports = { multiples };


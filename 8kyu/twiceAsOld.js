// problem:
// Your function takes two arguments:
// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

// solution:

function twiceAsOld(dadYearsOld, sonYearsOld) {
  const diff = sonYearsOld * 2;
  const calc = dadYearsOld - diff;
  if (calc < 0){
    return calc - calc - calc;
  }
  return calc
  }


  // solution 2:
  function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - 2 * sonYearsOld);
  }

twiceAsOld(36,7)
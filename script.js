const firstNum = +prompt('Please enter the first num');
const secondNum = +prompt('Please enter the second num');
const rule = prompt('Please enter the rule');

const calculationRules = {
  sum: '+',
  dif: '-',
  mult: '*',
  div: '/'
}

function getCalculation(firstNum, secondNum, rule) {
  if (rule === calculationRules.sum) {
    return firstNum + secondNum;
  } else if (rule === calculationRules.dif) {
    return firstNum - secondNum;
  } else if (rule === calculationRules.mult) {
    return firstNum * secondNum;
  } else if (rule === calculationRules.div) {
    return firstNum / secondNum;
  } else {
    return 'Please enter correct data';
  }
}

console.log(getCalculation(firstNum, secondNum, rule));
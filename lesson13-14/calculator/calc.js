window.addEventListener('load', function () {

  showM()
  let mathOp = {
    fNum: null,
    sNum: null,
    operator: null,
    waitSecNum: false,
    displayNum: '0',
    '+': function (a = this.fNum, b = this.sNum) {return a + b},
    '-': function (a = this.fNum, b = this.sNum) {return a - b},
    '/': function (a = this.fNum, b = this.sNum) {return a / b},
    '*': function (a = this.fNum, b = this.sNum) {return a * b},
  };

  function input(num) {
    if (mathOp.waitSecNum) {
      mathOp.displayNum = num;
      mathOp.waitSecNum = false;
    } else {
      mathOp.displayNum = (mathOp.displayNum === '0') ? num : mathOp.displayNum + num;
    }
  }

  function inputDecimal(dot) {
    if (!mathOp.displayNum.includes(dot)) {
      mathOp.displayNum += dot;
    }
  }

  function handleOperator(nextOperator) {
    const {fNum, displayNum, operator} = mathOp
    const inputValue = parseFloat(displayNum);

    if (operator && mathOp.waitSecNum) {
      mathOp.operator = nextOperator;
      return;
    }

    if (fNum == null && !isNaN(inputValue)) {
      mathOp.fNum = inputValue;
    } else if (operator) {
      const result = mathOp[operator](fNum, inputValue);

      mathOp.displayNum = String(result);
      mathOp.fNum = result;
    }

    mathOp.waitSecNum = true;
    mathOp.operator = nextOperator;
  }

  function resetCalculator() {
    mathOp.displayNum = '0';
    mathOp.waitSecNum = false;
    mathOp.operator = null;
  }

  const display = document.querySelector('.display').querySelector('input');

  function updateDisplay() {
    display.value = mathOp.displayNum;
  }

  function saveSessionData(){
    sessionStorage.setItem('savedNum', display.value)
  }

  function showM() {
      if (sessionStorage.savedNum) {
        m.style.visibility = 'visible'
      } else {
        m.style.visibility = 'hidden'
      }
    }

  const btn = document.querySelector('.orange');
  btn.disabled = false;
  const keys = document.querySelector('.keys');
  let k = 1;
  keys.addEventListener('click', function (e) {
    // debugger
    if (e.target.value === 'mrc'){
      if (display.value === sessionStorage.getItem('savedNum')){
        sessionStorage.clear()
      }
    display.value = sessionStorage.getItem('savedNum')

    showM()
    }

    if (e.target.value === 'm+' || e.target.value === 'm-'){
      saveSessionData()
      showM()

      return;
    }
    if (e.target.value === 'C') {
      resetCalculator();
      updateDisplay();
      return;
    }

    if (e.target.closest('.pink, .orange')) {
      handleOperator(e.target.value);
      updateDisplay();
      return;
    }

    if (e.target.value === '.') {
      inputDecimal(e.target.value);
      updateDisplay();
      return;
    }

    if (!isNaN(e.target.value)) {
      input(e.target.value);
      updateDisplay();
      return;
    }
  })
})
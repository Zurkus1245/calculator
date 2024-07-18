const EXCHANGE_RATE = 0.92; // Курс обмена, 1 доллар = 0.92 евро

function convertCurrency() {
  var usdAmount = document.getElementById('usdInput').value;
  var eurAmount = (usdAmount * EXCHANGE_RATE).toFixed(2);
  document.getElementById('eurOutput').textContent = usdAmount + ' USD равно ' + eurAmount + ' EUR';
}
function calculateChocolates() {
    var money = document.getElementById('moneyInput').value;
    var chocolatePrice = document.getElementById('chocolatePriceInput').value;
    var chocolates = Math.floor(money / chocolatePrice);
    var change = (money - chocolates * chocolatePrice).toFixed(2);
  
    document.getElementById('chocolateOutput').textContent = 'Вы можете купить ' + chocolates + ' шоколадок и у вас останется сдачи: ' + change + ' руб.';
  }
  function calculateSpeed() {
    var distance = document.getElementById('distanceInput').value;
    var time = document.getElementById('timeInput').value;
    var speed = (distance / time).toFixed(2);
  
    document.getElementById('speedOutput').textContent = 'Необходимая скорость: ' + speed + ' км/ч.';
  }
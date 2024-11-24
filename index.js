let dollarToPeso = document.getElementById("DTP");
let pesoToDollar = document.getElementById("PTD");
let result = document.getElementById("result");

function convert() {
  let convert = 58.94;

  let input = document.getElementById("mytext").value;
  input = Number(input);

  if (pesoToDollar.checked) {
    input = input / convert;
    result.innerHTML = "₱ " + input;
    if (input < 0) {
      result.innerHTML = "Bawal zeroo";
    }
  } else if (dollarToPeso.checked) {
    input = input * convert;
    result.innerHTML = "₱ " + input.toFixed(1);
    if (input < 0) {
      result.innerHTML = "Bawal zeroo";
    }
  }
}

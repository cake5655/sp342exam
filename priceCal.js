function priceCalculate() {
  let ticknum = (document.getElementById("ticknum").value).trim();
  let selectObj = document.getElementById("event");
  let eventId = parseFloat(selectObj.options[selectObj.selectedIndex].value);
  let totalPrice = ticknum * eventId;
  
  return totalPrice;
}




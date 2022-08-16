// step 1: addEventListener in deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){
  // step 2: get the deposit amount from deposit input field 
  const depositField = document.getElementById('deposit-field');
  // for input field use '.value' to get inside text of input field.
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  // step 3: get the current diposit total 
  const depositTotalElement = document.getElementById('deposit-total');
  const previousDepositTotalString = depositTotalElement.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString)

  // stpe 4: add numbers to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;

  depositTotalElement.innerText = currentDepositTotal;

  // stpe 5: get balance current total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // stpe 6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotalElement.innerText = currentBalanceTotal;

  // step 7: clear deposit field 
  depositField.value = '';
})
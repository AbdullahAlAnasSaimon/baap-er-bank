// step 1: add event handler with withdraw button
// step 2: get the withdraw amount from the withdraw input filed
// step 2.5: make sure to convert the input into a number by using parseFloat()
// step 3: 

document.getElementById('btn-withdraw').addEventListener('click', function(){
  const withdrawField = document.getElementById('withdraw-field');

  const newWithdrawAmountString = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawAmountString);

  // stpe 7: clear the input field
  withdrawField.value = '';

  if(isNaN(newWithdrawAmount)){
    alert("Please Provide a Valid Number");
    return;
  }

  // step 3:
  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalString = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


  // step 5: get the previous balance total
  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);


  if(newWithdrawAmount > previousBalanceTotal){
    window.alert("Not Enough Money");
    return;
  }

  // step 4: calculate total element 
  const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  // step 6: claculate new balance total
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  // step 6.1: set new balance total
  balanceTotalElement.innerText = newBalanceTotal;

  
})
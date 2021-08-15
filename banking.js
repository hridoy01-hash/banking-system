//deposit handaler event
document.getElementById('deposit-button').addEventListener('click',function(){
    
    //get  deposite total
    const depositInput = document.getElementById('deposite-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
    
    const depositTotal = document.getElementById('deposite-total');
    const previousDepositeAmountText = depositTotal.innerText;
    const previousDepositeAmount = parseFloat(previousDepositeAmountText);
    //total deposite
    const newDepositTotal = previousDepositeAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;

    //update total balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
    
    //clear the deposite input field
    depositInput.value = '';
});

//withdraw event hnadaler

document.getElementById('withdraw-button').addEventListener('click',function(){
   const withdrawInput = document.getElementById('withdraw-input'); 
   const withdrawAmountText = withdrawInput.value;
   const newWithdrawAmount = parseFloat(withdrawAmountText);
   

   //set withdraw total

   const withdrawTotal = document.getElementById('withdraw-total');
   const previousWithdrawText = withdrawTotal.innerText;
   const previousWithdrawTotal = parseFloat(previousWithdrawText);
   const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
   withdrawTotal.innerText = newWithdrawTotal;

   //update balance

   const balanceTotal = document.getElementById('balance-total');
   const previousBalanceText = balanceTotal.innerText;
   const previousBalanceTotal = parseFloat(previousBalanceText);
   const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
   balanceTotal.innerText = newBalanceTotal;
   
   //clear deposit value
   withdrawInput.value = '';


});


document.getElementById('btn-deposit-submit').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositMoneyString = depositInput.value;
    
    const newDepositMoney =parseFloat(newDepositMoneyString);
    // console.log(depositMoney);

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositString = totalDeposit.innerText;
    const previousDeposit =parseFloat(previousDepositString);
    // console.log(deposit);
     const currentDepositTotal =previousDeposit + newDepositMoney;
     
    totalDeposit.innerText = currentDepositTotal;
        
    depositInput.value='';

})
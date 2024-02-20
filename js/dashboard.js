// get data from deposit inputField and pass the amount summation to Total deposit section.
// ..........deposit onclick event listener
// .............................................................................
document.getElementById('btn-deposit-submit').addEventListener('click', function () {

    const depositInput = document.getElementById('deposit-input');
    const newDepositMoneyString = depositInput.value;

    const newDepositMoney = parseFloat(newDepositMoneyString);
    // console.log(depositMoney);

    const totalDeposit = document.getElementById('total-deposit');
    const previousDepositString = totalDeposit.innerText;
    const previousDeposit = parseFloat(previousDepositString);
    // console.log(deposit);
    const currentDepositTotal = previousDeposit + newDepositMoney;

    totalDeposit.innerText = currentDepositTotal;

    depositInput.value = '';

    // pass the deposit amount to available balance section
    const balance = document.getElementById('available-balance');
    const availableBalance = balance.innerText;
    // console.log(availableBalance);
    const availableAmount = parseFloat(availableBalance);
    // console.log(typeof currentDepositTotal);
    const currentAvailableAmount = availableAmount + newDepositMoney;
    // console.log(currentAvailableAmount);
    balance.innerText = currentAvailableAmount;
})

// ..........................................................................................
// ..............withdraw onclick event listener..................................

document.getElementById('btn-Withdraw-submit').addEventListener('click', function () {

    const withdrawInput = document.getElementById('withdraw-input');
    const withdraw = withdrawInput.value;
    const withdrawMoney = parseFloat(withdraw);
    // console.log(withdrawMoney);
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawString = totalWithdraw.innerText;
    const remainingTotalWithdraw = parseFloat(totalWithdrawString);
    // console.log(remainingTotalWithdraw);

    const sumTotalWithdraw = remainingTotalWithdraw + withdrawMoney;
    totalWithdraw.innerText = sumTotalWithdraw;
    // deducting withdraw money from availableBalance.........................................
    const previousCurrentBalance = document.getElementById('available-balance');
    const previousCurrentBalanceString = previousCurrentBalance.innerText;
    const currentBalance = parseFloat(previousCurrentBalanceString);

    const balanceAfterWithdraw = currentBalance - sumTotalWithdraw;
    previousCurrentBalance.innerText = balanceAfterWithdraw;

   
    if(currentBalance<=0){
        alert('you cannot withdraw money!!!!due to Insufficient Balance');
        
    }
 withdrawInput.value='';
})
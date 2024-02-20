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


    if (currentBalance <= 0) {
        alert('you cannot withdraw money!!!!due to Insufficient Balance');

    }
    withdrawInput.value = '';
})
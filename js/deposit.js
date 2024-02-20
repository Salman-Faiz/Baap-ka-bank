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
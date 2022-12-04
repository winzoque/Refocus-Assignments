let userAccount = {
    bankName : 'Bank of RFC',
    accountNumber : 81650461,
    cardNumber: '2222 4053 4324 8877',
    firstName : 'Rowan',
    lastName : 'Atkinson',
    birthDate : 'January 6, 1955',
    address : 'Flat 2, 12 Arbour Road, Highbury, London, England',
    username : 'mrbean',
    password : 'bean1234',
    pin : '1234',
    validIdType: 'Passport',
    validIdNo: 'PA0940443',
    createdAt: new Date().toDateString(),
    balance : 0,
};

//console.log(userAccount.pin);
function bankAccount(myCallback, loginUsername, loginPassword, amount){
    myCallback(loginUsername, loginPassword, amount);
}

function checkAccountdetails(loginUsername, loginPassword){
    if (loginUsername == userAccount.username && loginPassword == userAccount.password) {
        console.log(
            'Account Name: ' + userAccount.lastName + ', ' + userAccount.firstName +
            '\nAccount Number: ' + userAccount.accountNumber +
            '\nCard Number: ' + userAccount.cardNumber +
            '\nAddress: ' + userAccount.address +
            '\nDate: ' + userAccount.createdAt +
            '\nBank Name: ' + userAccount.bankName +
            '\nBalance: ₱' + userAccount.balance
        );
    } else {
        console.log('The login details you’ve entered is incorrect.\nPlease check your login details and try again.');
    }
}

function deposit(loginUsername, loginPassword, depositAmount){
    if (loginUsername == userAccount.username && loginPassword == userAccount.password) {
        userAccount.balance += depositAmount;
        console.log(
            "You have deposited ₱" +
            depositAmount +
            " into your account: " +
            userAccount.accountNumber + 
            "\nYour total balance is now ₱" +
            userAccount.balance +
            "."
        );
    } else {
        console.log('The login details you’ve entered is incorrect.\nPlease check your details and try again.');
    }
}

function withdraw(loginUsername, loginPassword, withdrawAmount){
    if (loginUsername == userAccount.username && loginPassword == userAccount.password && withdrawAmount <= userAccount.balance) {
        userAccount.balance -= withdrawAmount;
        console.log(
            "You have withdrew ₱" +
            withdrawAmount +
            " from your account: " +
            userAccount.accountNumber +
            "\nYour total balance is now ₱" +
            userAccount.balance +
            "."
        );
    } else if(loginUsername == userAccount.username && loginPassword == userAccount.password && withdrawAmount > userAccount.balance){
        console.log('You have insufficient balance to withdraw.\nPlease check your balance and try again.');
    } else if(loginUsername != userAccount.username || loginPassword != userAccount.password && withdrawAmount <= userAccount.balance){
        console.log('The login details you’ve entered is incorrect.\nPlease check your login details and try again.');
    } else {
        console.log('Error! The details you’ve entered is incorrect.\nPlease check your details and try again.');
    }
}

bankAccount(checkAccountdetails, "mrbean", "bean1234");
bankAccount(deposit, "mrbean", "bean1234", 2500);
bankAccount(withdraw, "mrbean", "bean1234", 300);
bankAccount(withdraw, "mrbean", "bean1234", 600);

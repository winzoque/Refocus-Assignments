let balance = 0; // initial balance

function createBankAccount(myCallback, nameTxt, amount) {
  myCallback(nameTxt, amount);
}

//deposit function
function deposit(nameTxt, depositAmount) {
  balance += depositAmount;
  console.log(
    "Hi " +
      nameTxt +
      "! You have deposited ₱" +
      depositAmount +
      " into your account." +
      "\nYour total balance is now ₱" +
      balance +
      "."
  );
}

//withdraw function
function withdraw(nameTxt, withdrawAmount) {
  if (withdrawAmount <= balance) {
    balance -= withdrawAmount;
    console.log(
      "Hi " +
        nameTxt +
        "! You have withdrew ₱" +
        withdrawAmount +
        " from your account." +
        "\nYour total balance is now ₱" +
        balance +
        "."
    );
  } else {
    //error prompt
    console.log(
      "Error! You have insufficient balance to withdraw ₱" +
        withdrawAmount +
        "\nPlease check your balance and try again later."
    );
  }
}

function checkBalance(nameTxt) {
  console.log(
    "Hi " + nameTxt + "!\nYour current balance is: ₱" + balance
  );
}
createBankAccount(checkBalance, "Mr. Bean"); 
createBankAccount(deposit, "Mr. Bean", 1300);
createBankAccount(deposit, "Mr. Bean", 700);
createBankAccount(withdraw, "Mr. Bean", 500);
createBankAccount(withdraw, "Mr. Bean", 200);

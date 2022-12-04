function createBankAccount(nameTxt, iniAmount, depositAmount, withdrawAmount) {
  balance = iniAmount; // initial balance
  console.log(
    "Welcome " +
    nameTxt +
    " to RFC Bank!\nYour current balance is: ₱" +
    balance
  );
  return(nameTxt, depositAmount, withdrawAmount);
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
  } else { //error prompt
    console.log(
      "Error! You have insufficient balance to withdraw ₱"
      + withdrawAmount
      + "\nPlease check your balance and try again later."
      );
  }
}

account = createBankAccount("Mr. Bean", 20);
deposit("Mr. Bean", 1000);
deposit("Mr. Bean", 300);
withdraw("Mr. Bean", 400);
withdraw("Mr. Bean", 200);
withdraw("Mr. Bean", 800);
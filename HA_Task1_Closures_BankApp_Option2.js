let name = "Mr. Bean"; //account Name/Holder
var balance = 0; //initial balance
var depositAmount = 1000; //deposit amount
var withdrawAmount = 200; //withdraw amount

const account = createBankAccount(
    name,
    balance,
    depositAmount,
    withdrawAmount
    );

function createBankAccount(
    name,
    balance,
    depositAmount,
    withdrawAmount
    ){
    console.log(
        "Welcome "
        + name
        + " to RFC Bank!"
        + "\nYour current balance is: ₱"
        + balance
    );
	return{
		deposit: function(){
            balance += depositAmount;
            console.log(
                "Hi "
                + name
                + "! You have deposited ₱"
                + depositAmount
                + " into your account."
                + "\nYour total balance is now ₱"
                + balance
                + "."
            );
            return;
        },
		withdraw: function(){
            if (balance >= withdrawAmount) {
                balance -= withdrawAmount;
                console.log(
                "Hi "
                + name
                + "! You have withdrew ₱"
                + withdrawAmount
                + " from your account."
                + "\nYour balance is now ₱"
                + balance
                + "."
            );
            return;
            } else {
                console.log(
                "Error! You have insufficient balance to withdraw ₱"
                + withdrawAmount
                + "\nPlease check your balance and try again later."
                );
            }
        }
	}
}

account.deposit();
account.withdraw();
account.withdraw();
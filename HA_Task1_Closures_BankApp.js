const account = createBankAccount('Oreo', checkBalance);
//declare name and checkbalance

function createBankAccount(name, checkBalance){
    //initialize
    let balance = 0;
    console.log(
		'Welcome ' + name + ' to RFC Bank!\n Your balance is: ₱' + balance
		);
    
    function depositAmount(amountD){
        //updates the balance by adding the deposit amount
        balance += amountD;
		console.log(
			"You deposited an amount of ₱" + amountD + " to your account."
			);
        console.log(
			" Your balance is now ₱" + balance + "\n Thank you!"
			);
		//Prompt for successful deposit.
	}

	function withdrawAmount(amountW){
		if(balance >= amountW){
			balance -= amountW;
			console.log(
				"You withdrew an amount of ₱" + amountW + " from your account."
			);
			console.log(
				" Your balance is now ₱" + balance + "\n Thank you!"
			);
			//Prompt for successful withdrawal.
		}
		else{
			console.log(
			"Error! You have insufficient balance to withdraw ₱" +
			amountW +
			"\nPlease check your balance and try again later."
			);
			//For error message incase the balance is insufficient.
		}	
	}
    return{
		checkBalance,
		depositAmount,
		withdrawAmount
	}
}
function checkBalance(name, balance){}

account.depositAmount(600); //Deposit Amount
account.withdrawAmount(200); //Withdraw Amount
account.withdrawAmount(200); //Withdraw Amount

//==================================================================
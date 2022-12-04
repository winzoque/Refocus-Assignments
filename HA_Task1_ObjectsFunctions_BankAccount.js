bankAccount = {
    "accountDetail" : [
        {
            bankAccountID: d = new Date().getTime().toString(),
            accountNumber: 1666881650461,
            credentials: ['Mr. Bean', 'beanpw', 'bean1234', '1234'],
            balance: 500,
            createdAt: new Date().toDateString(),
        },
    ],
    "displayAccount" : function(){
        for(account of this.accountDetail)
            console.log(
                'Account ID: ' + account.bankAccountID + '\n' +
                'Account No.: ' + account.accountNumber + '\n' +
                'Credentials: ' + account.credentials + '\n' +
                'Account Balance: ' + account.balance + '\n' +
                'Account Date Created: ' + account.createdAt
            );
        }
    }
bankAccount.displayAccount();



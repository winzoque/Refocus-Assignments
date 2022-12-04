userAccount = {
        "bankDetail" : [
            {
                bankAccountID: d = new Date().getTime().toString(),
                accountNumber: 1666881650461,
                credentials: ['mrbean', 'bean1234', '1234'],
                balance: 500,
                createdAt: new Date().toDateString(),
            },
        ],
        "debitCard" : [
            {
                cardNumber: '2222 4053 4324 8877',
                cardType: 'MasterCard'
            },
        ],
        "firstName" : 'Rowan',
        "lastName" : 'Atkinson',
        "birthDate" : 'January 6, 1955',
        "validID" : [
            {
                vID: 'Passport',
                vNo: 'PA0940443'
            },
        ],
        "address" : 'Flat 2, 12 Arbour Road, Highbury, London, England',

//=====================================
//DISPLAY FUNCTION
        "displayDebitCard" : function(){
            for(card of this.debitCard);
            console.log(
                '\nCard Details:' +
                '\n Card Number: ' + card.cardNumber +
                '\n Card Type: ' + card.cardType
            );
        },
        "displayFirstName" : function(){
            console.log('First Name: ' + this.firstName);
        },
        "displayLastName" : function(){
            console.log('Last Name: ' + this.lastName);
        },
        "displayBirthDate" : function(){
            console.log('Birth Date: ' + this.birthDate);
        },
        "displayValidID" : function(){
            for(ID of this.validID);
            console.log(
                '\nValid ID:' +
                '\n ID Type: ' + ID.vID +
                '\n ID Number: ' + ID.vNo
            );
        },
        "displayAddress" : function(){
            console.log('Address: ' + this.address);
        },

        "displayAccount" : function(){
            for(account of this.bankDetail)
                console.log(
                    'Account ID: ' + account.bankAccountID + '\n' +
                    'Account No.: ' + account.accountNumber + '\n' +
                    'Credentials: ' + account.credentials + '\n' +
                    'Account Balance: ' + account.balance + '\n' +
                    'Account Date Created: ' + account.createdAt
                );
            },
        }

userAccount.displayAccount();
userAccount.displayFirstName();
userAccount.displayLastName();
userAccount.displayBirthDate();
userAccount.displayAddress();
userAccount.displayDebitCard();
userAccount.displayValidID();

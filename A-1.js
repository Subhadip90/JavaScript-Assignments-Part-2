// Problem Statement: Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

// Solution:

let personAccount = {

  firstName: 'Subhadip',

  lastName: 'Chatterjee',

  incomes: [
    { 10000: 'Full Time Job Salary' },
    { 80000: 'Share Market' },
    { 30000: 'Real Estate' },
    { 50000: 'Crypto' },
  ],

  expenses: [
    { 5000: 'Room Rent' },
    { 6000: 'Petrol' },
    { 2000: 'Ration' },
    { 550: 'Maid' },
  ],

  totalIncome: function () {
    let tIncome = 0;
    this.incomes.forEach((e) => {
      for (const k in e) {
        tIncome = tIncome + Number(k);
      }
    });
    console.log('Total Income : ', tIncome);
    return tIncome;
  },

  totalExpense: function () {
    let tExpense = 0;
    this.expenses.forEach((e) => {
      for (const k in e) {
        tExpense = tExpense + Number(k);
      }
    });
    console.log('Total Expenses : ', tExpense);
    return tExpense;
  },

  accountInfo: function () {
    console.log(`A/C Name : ${this.firstName} ${this.lastName}`);

    console.log('\nYour List of Incomes are : ');
    this.incomes.forEach(e => {
      console.log(e);
    });

    console.log('\nYour List of Expenses are : ');
    this.expenses.forEach(e => {
      console.log(e);
    });
  },

  addIncome: function (obj) {
    this.incomes.push(obj);
  },

  addExpense: function (obj) {
    this.expenses.push(obj);
  },

  accountBalance: function () {
    console.log(`Your account balance is : ${this.totalIncome() - this.totalExpense()}`);
  }

}

personAccount.accountInfo();
personAccount.accountBalance();
personAccount.totalIncome();
personAccount.totalExpense();

personAccount.addIncome({ 34000: 'Retail Market' });
personAccount.addExpense({ 9500: 'Travelling Expense' });

personAccount.accountInfo();
personAccount.accountBalance();
personAccount.totalIncome();
personAccount.totalExpense();




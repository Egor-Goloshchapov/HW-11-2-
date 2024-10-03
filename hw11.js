const bankAccount = {
    ownerName: "Іван Іванов",
    accountNumber: "1234567890",
    balance: 1000,

    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Внесено: ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
        } else {
            console.log("Будь ласка, введіть правильну суму для поповнення.");
        }
    },

    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Знято: ${amount} грн. Залишок на рахунку: ${this.balance} грн.`);
        } else if (amount > this.balance) {
            console.log("Недостатньо коштів на рахунку!");
        } else {
            console.log("Будь ласка, введіть правильну суму для зняття.");
        }
    }
};

bankAccount.deposit(500);
bankAccount.withdraw(300);



const weather = {
    temperature: 0,

    isBelowZero() {
        return this.temperature < 0;
    }
};

function checkTemperature(inputTemp) {
    weather.temperature = inputTemp;
    if (weather.isBelowZero()) {
        console.log("Температура нижче 0 градусів Цельсія.");
    } else {
        console.log("Температура вище або рівна 0 градусів Цельсія.");
    }
}

checkTemperature(-5);
checkTemperature(3);  




const user = {
    name: "Олена Петрівна",
    email: "elena@example.com",
    password: "123456",

    login(inputEmail, inputPassword) {
        return inputEmail === this.email && inputPassword === this.password;
    }
};

function loginUser(inputEmail, inputPassword) {
    if (user.login(inputEmail, inputPassword)) {
        console.log("Успішний вхід!");
    } else {
        console.log("Невірний email або пароль.");
    }
}

loginUser("elena@example.com", "123456");
loginUser("wrong@example.com", "123456");  

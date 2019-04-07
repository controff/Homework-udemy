let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "");
    time = prompt("Введите дату в формате YYYY-MM-DD", "");

    while(isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "");
    }
}
start();

let appData = {
        budget: money,
        timeData: time,
        expenses: {},
        optionalExpenses: {},
        income: [],
        savings: true
    };

function chooseExpenses() {
    for(let i = 0; i < 2; i++) {
        let expenses1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
            expenses2 = prompt("Во сколько обойдется?", "");
        if ((typeof(expenses1)) === 'string' && (typeof(expenses1)) != null && (typeof(expenses2)) != null && expenses1 != '' && expenses2 != '' && expenses1.length < 50) {
            console.log('получилось');
            appData.expenses[expenses1] = expenses2;
        } else {
            i -= 1;
        }
    }
}
chooseExpenses();

/*
let i = 0;

1-ЫЙ ВИД:
while(i < 2) {
    i++;
    let expenses1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        expenses2 = prompt("Во сколько обойдется?", "");
    if ((typeof(expenses1)) === 'string' && (typeof(expenses1)) != null && (typeof(expenses2)) != null && expenses1 != '' && expenses2 != '' && expenses1.length < 50) {
        console.log('получилось');
        appData.expenses[expenses1] = expenses2;
    } else {
        expenses1 = prompt("Введите обязательную статью расходов в этом месяце", "");
        expenses2 = prompt("Во сколько обойдется?", "");
    }
}

2-ОЙ ВИД:
do {
    i++;
    let expenses1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
        expenses2 = prompt("Во сколько обойдется?", "");
    if ((typeof(expenses1)) === 'string' && (typeof(expenses1)) != null && (typeof(expenses2)) != null && expenses1 != '' && expenses2 != '' && expenses1.length < 50) {
        console.log('получилось');
        appData.expenses[expenses1] = expenses2;
    } else {
        expenses1 = prompt("Введите обязательную статью расходов в этом месяце", "");
        expenses2 = prompt("Во сколько обойдется?", "");
    }
} while (i < 2);
*/

appData.moneyPerDay = (appData.budget / 30).toFixed();

alert('Ежедневный бюджет: '+appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log('Мин. уровень достатка');
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log('Сред. уровень достатка');
} else if (appData.moneyPerDay < 2000) {
    console.log('Высокий уровень достатка');
} else {
    console.log('Произошла ошибка');
}

function checkSavings() {
    if(appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент");

        appData.monthIncome = save / 100 / 12 * percent;
        alert('Доход в месяц с вашего депозита: '+ appData.monthIncome);
    }
}

checkSavings();

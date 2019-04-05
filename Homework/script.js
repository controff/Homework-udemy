var money = prompt("Ваш бюджет на месяц?"),
    money = parseInt(money, 10),
    time = prompt("Введите дату в формате YYYY-MM-DD"),
    expenses1 = prompt("Введите обязательную статью расходов в этом месяце"),
    expenses2 = prompt("Во сколько обойдется?"),
    expenses2 = parseInt(expenses2, 10);
var appData = {
        budget: money,
        timeData: time,
        expenses: {
            expenses1: expenses2
        },
        optionalExpenses: null,
        income: [],
        savings: false
    };

var result = money - appData.expenses.expenses1;
alert(result / 30);

let inpExp, value, btn1, btn2, optExp, otherInputs;
document.getElementById("start").onclick = function() {
    value = document.getElementsByClassName("budget-value, daybudget-value, level-value, expenses-value, optionalexpenses-value, income-value, monthsavings-value, yearsavings-value");
    inpExp = document.getElementsByClassName("expenses-item");
    btn1 = document.getElementsByTagName('button')[0,1];
    btn2 = document.getElementsByTagName('button')[2];
    optExp = document.querySelectorAll(".optionalexpenses-item");
    otherInputs = document.querySelector(".choose-income, .savings, .choose-sum, .choose-percent, .year-value, .month-value, .day-value");
};

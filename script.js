const IncomeButton = document.getElementById('incomeButton');
const ExpenseButton = document.getElementById('expenseButton');
const submit = document.getElementById('submit');

const InputItemName = document.getElementById('itemName');
const InputValue = document.getElementById('amount');

const BalanceCash = document.getElementById('balanceCash');
const TotalIncome = document.getElementById('totalIncome');
const TotalExpense = document.getElementById('totalExpense');

const IncomeItemWrapper = document.getElementById('IncomeItemWrapper');
const ExpenseItemWrapper = document.getElementById('ExpenseItemWrapper');

// const IncomeValue = document.querySelectorAll('.incomeValue')
const IncomeValue = document.getElementsByClassName('incomeValue')

Array.from(IncomeValue).map(el => {
    console.log(el.innerText);
})


// Create ItemName and ItemValue Div
const CreateItemDivs = () => {
    const Item = document.createElement('div')
    Item.classList.add('item')
    const ItemName = document.createElement('div')
    ItemName.classList.add('item-description');

    const ItemValue = document.createElement('div');
    ItemValue.classList.add('item-value')
    ItemValue.innerText = `${InputValue.value}`

    ItemName.innerText = `${InputItemName.value}`
    Item.appendChild(ItemName)
    Item.appendChild(ItemValue)

    //Calls the Income and expense fn & pass Item Div as parameter
    EnterIncome(Item)
}

// Handler for AddIncome and AddExpense
let Operation = 'add';
// Checks which button is clicked and set the value to Operation Variable
const ToggleOperation = (event) => {
    Operation = event.target.value
}

const EnterIncome = (Item) => {
    if (Operation === 'add') {
        IncomeItemWrapper.appendChild(Item)
    } else {
        ExpenseItemWrapper.appendChild(Item);
    }
}

submit.addEventListener('click', CreateItemDivs);
IncomeButton.addEventListener('click', ToggleOperation);
ExpenseButton.addEventListener('click', ToggleOperation);




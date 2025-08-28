//console.log('homepage connected')

// add money function engine
const validPin = 112233
const transactionData = []

// shared function calling method
// function to get input value number
function getInputValueNumber(id) {
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber;
}

// function to get inner text
function getInnerText(id) {
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber;
}

// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName('from')

    for (const from of forms) {
        from.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

// ---------------- Add Money ----------------
document.getElementById('add-money-btn')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const bank = document.getElementById('bank').value
        const accountNumber = document.getElementById('account-number').value
        const amount = getInputValueNumber('amount-add')
        const pinNumber = getInputValueNumber('pin-code-add')
        const balance = getInnerText('available-balance')

        if (accountNumber.length < 11) {
            alert('Please provide valid account number');
            return;
        }
        if (isNaN(amount) || amount <= 0) {
            alert('Enter a valid amount');
            return;
        }
        if (validPin !== pinNumber) {
            alert('Invalid pin number!')
            return;
        }

        const totalNewBalance = amount + balance
        document.getElementById('available-balance').innerText = totalNewBalance

        const data = {
           name: "Add Money",
           date : new Date().toLocaleTimeString()
        }
        transactionData.push(data)

              console.log(transactionData)

    })

// ---------------- Cash Out ----------------
const Pin = 112233
document.getElementById('withdraw-button')
    .addEventListener('click', function (e) {
        e.preventDefault()

        const amount = parseInt(document.getElementById('withdraw-amount').value)
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        const agentNumber = document.getElementById('agent-number').value

        if (agentNumber.length < 11) {
            alert('Please provide valid 11 digit number');
            return;
        }
        if (isNaN(amount) || amount <= 0) {
            alert('Enter a valid amount to withdraw');
            return;
        }

        const pinNumber = parseInt(document.getElementById('pin-code-withdraw').value)
        if (Pin !== pinNumber) {
            alert('Invalid pin number!')
            return;
        }

        if (amount > availableBalance) {
            alert('Insufficient balance!')
            return;
        }

        const totalNewAvailableBalance = availableBalance - amount
        document.getElementById('available-balance').innerText = totalNewAvailableBalance

const data = {
           name: "Cash Out",
           date : new Date().toLocaleTimeString()
        }
        transactionData.push(data)

       console.log(transactionData)

    })

// ---------------- Toggling Features ----------------

// add money toggle
document.getElementById('add-button')
    .addEventListener('click', function () {
        handleToggle('add-money-parent')

        const formBtns = document.getElementsByClassName('form-btn')
        for (const btn of formBtns) {
            btn.classList.remove('border-purple-600', 'bg-purple-300')
            btn.classList.add('border-gray-300')
        }
        document.getElementById('add-button').classList.add('border-purple-600', 'bg-purple-300')
        document.getElementById('add-button').classList.remove('border-gray-300')
    })

// cash out toggle
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        handleToggle('cash-out-parent')

        const formBtns = document.getElementsByClassName('form-btn')
        for (const btn of formBtns) {
            btn.classList.remove('border-purple-600', 'bg-purple-300')
            btn.classList.add('border-gray-300')
        }
        document.getElementById('cash-out-button').classList.add('border-purple-600', 'bg-purple-300')
        document.getElementById('cash-out-button').classList.remove('border-gray-300')
    })

// transfer money toggle
document.getElementById('transfer-button')
    .addEventListener('click', function () {
        handleToggle('transfer-money-parent')

        const formBtns = document.getElementsByClassName('form-btn')
        for (const btn of formBtns) {
            btn.classList.remove('border-purple-600', 'bg-purple-300')
            btn.classList.add('border-gray-300')
        }
        document.getElementById('transfer-button').classList.add('border-purple-600', 'bg-purple-300')
        document.getElementById('transfer-button').classList.remove('border-gray-300')
    })

// get bonus toggle
document.getElementById('getBonus-button')
    .addEventListener('click', function () {
        handleToggle('get-bonus-parent')

        const formBtns = document.getElementsByClassName('form-btn')
        for (const btn of formBtns) {
            btn.classList.remove('border-purple-600', 'bg-purple-300')
            btn.classList.add('border-gray-300')
        }
        document.getElementById('getBonus-button').classList.add('border-purple-600', 'bg-purple-300')
        document.getElementById('getBonus-button').classList.remove('border-gray-300')
    })

// pay bill toggle
document.getElementById('payBill-button')
    .addEventListener('click', function () {
        handleToggle('pay-bill-parent')

        const formBtns = document.getElementsByClassName('form-btn')
        for (const btn of formBtns) {
            btn.classList.remove('border-purple-600', 'bg-purple-300')
            btn.classList.add('border-gray-300')
        }
        document.getElementById('payBill-button').classList.add('border-purple-600', 'bg-purple-300')
        document.getElementById('payBill-button').classList.remove('border-gray-300')
    })

// transaction toggle
document.getElementById('transaction-button')
    .addEventListener('click', function () {
        handleToggle('transaction-parent')

        const formBtns = document.getElementsByClassName('form-btn')
        for (const btn of formBtns) {
            btn.classList.remove('border-purple-600', 'bg-purple-300')
            btn.classList.add('border-gray-300')
        }
        document.getElementById('transaction-button').classList.add('border-purple-600', 'bg-purple-300')
        document.getElementById('transaction-button').classList.remove('border-gray-300')
    })

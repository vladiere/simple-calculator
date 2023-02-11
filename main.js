const calculator = {
    add: function (n1, n2, callback) {
        const answer = n1 + n2;
        callback(answer)
    },
    multiply: function (n1, n2, callback) {
        const answer = n1 * n2;
        callback(answer)
    },
    divide: function (n1, n2, callback) {
        const answer = n1 / n2;
        callback(answer)
    },
    subtract: function (n1, n2, callback) {
        const answer = n1 - n2;
        callback(answer)
    }
}

const calcuBtn = document.querySelector('#calculate'), fnum = document.querySelector('#firstnum'), snum = document.querySelector('#secnum'), result = document.querySelector('#result'), operation = document.querySelector('#options'), clear = document.querySelector('#clear')

function output(output) {
    const newElement = document.createElement('h3')
    const newContent = document.createTextNode(`${output}`)
    newElement.appendChild(newContent)
    
    result.appendChild(newElement)
}

calcuBtn.addEventListener('click', function () {
    if (operation.value === 'add') {
        calculator.add(parseFloat(fnum.value), parseFloat(snum.value), output)
    }
    if (operation.value === 'multiply') {
        calculator.multiply(parseFloat(fnum.value), parseFloat(snum.value), output)
    }
    if (operation.value === 'subtract') {
        calculator.subtract(parseFloat(fnum.value), parseFloat(snum.value), output)
    }
    if (operation.value === 'divide') {
        calculator.divide(parseFloat(fnum.value), parseFloat(snum.value), output)
    }

    fnum.value = ''
    snum.value = ''
    operation.value = '0'
})

clear.addEventListener('click', function () {
    result.innerHTML = ""
})


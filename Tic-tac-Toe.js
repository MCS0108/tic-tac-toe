kreis = false
kreuz = true
div1 = document.querySelector('.div1')
div2 = document.querySelector('.div2')
div3 = document.querySelector('.div3')
div4 = document.querySelector('.div4')
div5 = document.querySelector('.div5')
div6 = document.querySelector('.div6')
div7 = document.querySelector('.div7')
div8 = document.querySelector('.div8')
div9 = document.querySelector('.div9')

document.querySelectorAll('.cell').forEach(cell => {

    cell.addEventListener('click', () => {
        if (cell.innerHTML === '') {
            if (kreuz === true) {
                kreuzFunktion(cell)
            }else {
                kreisFunction(cell)
            }
        }
    })
});


function kreuzFunktion(cell) {
    Quadrat = cell.dataset.quadrat
    cell.innerHTML = 'X'
    kreuz = false
    document.querySelector('.text').innerHTML = ''

    if (div1.innerHTML === 'X' && div2.innerHTML === 'X' && div3.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        console.log('jaa')
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div4.innerHTML === 'X' && div5.innerHTML === 'X' && div6.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div7.innerHTML === 'X' && div8.innerHTML === 'X' && div9.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div1.innerHTML === 'X' && div4.innerHTML === 'X' && div7.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div2.innerHTML === 'X' && div5.innerHTML === 'X' && div8.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div3.innerHTML === 'X' && div6.innerHTML === 'X' && div9.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div3.innerHTML === 'X' && div5.innerHTML === 'X' && div7.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div1.innerHTML === 'X' && div5.innerHTML === 'X' && div9.innerHTML === 'X') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'X won'
    }
    if (div1.innerHTML != '' && div2.innerHTML != '' && div3.innerHTML != '' && div4.innerHTML != '' && div5.innerHTML != '' && div6.innerHTML != '' && div7.innerHTML != '' && div8.innerHTML != '' && div9.innerHTML != '') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
    }
}

function kreisFunction(cell) {
    Quadrat = cell.dataset.quadrat
    cell.innerHTML = 'O'
    kreuz = true
    document.querySelector('.text').innerHTML = ''

    if (div1.innerHTML === 'O' && div2.innerHTML === 'O' && div3.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div4.innerHTML === 'O' && div5.innerHTML === 'O' && div6.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div7.innerHTML === 'O' && div8.innerHTML === 'O' && div9.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div1.innerHTML === 'O' && div4.innerHTML === 'O' && div7.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div2.innerHTML === 'O' && div5.innerHTML === 'O' && div8.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div3.innerHTML === 'O' && div6.innerHTML === 'O' && div9.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div3.innerHTML === 'O' && div5.innerHTML === 'O' && div7.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }
    if (div1.innerHTML === 'O' && div5.innerHTML === 'O' && div9.innerHTML === 'O') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
        document.querySelector('.text').innerHTML = 'O won'
    }

    if (div1.innerHTML != '' && div2.innerHTML != '' && div3.innerHTML != '' && div4.innerHTML != '' && div5.innerHTML != '' && div6.innerHTML != '' && div7.innerHTML != '' && div8.innerHTML != '' && div9.innerHTML != '') {
        div1.innerHTML = ''
        div2.innerHTML= ''
        div3.innerHTML= ''
        div4.innerHTML = ''
        div5.innerHTML = ''
        div6.innerHTML = ''
        div7.innerHTML = ''
        div8.innerHTML = ''
        div9.innerHTML = ''
    }
}
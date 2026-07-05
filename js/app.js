let inp = document.querySelectorAll('.card-input-wrapper > input')
let show = document.querySelector('#show')
let cvv = document.querySelector('#cvv2')
let month = document.querySelector('#month')
let year = document.querySelector('#year')
let pin = document.querySelector('#pin')
let cvv2 = document.querySelector('#cvv-display')
let eng = document.querySelector('#eng')
let engz = document.querySelector('#engz')
let pooya = document.querySelector('.otp-btn')

inp.forEach((val, i) => {

    val.addEventListener('input', () => {

        if (val.value.length >= 4) {

            if (i < 3) {
                val.nextElementSibling.focus()
            } else {
                cvv.focus()
            }
        }

        let txt = ''

        for (let k = 0; k <= i; k++) {

            if (k < 3) {

                if (inp[k].value.length == 4) {
                    txt += inp[k].value + '-'
                } else {
                    txt += inp[k].value
                }

            } else {
                txt += inp[k].value
            }

        }

        show.innerText = txt

    })

})

cvv.addEventListener('input', () => {
    if (cvv.value.length >= 3) {
        month.focus()
    }
    cvv2.innerText = cvv.value

})

month.addEventListener('input', () => {

    if (month.value.length == 2) {

        if (month.value < 1 || month.value > 12) {
            month.classList.add('error')
            alert('ماه باید بین 01 تا 12 باشد')
            month.value = ''
            return
        }

        month.classList.remove('error')

        year.focus()
    }

    eng.innerText = month.value

})

year.addEventListener('input', () => {

    if (year.value.length == 2) {

        if (year.value < 0) {
            year.classList.add('error')
            alert('تاریخ انقضا معتبر نیست')
            year.value = ''
            return
        }
        year.classList.remove('error')

        pin.focus()
    }

    engz.innerText = year.value + ' / '

})

let myinputs = document.querySelectorAll('input[type="tel"]')
myinputs.forEach(input => {
    input.addEventListener('input', () => {
        input.value = input.value.replace(/\D/g, '');
    });
});


pooya.addEventListener('click', () => {
    let time = 120
    pooya.disabled = true
    let timer = setInterval(() => {

        let minute = Math.floor(time / 60)
        let second = time % 60

        if (second < 10) {
            second = '0' + second
        }
        pooya.innerText = minute + ':' + second

        time--

        if (time < 0) {
            clearInterval(timer)
            pooya.innerText = 'دریافت رمز'
            pooya.disabled = false
        }

    }, 1000)

})

let urinps = document.querySelectorAll('input')
let pay = document.querySelector('.pay-btn')

pay.addEventListener('click', () => {

    let flag = 1; // فرض می‌کنیم همه پر هستن
    // هربار ریست میشه 

    urinps.forEach((item) => {
        if (item.value === '') {
            flag = 0; // یعنی یه فیلد خالی پیدا شد
        }
    });

    if (flag === 0) {
        alert('لطفا همه فیلدها را پر کنید');
    } else {
        alert('✅ پرداخت با موفقیت انجام شد');
    }

});


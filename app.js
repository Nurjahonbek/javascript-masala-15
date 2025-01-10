
const form = document.getElementById('content')
const btn = document.getElementById('btn')

form.addEventListener('input', function(){
    let isvalid = true

    const ism = document.getElementById('name').value
    if(!/^[A-Za-z]{2,}$/.test(ism)){
        isvalid = false
        xato('nameerror')
    }
    else{
        hide('nameerror')
    }

    const familya = document.getElementById('surname').value
    if(!/^[A-Za-z]{2,}$/.test(familya)){
        isvalid = false
        xato('surnameerror')
    }
    else{
        hide('surnameerror')
    }

    const date = new Date(document.getElementById('date').value)
    const sana = new Date()
    const age = sana.getFullYear() - date.getFullYear()
    if(age < 18 || isNaN(age)){
        isvalid = false
        xato('dateerror')
    }
    else{
        hide('dateerror')
    }

    const phone = document.getElementById('phone').value
    if(!/^\+?[0-9]{9,15}$/.test(phone)){
        isvalid = false
        xato('phoneerror')
    }
    else{
        hide('phoneerror')
    }

    const password = document.getElementById('password').value
    if(!/(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{8,}/.test(password)){
        isvalid = false
        xato('passworderror')
    }
    else{
        hide('passworderror')
    }

    const confirmpassword = document.getElementById('confirmpassword').value
    if(confirmpassword != password){
        isvalid = false
        xato('confirmpassworderror')
    }
    else{
        hide('confirmpassworderror')
    }

    const manzil = document.getElementById('manzil').value
    if (manzil.length < 10) {
        isvalid = false
        xato('manzilerror')
    } else {
        hide('manzilerror')
    }

    const gender = document.getElementById('gender').value
    if (gender == '') {
        isvalid = false
        xato('gendererror')
    } else {
        hide('gendererror')
    }

    const check = document.getElementById('check')
    if (!check.checked) {
        isvalid = false
        xato('checkerror')
    } else {
        hide('checkerror')
    }

    btn.disabled = !isvalid
})
function xato(id){
    document.getElementById(id).style.display = 'block'
}
function hide(id){
    document.getElementById(id).style.display = 'none'
}






// 1)Vazifa: Formada bir matnli input va bir tugma bo‘lsin. Foydalanuvchi inputga o‘z ismini yozib, tugmani bossa, ismi sahifada alohida div element ichida ko‘rsatiladi.

const name1 = document.querySelector('.name1')
const btn1 = document.getElementById('btn1')
const res1 = document.querySelector('.res1')
btn1.addEventListener('click', function(){
    const ism = name1.value
    if(ism){
        const newdiv = document.createElement('div')
        newdiv.classList.add('box1')
        newdiv.textContent = `ismingiz:  ${ism}`
        res1.innerHTML = ''
        res1.append(newdiv)
    }
})

// 2)Vazifa: Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi.

const save2 = document.getElementById('save2')
const edit2 = document.getElementById('edit2')
const text2 = document.querySelector('.text2')

edit2.addEventListener('click', function(){
    text2.setAttribute('contenteditable', true)
    text2.focus()
    edit2.style.display = 'none'
    save2.style.display = 'block'
})
save2.addEventListener('click', function(){
    text2.removeAttribute('contenteditable')
    edit2.style.display = 'block'
    save2.style.display = 'none'
})

// 3)Vazifa: Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin.

const btn3 = document.getElementById('btn3')
const password3 = document.getElementById('password3')
const passwordres3 = document.getElementById('password-res3')

btn3.addEventListener('click', function(){
    const parol = password3.value
    const paroltekshir = passwordres3.value
    if(parol && paroltekshir){
        if(parol == paroltekshir){
            alert('parol  mos')
        }
        else{
            alert('parol mos emas')
        }
    }
})

// 4)Vazifa: Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.

const btn4 = document.getElementById('btn4')
const color4 = document.getElementById('color4')
const rang4 = document.querySelector('.rang4')

btn.addEventListener('click', function(){  
    const ranglar = color4.value
    const x = document.createElement('div')
    x.classList.add('box4')
    x.style.backgroundColor = ranglar
    rang4.append(x)
})

// 5)Vazifa: Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi.

const btn5 = document.getElementById('btn5')
const text5 = document.getElementById('text5')
const list5 = document.querySelector('.list5')

btn5.addEventListener('click', function(){
    const city = text5.value
    if(city){
        const li = document.createElement('li')
        li.textContent = city
        list5.append(li)
        text5.value = ''
    }
})

// 6)Vazifa: Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi.

const text6 = document.getElementById('text6')
const btn6 = document.getElementById('btn6')
const sms6 = document.querySelector('.message6')

btn6.addEventListener('click', function(){
    const yangi = text6.value
    if(yangi){
        const res6 = document.createElement('div')
        res6.classList.add('box2')
        res6.textContent = yangi
        sms6.append(res6)
        text6.value = ''
    }
})

// 7)Vazifa: Formada yosh kiritish uchun input bo‘lsin. "Tekshirish" tugmasi bosilganda, foydalanuvchining yoshi 18 yoki undan yuqori bo‘lsa, sahifada "Kirishga ruxsat berildi", aks holda "Kirishga ruxsat berilmaydi" degan matn paydo bo‘lsin.

const btn7 = document.getElementById('btn7')
const number7 = document.getElementById('number7')
const sms7 = document.querySelector('.message7')

btn7.addEventListener('click', function(){
    const age = number7.value
    if(age >= 18){
        alert('kirishga ruxsat')
    }
    else{
        alert('kirisha ruxsat berilmadi')
    }
})

// 8)Vazifa: Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi.

const btn8 = document.getElementById('btn8')
const text8 = document.getElementById('text8')

btn8.addEventListener('click', function(){
    const color = text8.value.toLowerCase()
    if(color == 'red' || color == 'green' || color == 'blue'){
        document.body.style.backgroundColor = color
    }
})

// 9)Vazifa: Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi.

const btn9 = document.getElementById('btn9')
const ism9 = document.getElementById('ism9')
const familya9 = document.getElementById('familya9')
const list9 = document.querySelector('.list9')

btn9.addEventListener('click', function(){
    const name = ism9.value
    const surname = familya9.value
    if(name && surname){
        const li = document.createElement('li')
        li.textContent = ` ${surname} ${name}`
        list9.append(li)
        ism9.value = ''
        familya9.value = ''
    }
})

// 10)Vazifa: Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.

const textn = document.getElementById('textn')
const countn = document.getElementById('countn')

textn.addEventListener('input', function(){
    if(this.value){
        countn.innerHTML = this.value.length
        if(this.value.length >= 100){
            this.value = this.value.substr(0, 99)
        }
    }
    else{
        countn.innerHTML = 0
    }
})

// 12)Vazifa: Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.

const textd = document.getElementById('textd')
const btnd =  document.getElementById('btnd')

textd.addEventListener('input', function(){
    if(textd.value.trim() != ''){
        btnd.disabled = false
    }
    else{
        btnd.disabled = true
    }
})

// 13)Vazifa: Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.

const isma = document.getElementById('namea')
const familyaa = document.getElementById('surnamea')
const btna = document.getElementById('btna')
const emaila = document.querySelector('#emaila')

btna.addEventListener('click', function(){
    isma.value = ''
    familyaa.value = ''
    emaila.value = ''
})

// 14)Vazifa: Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.

const text14 = document.getElementById('text14')
const list14 = document.querySelectorAll('.list14 li')

text14.addEventListener('input', function(){
    const ism = text14.value.toLowerCase()
    list14.forEach(x =>{
        const name = x.textContent.toLowerCase()
        if(name.includes(ism)){
            x.style.display = 'block'
        }
        else{
            x.style.display = 'none'
        }
    })
})


// 15)Vazifa: Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.

const save15 = document.getElementById('save15')
const edit15 = document.getElementById('edit15')
const text15 = document.querySelector('.text15')

edit15.addEventListener('click', function(){
    text15.setAttribute('contenteditable', true)
    text15.focus()
    edit15.style.display = 'none'
    save15.style.display = 'block'
})
save15.addEventListener('click', function(){
    text15.removeAttribute('contenteditable')
    edit15.style.display = 'block'
    save15.style.display = 'none'
})


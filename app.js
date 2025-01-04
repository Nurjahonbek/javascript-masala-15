
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

// const name = document.querySelector('.name')
// const btn = document.getElementById('btn')
// const res = document.querySelector('.res')
// btn.addEventListener('click', function(){
//     const ism = name.value
//     if(ism){
//         const newdiv = document.createElement('div')
//         newdiv.classList.add('box')
//         newdiv.textContent = `ismingiz:  ${ism}`
//         res.innerHTML = ''
//         res.append(newdiv)
//     }
// })

// 2)Vazifa: Sahifada ism va familiya yozilgan matnli div bo‘lsin. Yonida "Tahrirlash" tugmasi bo‘lsin. Tugma bosilganda, matn inputga o‘zgaradi va foydalanuvchi yangi qiymat kiritishi mumkin. "Saqlash" tugmasi bosilgandan so‘ng, matn inputdan o‘qilib, yana div ko‘rinishida aks etadi.

// const save = document.getElementById('save')
// const edit = document.getElementById('edit')
// const text = document.querySelector('.text')

// edit.addEventListener('click', function(){
//     text.setAttribute('contenteditable', true)
//     text.focus()
//     edit.style.display = 'none'
//     save.style.display = 'block'
// })
// save.addEventListener('click', function(){
//     text.removeAttribute('contenteditable')
//     edit.style.display = 'block'
//     save.style.display = 'none'
// })

// 3)Vazifa: Formada ikki ta parol kiritish maydoni (input) bo‘lsin: "Parol" va "Parolni tasdiqlash". Tugma bosilganda, agar ikkala parol bir-biriga teng bo‘lsa, foydalanuvchiga "Parol mos" degan xabar chiqsin, teng bo‘lmasa, "Parol mos emas" xabari chiqsin.

// const btn = document.getElementById('btn')
// const password = document.getElementById('password')
// const passwordres = document.getElementById('password-res')

// btn.addEventListener('click', function(){
//     const parol = password.value
//     const paroltekshir = passwordres.value
//     if(parol && paroltekshir){
//         if(parol == paroltekshir){
//             alert('parol  mos')
//         }
//         else{
//             alert('parol mos emas')
//         }
//     }
// })

// 4)Vazifa: Formada rang kiritish maydoni (color input) bo‘lsin. Foydalanuvchi rangni tanlagandan so‘ng, sahifada yangi div yaratiladi va tanlangan rang bilan bo‘yaladi.

// const btn = document.getElementById('btn')
// const color = document.getElementById('color')
// const rang = document.querySelector('.rang')

// btn.addEventListener('click', function(){  
//     const ranglar = color.value
//     const x = document.createElement('div')
//     x.classList.add('box1')
//     x.style.backgroundColor = ranglar
//     rang.append(x)
// })

// 5)Vazifa: Sahifada bir matnli input va "Qo‘shish" tugmasi bo‘lsin. Foydalanuvchi inputga biror shahar nomini yozib, tugmani bossa, shahar nomi ro‘yxatga (ul ichida li) qo‘shiladi.

// const btn = document.getElementById('btn')
// const text = document.getElementById('text')
// const list = document.querySelector('.list')

// btn.addEventListener('click', function(){
//     const city = text.value
//     if(city){
//         const li = document.createElement('li')
//         li.textContent = city
//         list.append(li)
//         text.value = ''
//     }
// })

// 6)Vazifa: Formada matnli input va "Xabar yuborish" tugmasi bo‘lsin. Tugma bosilgandan so‘ng, inputdagi matn sahifada yangi blokda ko‘rsatiladi va input maydoni tozalanadi.

// const text = document.getElementById('text')
// const btn = document.getElementById('btn')
// const sms = document.querySelector('.message')

// btn.addEventListener('click', function(){
//     const yangi = text.value
//     if(yangi){
//         const res = document.createElement('div')
//         res.classList.add('box2')
//         res.textContent = yangi
//         sms.append(res)
//         text.value = ''
//     }
// })

// 7)Vazifa: Formada yosh kiritish uchun input bo‘lsin. "Tekshirish" tugmasi bosilganda, foydalanuvchining yoshi 18 yoki undan yuqori bo‘lsa, sahifada "Kirishga ruxsat berildi", aks holda "Kirishga ruxsat berilmaydi" degan matn paydo bo‘lsin.

// const btn = document.getElementById('btn')
// const number = document.getElementById('number')
// const sms = document.querySelector('.message')

// btn.addEventListener('click', function(){
//     const age = number.value
//     if(age >= 18){
//         sms.textContent = 'kirishga ruxsat '
//     }
//     else{
//         sms.textContent = 'kirishga ruxsat berilmadi'
//     }
// })

// 8)Vazifa: Formada matnli input bo‘lsin. Foydalanuvchi inputga "red", "green", yoki "blue" kabi rang nomini yozsa, sahifaning fon rangi o‘zgaradi.

// const btn = document.getElementById('btn')
// const text = document.getElementById('text')

// btn.addEventListener('click', function(){
//     const color = text.value.toLowerCase()
//     if(color == 'red' || color == 'green' || color == 'blue'){
//         document.body.style.backgroundColor = color
//     }
// })

// 9)Vazifa: Formada ism va familiya kiritish uchun ikkita input bo‘lsin. "Qo‘shish" tugmasi bosilganda, kiritilgan ism va familiya ro‘yxatga qo‘shiladi.

// const btn = document.getElementById('btn')
// const ism = document.getElementById('ism')
// const familya = document.getElementById('familya')
// const list = document.querySelector('.list')

// btn.addEventListener('click', function(){
//     const name = ism.value
//     const surname = familya.value
//     if(name && surname){
//         const li = document.createElement('li')
//         li.textContent = ` ${surname} ${name}`
//         list.append(li)
//         ism.value = ''
//         familya.value = ''
//     }
// })

// 10)Vazifa: Formada bir matnli input bo‘lsin. Foydalanuvchi inputga biror so‘z kiritganda, uning uzunligi (harflar soni) sahifada ko‘rsatiladi.

// const text = document.getElementById('text')
// const count = document.getElementById('count')

// text.addEventListener('input', function(){
//     if(this.value){
//         count.innerHTML = this.value.length
//         if(this.value.length >= 100){
//             this.value = this.value.substr(0, 99)
//         }
//     }
//     else{
//         count.innerHTML = 0
//     }
// })

// 12)Vazifa: Formada bir input va "Tasdiqlash" tugmasi bo‘lsin. Dastlab tugma faol bo‘lmasin (disabled). Inputga biror matn kiritilganda, tugma faollashsin.

// const text = document.getElementById('text')
// const btn =  document.getElementById('btn')

// text.addEventListener('input', function(){
//     if(text.value.trim() != ''){
//         btn.disabled = false
//     }
//     else{
//         btn.disabled = true
//     }
// })

// 13)Vazifa: Formada bir nechta input bo‘lsin (ism, familiya, email). "Tozalash" tugmasi bosilganda, barcha inputlar bo‘shatiladi.

// const ism = document.getElementById('name')
// const familya = document.getElementById('surname')
// const btn = document.getElementById('btn')
// const email = document.querySelector('#email')

// btn.addEventListener('click', function(){
//     ism.value = ''
//     familya.value = ''
//     email.value = ''
// })

// 14)Vazifa: Foydalanuvchi ro‘yxati (ul) va qidiruv inputi bo‘lsin. Foydalanuvchi qidiruv maydoniga biror ism yozganda, faqat shu ismga mos keladigan foydalanuvchi ko‘rsatiladi, qolganlari yashiriladi.

// const text = document.getElementById('text')
// const list = document.querySelectorAll('.list li')

// text.addEventListener('input', function(){
//     const ism = text.value.toLowerCase()
//     list.forEach(x =>{
//         const name = x.textContent.toLowerCase()
//         if(name.includes(ism)){
//             x.style.display = 'block'
//         }
//         else{
//             x.style.display = 'none'
//         }
//     })
// })


// 15)Vazifa: Sahifada matn ko‘rinishida bir div bo‘lsin. "Tahrirlash" tugmasi bosilganda, matn inputga aylansin va foydalanuvchi matnni tahrir qilishi mumkin. "Saqlash" tugmasi bosilganda, inputdagi matn yana div ko‘rinishida aks etsin.

// const save = document.getElementById('save')
// const edit = document.getElementById('edit')
// const text = document.querySelector('.text')

// edit.addEventListener('click', function(){
//     text.setAttribute('contenteditable', true)
//     text.focus()
//     edit.style.display = 'none'
//     save.style.display = 'block'
// })
// save.addEventListener('click', function(){
//     text.removeAttribute('contenteditable')
//     edit.style.display = 'block'
//     save.style.display = 'none'
// })


'use strict';
/**
 * Бонусное задание выходного дня
 */

//получим кнопки элементы
const registerBtn = document.getElementById('register-user');
const loginBtn = document.getElementById('login');

// console.log('registerUserBtn: ', registerBtn);
// console.log(' loginBtn: ',  loginBtn);

//массив данных приложения
let user = [];

/** TODO чтение данных пользователя из localStorage  */
const KEY = 'key';
//проверка test
user = [ {
    firstname: 'Имя',
    secondname: 'Фамилия',
    login: 'nawe2020',
    password: '12345678',
    regDate: 'Date time'
} ];
console.log('user: ', user);

//test очистка
//localStorage.clear();

//test localStorage запись
localStorage.setItem(KEY, JSON.stringify(user));

//test чтение
console.log("Данные в хранилище: ", JSON.parse(localStorage.getItem(KEY)) );



//слушатель на кнопку регистрации
registerBtn.addEventListener('click', (event) => {

    let answer = prompt('Введите через пробел Имя Фамилию пользователя');
    console.log('answer: `' + answer + '`');

    //убираем лишние пробелы
    answer = answer.trim().replaceAll(/\s+/g, ' ');
    console.log('answer: ', answer);

    //два слова через пробел
    answer = answer.split(' ');
    console.log('answer array: ', answer);
    
    /** TODO сделать проверку на Имя Фамилию через пробел */
    //проверка на ввод только 2 слова через пробел
    if (answer.length === 2) {

        
        //отдельно имя фамилия
        let firstname = answer[0];
        let secondname = answer[1];
        console.log('firstname: ', firstname);
        console.log('secondname: ', secondname);
        
        //с Большой буквы Имя Фамилия
        firstname = '' + firstname[0].toUpperCase() + firstname.slice(1).toLocaleLowerCase();
        secondname = '' + secondname[0].toUpperCase() + secondname.slice(1).toLocaleLowerCase();
        console.log('firstname: ', firstname);
        console.log('secondname: ', secondname);
        
        alert('Мои приветствия, ' + firstname + ' ' + secondname);
        console.log('Мои приветствия, ' + firstname + ' ' + secondname);
        
        
        let login = prompt('Введите одно слово Логин пользователя');
        console.log('login: ', login);
        let password = prompt('Введите одно слово ПАРОЛЬ пользователя');
        console.log('password: ', password);
        
        /*** TODO дата регистрации  */
        let date = new Date();
        //сохраняем дату в мс
        let regDate = date.getTime();
        
        
        let year = date.getFullYear();
        let month = date.getMonth();
        let day = date.getDate();
        let hour = date.getHours();
        let min = date.getMinutes();
        let sec = date.getSeconds();
        
        let timeString = `${year}.${month}.${day}-${hour}:${min}:${sec}`;
        console.log('Дата регистаци timeString: ', timeString);

        /** TODO запись данных в массив */
        user.push({ firstname, secondname, login, password, regDate });
        
        /** TODO записываем данные пользователя в localStorage */
        console.log(user);


        //test localStorage запись
        localStorage.setItem(KEY, JSON.stringify(user));

        

    } else {
        console.log('Ошибка ввода, Введите только два слова через пробел');
        alert('Ошибка ввода, Введите только два слова через пробел');
    }

});


//продолжение слушатель на кнопку авторизации пользователя
loginBtn.addEventListener('click', () => {

    let login = prompt('Введите одно слово Логин пользователя');
    console.log('login: ', login);
    
    let password = prompt('Введите одно слово Пароль пользователя');
    console.log('password: ', password);
    
    /** TODO проверка на наличие пользователя */

    console.log('Авторизация пользователя');
});


//  alert('hello');


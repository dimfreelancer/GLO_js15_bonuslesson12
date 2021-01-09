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
let appData = [];

/** TODO чтение данных пользователя из localStorage  */
const KEY = 'key';



//слушатель на кнопку регистрации
registerBtn.addEventListener('click', (event) => {

    let answer = prompt('Введите через пробел Имя Фамилию пользователя');

    /** TODO сделать проверку на Имя Фамилию через пробел */
    alert('Вы ввели ' + answer);


    /** TODO записываем данные пользователя в localStorage */
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


 alert('hello');


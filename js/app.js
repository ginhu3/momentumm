const loginForm = document.querySelector('.login-form');
const loginInput = document.querySelector('.login-form input');
const greeting = document.querySelector('#greeting');
const todoform = document.getElementById('todo-form');
const todolist = document.getElementById('todo-list');
const tiktok = document.getElementById('clock');
const matdo = document.querySelector('#weather span:first-child');
const ci = document.querySelector('#weather span:last-child');
const toto = document.querySelector('#toto');
const memo = document.querySelector('#memo');
const btttn = document.querySelector('#bttn');
const pls = document.querySelector('#pls');
const plss = document.querySelector('#plss');
const plsss = document.querySelector('#plsss');
const plssss = document.querySelector('#plssss');
const plsssss = document.querySelector('#plsssss');
const qqq = document.querySelector('#quote');
const hell = document.querySelector('#hello');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `🙋‍♀️Hello,  ${username} 💙`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    todoform.classList.remove(HIDDEN_CLASSNAME);
    memo.classList.remove('mm');
    todolist.classList.remove(HIDDEN_CLASSNAME);
    tiktok.classList.remove(HIDDEN_CLASSNAME);
    matdo.classList.remove(HIDDEN_CLASSNAME);
    ci.classList.remove(HIDDEN_CLASSNAME);
    toto.classList.remove(HIDDEN_CLASSNAME);
    pls.classList.remove(HIDDEN_CLASSNAME);
    plss.classList.remove(HIDDEN_CLASSNAME);
    plsss.classList.remove(HIDDEN_CLASSNAME);
    plssss.classList.remove(HIDDEN_CLASSNAME);
    plsssss.classList.remove(HIDDEN_CLASSNAME);
    btttn.classList.remove(HIDDEN_CLASSNAME);
    qqq.classList.remove('mm');
    hell.classList.remove('mm');
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}

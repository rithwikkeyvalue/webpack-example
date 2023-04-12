import getRandomName from "./getRandomName";
import App from "./name";

import './main.scss';

console.log('My name is ' + getRandomName());

document.getElementById('name').appendChild(App())

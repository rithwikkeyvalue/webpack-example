import getRandomName from "./getRandomName";
import getNameElement from "./name";

import './main.scss';

console.log('My name is ' + getRandomName());

document.getElementById('name').appendChild(getNameElement())

import getRandomName from "./utils/getRandomName";

function getNameElement() {
  const element = document.createElement('div');
  element.innerHTML = ('my name is actually ' + getRandomName())

  return element;
}

export default getNameElement;

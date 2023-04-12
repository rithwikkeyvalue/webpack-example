import getRandomName from "./getRandomName";

function App() {
  const element = document.createElement('div');
  element.innerHTML = ('my name is actually ' + getRandomName())

  return element;
}

export default App;

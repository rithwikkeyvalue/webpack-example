const getRandomName = () => {
  const length = 5;
  const names = ['Jeff', 'Tom', 'Bob', 'Lord Octavious the Fifth', 'Jack'];

  const randomIndex = Math.floor(Math.random() * (length - 1)) + 1
  const randomName = names.find((_, index) => index === randomIndex);

  return randomName;
}

export default getRandomName;

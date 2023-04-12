export function Counter() {
  const [count, setCount] = React.useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return React.createElement(
    'div',
    null,
    React.createElement('h1', null, `Count: ${count}`),
    React.createElement('button', { onClick: handleClick }, 'Increment')
  );
}
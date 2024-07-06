import { useEffect, useState } from 'react';

function Hello() {
  // function byFn() {
  //   console.log('bye :(');
  // }
  // function hiFn() {
  //   console.log('Created :)');
  //   return byFn;
  // }

  // useEffect(hiFn, []);

  useEffect(() => {
    console.log('hi :)');
    return () => console.log('bye :(');
  });

  return <h1>Hello</h1>;
}

export default function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing && <Hello />}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

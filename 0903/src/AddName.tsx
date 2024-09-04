import { useEffect, useState } from 'react';

const AddName = () => {
  const [input, setInput] = useState('');
  const [name, setName] = useState<string[]>([]);

  useEffect(() => {
    console.log('렌더링 완료');
  }, []);

  useEffect(() => {
    console.log(name);
  }, [name]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const onClickHandler = () => {
    setName((prev) => [input, ...prev]);
    setInput('');
  };

  return (
    <div>
      <input type="text" onChange={onChangeHandler} value={input} />
      <button onClick={onClickHandler}>clickMe</button>
      <ul>
        {name.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export const TestUseState = () => {
  return <div></div>;
};

export default AddName;

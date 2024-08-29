import React, { useEffect, useState } from 'react';

type UserInput = {
  id: string;
  pw: string;
};

const App = () => {
  const [userInput, setUserInput] = useState<UserInput>({ id: '', pw: '' });
  const info = {
    id: 'admin',
    pw: '1234',
  };

  useEffect(() => {
    console.log(userInput);
  }, [userInput]);

  const onClickButtonHandler = () => {
    if (userInput.id === info.id && userInput.pw === info.pw) {
      alert('로그인 성공');
    } else {
      alert('로그인 실패');
    }
  };

  // 문제 1
  const numbers = [5, 10, 15, 20, 25, 30];

  numbers.forEach((item, index) => {
    // 짝수인 경우
    if (item % 2 === 0) {
      numbers.splice(index, 1);
    }
  });

  console.log(numbers);

  // 문제 2
  const fruits = [
    {
      name: 'apple',
      count: 2,
      price: 1000,
    },
    {
      name: 'banana',
      count: 3,
      price: 2500,
    },
    {
      name: 'orange',
      count: 5,
      price: 5000,
    },
  ];

  console.log(fruits.find((item) => item.name === 'banana'));

  // 문제 3
  const array = ['javascript', 'css', 'react', 'html'];

  console.log(array.find((item) => item === 'javascript')?.length);

  // 문제 4
  console.log(
    [5, 19, 42, 36, 70]
      .map((item) => item * 2)
      .map((item) => {
        if (item % 3 === 0) {
          return item * 2;
        }

        return item;
      })
  );

  return (
    <div style={{ display: 'flex', gap: 15 }}>
      <UserID onChange={setUserInput} />
      <UserPW onChange={setUserInput} />
      <button onClick={onClickButtonHandler}>Login</button>
    </div>
  );
};

export default App;

type UserInputProps = {
  onChange: React.Dispatch<React.SetStateAction<UserInput>>;
};

// UserID.tsx
const UserID = ({ onChange }: UserInputProps) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange((prev) => ({
      ...prev,
      id: e.target.value,
    }));

  return (
    <div>
      <h1>ID</h1>
      <input type="text" onChange={handler} />
    </div>
  );
};

// UserPW.tsx
const UserPW = ({ onChange }: UserInputProps) => {
  const handler = (e: React.ChangeEvent<HTMLInputElement>) =>
    onChange((prev) => ({
      ...prev,
      pw: e.target.value,
    }));

  return (
    <div>
      <h1>Pw</h1>
      <input type="text" onChange={handler} />
    </div>
  );
};

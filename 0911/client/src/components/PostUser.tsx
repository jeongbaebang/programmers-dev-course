import React, { useState } from 'react';
import { Keys, UserType } from './type';
import { useMutation, useQueryClient } from '@tanstack/react-query';

const fetchAddUser = (payload: UserType) => {
  return fetch('http://localhost:3000/api/v1/users', {
    method: 'POST', // POST 요청
    headers: {
      'Content-Type': 'application/json', // JSON 형식으로 데이터 전송
    },
    body: JSON.stringify(payload), // 데이터를 문자열로 변환하여 전송
  });
};

const initialState: UserType = {
  address: '',
  description: '',
  email: '',
  name: '',
  isCompleted: false,
};

const PostUser = () => {
  const queryClient = useQueryClient();

  const [item, setItem] = useState<UserType>(initialState);

  const { mutate } = useMutation({
    mutationFn: fetchAddUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.USER_LIST] });
    },
  });

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setItem((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };

  const onSubmitHandler = () => {
    mutate(item, {
      onSettled: () => {
        setItem(initialState);
      },
    });
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '200px',
        alignItems: 'center',
      }}
    >
      <div style={styles.inputContainer}>
        <p>name</p>
        <input
          id="name"
          onChange={onChangeHandler}
          value={item.name}
          style={styles.input}
        />
      </div>
      <div style={styles.inputContainer}>
        <p>address</p>
        <input id="address" onChange={onChangeHandler} value={item.address} />
      </div>
      <div style={styles.inputContainer}>
        <p>email</p>
        <input id="email" onChange={onChangeHandler} value={item.email} />
      </div>
      <div style={styles.inputContainer}>
        <p>description</p>
        <input
          id="description"
          onChange={onChangeHandler}
          value={item.description}
        />
      </div>
      <button onClick={onSubmitHandler}>create new Item</button>
    </div>
  );
};

const styles: {
  [Key in string]: React.CSSProperties;
} = {
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    maxWidth: 150,
  },
};

export default PostUser;

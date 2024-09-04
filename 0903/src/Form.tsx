import { useCallback, useState } from 'react';

import styles from './Form.module.scss';
import AddUser, { UserState } from './AddUser';
import UserList from './UserList';

const Form = () => {
  const [userList, setUserList] = useState<UserState[]>([]);

  const onSubmitHandler = useCallback((payload: UserState) => {
    setUserList((prev) => [...prev, payload]);
  }, []);

  const onRemoveHandler = (id: number) => {
    const data = userList.filter((item) => item._id !== id);

    setUserList(data);
  };

  return (
    <div className={styles.container}>
      <h1>전체 회원수: {userList?.length ?? 0}</h1>
      <AddUser onSubmit={onSubmitHandler} />
      <UserList data={userList} onRemove={onRemoveHandler} />
    </div>
  );
};

export default Form;

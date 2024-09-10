import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { RingLoader } from 'react-spinners';

import { Keys, UserResponseType } from './type';
import PostUser from './PostUser';

const fetchUsers = (): Promise<UserResponseType[]> => {
  return fetch('http://localhost:3000/api/v1/users', {
    method: 'GET',
  })
    .then((response) => response.json())
    .then((data: UserResponseType[]) => data.reverse());
};

const fetchUpdateUser = (payload: UserResponseType) => {
  return fetch(`http://localhost:3000/api/v1/users/${payload._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });
};

const fetchDeleteUser = (id: string) => {
  return fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: 'DELETE',
  });
};

const GetUser = () => {
  const queryClient = useQueryClient();

  const { isPending, error, data } = useQuery({
    queryKey: [Keys.USER_LIST],
    queryFn: fetchUsers,
  });

  const { mutate } = useMutation({
    mutationFn: fetchUpdateUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.USER_LIST] });
    },
  });

  const { mutate: deleteItem } = useMutation({
    mutationFn: fetchDeleteUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [Keys.USER_LIST] });
    },
  });

  if (isPending) {
    return <RingLoader />;
  }

  if (error) {
    return <h1>Error!</h1>;
  }

  return (
    <>
      <PostUser />
      <div>
        {data.map((item) => {
          return (
            <div
              key={item._id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                border: '1px solid black',
              }}
            >
              <h1>name: {item.name}</h1>
              <h1>address:{item.address}</h1>
              <h1>email:{item.email}</h1>
              <h1>description:{item.description}</h1>
              <label htmlFor={item._id}>
                isCompleted:
                <input
                  type="checkbox"
                  checked={item.isCompleted ?? false}
                  id={item._id}
                  onChange={(e) => {
                    mutate({
                      ...item,
                      isCompleted: e.target.checked,
                    });
                  }}
                />
              </label>
              <button onClick={() => deleteItem(item._id)}>삭제</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default GetUser;

import { useQuery } from '@tanstack/react-query';
import { Spinner } from './LottieAnimation';

type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

const fetchTodo = async (): Promise<User[]> => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  const data = await response.json();

  return data;
};

const GetFakeItem = () => {
  const {
    isLoading,
    error,
    data: userList,
  } = useQuery({ queryKey: ['userList'], queryFn: fetchTodo });

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Error!...</div>;
  }

  return (
    <div>
      <h1>사용자 정보</h1>
      {userList ? (
        userList.map((item) => {
          return (
            <div
              key={item.id}
              style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
            >
              <div>Name: {item.name}</div>
              <div>Email: {item.email}</div>
              <div>Phone: {item.phone}</div>
              <div style={{ border: '1px solid black', width: 100 }} />
            </div>
          );
        })
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default GetFakeItem;

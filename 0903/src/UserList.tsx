import { UserState } from './AddUser';

const UserList: React.FC<{
  data: UserState[];
  onRemove: (id: number) => void;
}> = ({ data = [], onRemove }) => {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: 30 }}>
        <p>이름</p>
        <p>나이</p>
        <p>지역</p>
        <p>삭제</p>
      </div>
      <div>
        {data.map(({ address, age, name, _id }, index) => {
          return (
            <div
              key={index}
              style={{ display: 'flex', flexDirection: 'row', gap: 30 }}
            >
              <p>{name}</p>
              <p>{age}</p>
              <p>{address}</p>
              <p>
                <button onClick={() => onRemove(_id)}>X</button>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default UserList;

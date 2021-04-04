function UserList({ usersData }) {
  return (
    <ul>
      {usersData.map((u) => (
        <li key={u.id}>
          {u.address}, {u.name}
        </li>
      ))}
    </ul>
  );
}

export default UserList;

import Layout from "../components/Layout";
import UserList from "../components/UserList/UserList";

function Users({users}) {
  return (
    <Layout>
      <UserList usersData={users}/>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3333/users");
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}

export default Users;

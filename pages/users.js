import User from "../components/user"

const userList = ({users}) => {
  return (
    <div>
        <h1>List of users</h1>
        {users.map(user => (
            <div key={user.id}>
               <User user={user} />
            </div>
        ))}
    </div>
  )
}

export default userList

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    console.log(data)

    return {
        props: {
            users: data,
        }
    }
}
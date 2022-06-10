import useStore from '../zustand/store'

function UserData() {
  const user = useStore(state =>  state.user)

  return (
    <>
    <h1>this is the no of user we have: {user.length}</h1>
    <ul>
        {user.map((data, index) => (
            <li key={index}><h2>{data}</h2></li>
        ))}
    </ul>
    </>
  )
}

export default UserData
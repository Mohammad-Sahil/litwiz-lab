import useStore from '../zustand/store'

function UserData() {
  const user = useStore((state: { user: any }) =>  state.user)
  console.log("this is the user >>>  ",user)
  return (
    <>
    <h1>The user we have: </h1>
    <ul>
       
            <li><h2>{user?.name}</h2></li>
            <li><h2>{user?.age}</h2></li>
            <li><h2>{user?.gender}</h2></li>
    </ul>
    </>
  )
}

export default UserData
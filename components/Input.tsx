import useStore from '../zustand/store'
import { useState } from 'react'
// import Input2 from './Input2'

const Input = () => {
// const inputRef = useRef()
const [ input,  setInput ] = useState(null)
const userData = useStore((state: { userData: any }) =>  state.userData)

const addPerson = () => {
    userData(input)
    setInput('')
  }

  return (
    <form onSubmit={e =>  e.preventDefault()}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        {/* <Input2/> */}
        <button onClick={addPerson}>Addd person</button>
    </form>
  )
}

export default Input
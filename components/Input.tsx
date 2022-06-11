import useStore from '../zustand/store'
import { useState } from 'react'

const Input = () => {
// const inputRef = useRef()
const [ input,  setInput ] = useState(null)
const userData = useStore(state =>  state.userData)

const addPerson = () => {
    userData(input)
    setInput('')
  }

  return (
    <form onSubmit={e =>  e.preventDefault()}>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addPerson}>Addd person</button>
    </form>
  )
}

export default Input
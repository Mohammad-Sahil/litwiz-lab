import useStore from '../zustand/store'
import { useRef } from 'react'

const Input = () => {
const inputRef = useRef()
const userData = useStore(state =>  state.userData)

const addPerson = () => {
    // userData(inputRef.current.value)
    // inputRef.current.value = ' '
}

  return (
    <form onSubmit={e =>  e.preventDefault()}>
        <input type='text' ref={inputRef} />
        <button onClick={addPerson}>Addd person</button>
    </form>
  )
}

export default Input
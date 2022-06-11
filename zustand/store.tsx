import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const store = devtools((set) => ({
  user: ['Sahil', 'Male',  29],
  userData: (data) => set(state => ({ user: [...state.user, data] })),
}))
// store = persist(store, {name:  'user_settings'})

const useStore = create(store)

export default useStore

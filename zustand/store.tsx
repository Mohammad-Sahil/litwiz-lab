import create from 'zustand'
// import { devtools, persist } from 'zustand/middleware'

const store = (set: (arg0: (state: any) => { user: any[] }) => any) => ({
  user: {},
  userData: (data: any) => set(state => ({ user: data })),
})
// store = persist(store, {name:  'user_settings'})

const useStore = create(store)

export default useStore

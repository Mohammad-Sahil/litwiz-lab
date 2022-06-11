import create from 'zustand'
// import { devtools, persist } from 'zustand/middleware'

const store = (set) => ({
  user: {},
  userData: (data: any) => set(() => ({ user: data })),
  dark: false,
  toggleDarkMode: () => set((state) => ({ dark: !state.dark}))
})
// store = persist(store, {name:  'user_settings'})

const useStore = create(store)

export default useStore

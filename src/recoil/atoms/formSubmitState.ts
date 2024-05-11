import { atom } from 'recoil'

export const formSubmitState = atom<boolean>({
  key: 'formSubmitState',
  default: false,
})

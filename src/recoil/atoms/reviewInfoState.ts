import { atom } from 'recoil'

export const reviewInfoState = atom({
  key: 'reviewInfoState',
  default: {
    id: 0,
    category: 0,
    title: '',
    comment: '',
    score: 0,
  },
})

import { atom } from 'recoil'
import { STOREDDATA } from '../../constants/storedData'

export const storedDataState = atom<ReviewItems[]>({
  key: 'storedDataState',
  default: STOREDDATA,
})

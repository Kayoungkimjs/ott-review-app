import { useCallback, useEffect, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../recoil/atoms'

export const useModal = () => {
  const [showModal, setShowModal] = useRecoilState(modalState)
  const [preventFormSubmit, setPreventFormSubmit] = useState(false)

  const handleModalOpen = useCallback(() => {
    setShowModal(true)
    setPreventFormSubmit(true)
  }, [setShowModal])

  const handleModalClose = useCallback(() => {
    setShowModal(false)
    setPreventFormSubmit(false)
  }, [setShowModal])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && showModal) {
        e.preventDefault()
        handleModalClose()
      }
    }

    const handleClickOutside = (e: MouseEvent) => {
      if ((e.target as HTMLElement).classList.contains('overlay')) {
        handleModalClose()
        setPreventFormSubmit(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('click', handleClickOutside)
    }
  }, [showModal, handleModalClose])

  return {
    showModal,
    preventFormSubmit,
    setPreventFormSubmit,
    handleModalOpen,
    handleModalClose,
  }
}

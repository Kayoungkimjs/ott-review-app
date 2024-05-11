import { useModal } from '../../hooks/useModal'
import { ModalContent, ModalWrapper, StyledOverlay, Button } from './styles'
export interface ModalProps {
  content: string
}

export const Modal: React.FC<ModalProps> = ({ content }) => {
  const { handleModalClose } = useModal()

  return (
    <>
      <ModalWrapper>
        <ModalContent>
          <p>{content}</p>
          <Button type={'button'} onClick={handleModalClose}>
            확인
          </Button>
        </ModalContent>
      </ModalWrapper>
      <StyledOverlay onClick={handleModalClose} />
    </>
  )
}

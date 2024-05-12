import { useEffect } from 'react'
import { StyledRegisterSection } from './styles'
import { useModal } from '../hooks/useModal'
import { Button, Input, Modal, Select, Title, ErrorInfo } from '../components'
import { useRecoilState } from 'recoil'
import {
  storedDataState,
  reviewInfoState,
  formSubmitState,
} from '../recoil/atoms'
import { getStoredReview, setStoredReview } from '../utils/localStorage'
import { RATINGOPTION, CATEGORYOPTION } from '../constants/selectOption'
import { INITIALDATA } from '../constants/initialData'
import { Textarea } from '../components/Forms/Textarea'

const ReviewRegister = () => {
  const {
    showModal,
    preventFormSubmit,
    setPreventFormSubmit,
    handleModalOpen,
  } = useModal()
  const [reviewInfo, setReviewInfo] = useRecoilState(reviewInfoState)
  const [storedData, setStoredData] = useRecoilState(storedDataState)
  const [isFormSubmitted, setIsFormSubmitted] = useRecoilState(formSubmitState)

  useEffect(() => {
    const storedData = getStoredReview()
    storedData && setStoredData(storedData)

    setIsFormSubmitted(false)
  }, [setStoredData, setIsFormSubmitted])

  const validateForm = (reviewInfo: ReviewItems) => {
    return reviewInfo.title && reviewInfo.comment && reviewInfo.score
  }

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setReviewInfo({ ...reviewInfo, [name]: value })
  }

  const addReview = () => {
    const addReview = {
      ...reviewInfo,
      id: storedData.length + 1,
      score: parseInt(String(reviewInfo.score), 10),
      category: parseInt(String(reviewInfo.category), 10),
    }

    const updatedReviews = [...storedData, addReview]
    setStoredReview(updatedReviews)
    setStoredData(updatedReviews)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted(true)

    if (validateForm(reviewInfo) && !preventFormSubmit) {
      addReview()
      setReviewInfo(INITIALDATA)
      handleModalOpen()
      setIsFormSubmitted(false)
      setPreventFormSubmit(false)
    }
  }

  return (
    <StyledRegisterSection>
      <Title title={'리뷰 쓰기'} />
      <form onSubmit={handleSubmit}>
        <div className="formItem">
          <label htmlFor="category" className="formItem title">
            OTT 선택
          </label>
          <Select
            id="category"
            name="category"
            title="카테고리"
            value={reviewInfo.category}
            options={CATEGORYOPTION}
            disabled={showModal}
            onChange={handleChange}
          />
        </div>
        {isFormSubmitted && !reviewInfo.category && (
          <ErrorInfo message={'OTT 종류을 선택해 주세요.'} />
        )}
        <div className="formItem">
          <label htmlFor="title" className="formItem title">
            작품명
          </label>
          <Input
            id="title"
            name="title"
            value={reviewInfo.title}
            onChange={handleChange}
            placeholder={'제목을 입력해 주세요'}
          />
        </div>
        {isFormSubmitted && !reviewInfo.title && (
          <ErrorInfo message={'프로그램 제목을 입력해 주세요.'} />
        )}
        <div className="formItem">
          <label htmlFor="score" className="formItem title">
            별점
          </label>
          <Select
            id="score"
            name="score"
            title="별점"
            value={reviewInfo.score}
            options={RATINGOPTION}
            disabled={showModal}
            onChange={handleChange}
          />
        </div>
        {isFormSubmitted && !reviewInfo.score && (
          <ErrorInfo message={'별점을 선택해 주세요.'} />
        )}
        <div className="formItem">
          <label htmlFor="comment" className="formItem title">
            리뷰
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={reviewInfo.comment}
            disabled={showModal}
            onChange={handleChange}
            placeholder={'내용을 입력해 주세요'}
          />
        </div>
        {isFormSubmitted && !reviewInfo.comment && (
          <ErrorInfo message={'리뷰를 입력해 주세요.'} />
        )}

        <Button
          type="submit"
          className={validateForm(reviewInfo) ? 'active' : ''}
          disabled={(!validateForm(reviewInfo) && isFormSubmitted) || showModal}
        >
          등록
        </Button>
      </form>
      {showModal && <Modal content={'리뷰가 등록되었습니다.'} />}
    </StyledRegisterSection>
  )
}

export default ReviewRegister

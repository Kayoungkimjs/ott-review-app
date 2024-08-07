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

  const { title, category, comment, score } = reviewInfo

  useEffect(() => {
    const storedData = getStoredReview()
    storedData && setStoredData(storedData)

    setIsFormSubmitted(false)
  }, [setStoredData, setIsFormSubmitted])

  const validateForm = ({ title, comment, score }: ReviewItems) => {
    return title && comment && score
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
      score: parseInt(String(score), 10),
      category: parseInt(String(category), 10),
    }

    const updatedReviews = [...storedData, addReview]
    setStoredReview(updatedReviews)
    setStoredData(updatedReviews)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsFormSubmitted(true)

    if (validateForm(reviewInfo) && !preventFormSubmit) {
      try {
        addReview()
        setReviewInfo(INITIALDATA)
        handleModalOpen()
      } catch (error) {
        console.error('등록 중 에러가 발생했습니다', error)
      } finally {
        setIsFormSubmitted(false)
        setPreventFormSubmit(false)
      }
    } else {
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
            value={category}
            options={CATEGORYOPTION}
            disabled={showModal}
            onChange={handleChange}
            label={CATEGORYOPTION.find((i) => i.label)?.label ?? ''}
          />
        </div>
        {isFormSubmitted && !category && (
          <ErrorInfo message={'OTT 종류을 선택해 주세요.'} />
        )}
        <div className="formItem">
          <label htmlFor="title" className="formItem title">
            작품명
          </label>
          <Input
            id="title"
            name="title"
            value={title}
            onChange={handleChange}
            placeholder={'제목을 입력해 주세요'}
          />
        </div>
        {isFormSubmitted && !title && (
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
            value={score}
            options={RATINGOPTION}
            disabled={showModal}
            onChange={handleChange}
            label={RATINGOPTION.find((i) => i.label)?.label ?? ''}
          />
        </div>
        {isFormSubmitted && !score && (
          <ErrorInfo message={'별점을 선택해 주세요.'} />
        )}
        <div className="formItem">
          <label htmlFor="comment" className="formItem title">
            리뷰
          </label>
          <Textarea
            id="comment"
            name="comment"
            value={comment}
            disabled={showModal}
            onChange={handleChange}
            placeholder={'내용을 입력해 주세요'}
          />
        </div>
        {isFormSubmitted && !comment && (
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

import { useEffect, useRef } from 'react'
import { StyledListSection, StyledCardSection } from './styles'
import { Card } from '../components'
import { useRecoilValue } from 'recoil'
import {
  formSubmitState,
  reviewInfoState,
  searchWordState,
  storedDataState,
} from '../recoil/atoms'

const ReviewList = () => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const storedData = useRecoilValue(storedDataState)
  const searchTerm = useRecoilValue(searchWordState)
  const reviewInfo = useRecoilValue(reviewInfoState)
  const isFormSubmitted = useRecoilValue(formSubmitState)

  const reviewOrder = (a: ReviewItems, b: ReviewItems) => {
    // 점수 비교 후, 오름차순 정렬
    if (a.score !== b.score) {
      return b.score - a.score
    } else {
      // 점수가 같은 경우, 제목 내림차순 정렬
      return a.title.localeCompare(b.title, 'ko-KR', {
        numeric: true,
        sensitivity: 'base',
      })
    }
  }
  // 검색 대상 문자열 필터링
  const filteredData = storedData.filter((review) =>
    review.title.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const reviewData = filteredData.sort(reviewOrder)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = 0
    }
  }, [searchTerm])

  return (
    <StyledListSection
      ref={scrollRef}
      className={
        (isFormSubmitted && !reviewInfo.title) ||
        (isFormSubmitted && !reviewInfo.comment) ||
        (isFormSubmitted && !reviewInfo.score)
          ? 'height'
          : ''
      }
    >
      <StyledCardSection>
        <div className="card">
          {reviewData.length ? (
            <Card reviewData={reviewData} />
          ) : (
            <p className="noInfo">검색 결과가 없습니다.</p>
          )}
        </div>
      </StyledCardSection>
    </StyledListSection>
  )
}

export default ReviewList

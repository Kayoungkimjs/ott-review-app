import { StarIcon } from '../../../public/assets/svg'
import { StyledRating } from './style'

export interface RatingProp {
  score: number
}

export const StarRating: React.FC<RatingProp> = ({ score }) => {
  return (
    <StyledRating>
      {[...Array(score)].map((_, index) => (
        <StarIcon className="star" key={index} aria-label="별점 내역" />
      ))}
    </StyledRating>
  )
}

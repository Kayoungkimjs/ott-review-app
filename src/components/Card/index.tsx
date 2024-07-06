import { StyledCard } from './styles'
import { StarRating } from '../StarRating'
import { Thumbnail } from '../Thumbnail'
import { CATEGORYOPTION } from '../../constants/selectOption'

interface CardProps<T> {
  data: T[]
}

export const Card = <T,>({ data }: CardProps<T>) => {
  return (
    <StyledCard>
      {data.map((item, i) => {
        const key = `${item.id}-${i}`
        return (
          <div className="cardGroup" key={key}>
            <div className="cardHeader">
              <Thumbnail category={item.category} options={CATEGORYOPTION} />
              <h3 className="cardTitle">{item.title}</h3>
            </div>
            <StarRating score={item.score} />
            <p className="cardComment">{item.comment}</p>
          </div>
        )
      })}
    </StyledCard>
  )
}

import { Container } from './Container'
import { Column, ColumnProps } from './Column'
import { Row, RowProps } from './Row'

type GridProps = ColumnProps & RowProps

export const Grid: React.FC<GridProps> = ({
  sm,
  alignItems,
  justifyContent,
  children,
  className,
}) => {
  return (
    <Container className={className}>
      <Row alignItems={alignItems} justifyContent={justifyContent}>
        <Column sm={sm}>{children}</Column>
      </Row>
    </Container>
  )
}

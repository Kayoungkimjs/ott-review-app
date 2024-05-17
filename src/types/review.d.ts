declare interface ReviewItems {
  id: number
  category: number
  title: string
  comment: string
  score: number
}

declare interface RatingSelectOption {
  label: string
  value: number
}

declare interface CategorySelectOption {
  label: string
  value?: number
  image: string
  url: string
}

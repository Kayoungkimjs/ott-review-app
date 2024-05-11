const REVIEW_LOCALSTORAGE_KEY = 'review'

export function getStoredReview(): ReviewItems[] | null {
  const storedData = localStorage.getItem(REVIEW_LOCALSTORAGE_KEY || '[]')
  return storedData ? JSON.parse(storedData) : null
}

export function setStoredReview(review: ReviewItems[]): void {
  localStorage.setItem(REVIEW_LOCALSTORAGE_KEY, JSON.stringify(review))
}

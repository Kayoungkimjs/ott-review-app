import { render, fireEvent, waitFor } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import ReviewRegister from '../sections/ReviewRegister'

describe('ReviewRegister 컴포넌트', () => {
  test('등록 버튼을 누를 때 리뷰가 등록되는지 확인', async () => {
    const { getByLabelText, getByText } = render(
      <RecoilRoot>
        <ReviewRegister />
      </RecoilRoot>
    )

    // 입력 필드에 값 입력
    fireEvent.change(getByLabelText('OTT 선택'), { target: { value: '8' } })
    fireEvent.change(getByLabelText('작품명'), {
      target: { value: '테스트 제목' },
    })
    fireEvent.change(getByLabelText('별점'), { target: { value: '5' } })
    fireEvent.change(getByLabelText('리뷰'), {
      target: { value: '테스트 리뷰입니다.' },
    })

    // 등록 버튼 클릭
    fireEvent.click(getByText('등록'))

    // 모달이 나타나는지 확인
    await waitFor(() => {
      expect(getByText('리뷰가 등록되었습니다.')).toBeTruthy()
    })
  })

  test('에러 메시지가 나타나는지 확인', async () => {
    const { getByText } = render(
      <RecoilRoot>
        <ReviewRegister />
      </RecoilRoot>
    )

    // 등록 버튼 클릭
    fireEvent.click(getByText('등록'))

    // 에러 메시지가 나타나는지 확인
    await waitFor(() => {
      expect(getByText('OTT 종류을 선택해 주세요.')).toBeTruthy()
      expect(getByText('프로그램 제목을 입력해 주세요.')).toBeTruthy()
      expect(getByText('별점을 선택해 주세요.')).toBeTruthy()
      expect(getByText('리뷰를 입력해 주세요.')).toBeTruthy()
    })
  })
})

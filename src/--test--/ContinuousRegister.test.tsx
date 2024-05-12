import { render, fireEvent, waitFor } from '@testing-library/react'
import { RecoilRoot } from 'recoil'
import ReviewRegister from '../sections/ReviewRegister'

describe('ReviewRegister 컴포넌트', () => {
  test('20번 연속 등록 시도', async () => {
    const { getByLabelText, getByText } = render(
      <RecoilRoot>
        <ReviewRegister />
      </RecoilRoot>
    )
    // 20번 반복하여 등록 시도
    for (let i = 0; i < 20; i++) {
      // 각 입력 필드에 값을 입력
      fireEvent.change(getByLabelText('OTT 선택'), {
        target: { value: '3' },
      })
      fireEvent.change(getByLabelText('작품명'), {
        target: { value: '작품명입니다.' },
      })
      fireEvent.change(getByLabelText('리뷰'), {
        target: { value: '한줄평입니다.' },
      })
      fireEvent.change(getByLabelText('별점'), {
        target: { value: '4' },
      })

      // 등록 버튼 클릭
      fireEvent.click(getByText('등록'))

      // 등록 완료 메시지가 나타날 때까지 기다림
      await waitFor(() => {
        expect(getByText('리뷰가 등록되었습니다.')).toBeTruthy()
      })

      // 확인 버튼 시뮬레이션
      fireEvent.keyPress(getByText('확인'), {
        key: 'Enter',
        code: 13,
        charCode: 13,
      })

      // ReviewRegister 컴포넌트의 제목인 "신규 리뷰"가 다시 나타나는지 확인
      expect(getByText('리뷰 쓰기')).toBeTruthy()
    }
  })
})

import { StyledSearchSection } from './styles'
import { Input } from '../components'
import { useRecoilState } from 'recoil'
import { searchWordState } from '../recoil/atoms'
import { SearchIcon } from '../../public/assets/svg'

const ReviewSearch = () => {
  const [searchWord, setSearchWord] = useRecoilState(searchWordState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const word = e.target.value
    setSearchWord(word)
  }

  return (
    <StyledSearchSection>
      <div className="searchGroup">
        <div>
          <Input
            className={'searchInput'}
            value={searchWord}
            onChange={handleChange}
            placeholder={`'작품 제목' 으로 검색해 주세요`}
          />
          <SearchIcon className="icon" />
        </div>
      </div>
    </StyledSearchSection>
  )
}

export default ReviewSearch

import styled from '@emotion/styled'
import { textStyle } from '../styles/utils/typography'
import { theme } from '../styles'
import {
  HEIGHT,
  REGISTER_HEIGHT,
  SEARCH_HEIGHT,
  TITLE_HEIGHT,
} from '../constants/styles'
import { positionCenterY } from '../styles/utils/position'

const ADJUST_HEIGHT = `calc(${HEIGHT} - ${REGISTER_HEIGHT} - ${SEARCH_HEIGHT} - ${TITLE_HEIGHT} - 30px)`

export const StyledRegisterSection = styled.section`
  padding: 15px 0;

  .formItem {
    margin-bottom: 10px;

    .title {
      ${textStyle('base')}
      color: ${theme.colors.blue};
      font-weight: 700;
      margin-bottom: 3px;
    }
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    max-width: 600px;

    .formItem {
      margin-bottom: 20px;
    }
  }
`

export const StyledListSection = styled.section`
  width: 100%;
  height: ${(props) =>
    props.className === 'height'
      ? ADJUST_HEIGHT
      : `calc(${HEIGHT} - ${REGISTER_HEIGHT} - ${SEARCH_HEIGHT} - ${TITLE_HEIGHT})`};
  overflow-y: auto;
  overscroll-behavior: contain;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    height: 50vh;
  }
`

export const StyledSearchSection = styled.section`
  padding: 15px 0;
  margin-left: -15px;
  margin-right: -15px;
  background-color: ${theme.colors.lightBlue};

  .searchGroup {
    position: relative;
    margin-left: 15px;
    margin-right: 15px;
  }

  .searchInput {
    background-color: ${theme.colors.white};
    padding-left: 40px;
  }

  .icon {
    ${positionCenterY()}
    left: 10px;
    width: 20px;
    color: ${theme.colors.grey};
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    background-color: transparent;
    margin-left: 15px;
    margin-right: 15px;

    .searchGroup {
      max-width: 600px;
      padding-right: 30px;
    }
  }
`
export const StyledCardSection = styled.div`
  padding: 15px 0;

  .formItem {
    margin-bottom: 10px;

    .title {
      ${textStyle('base')}
      font-weight: 500;
      margin-bottom: 3px;
    }
  }

  .card {
    width: 100%;
  }

  .noInfo {
    margin-top: 20px;
    text-align: center;
  }

  @media (min-width: ${theme.breakpoints.desktop}) {
    width: 100%;
    height: 100%;

    .card {
      min-width: 600px;
      height: 100%;
    }

    .noInfo {
      min-width: 600px;
      height: 100%;
    }
  }
`

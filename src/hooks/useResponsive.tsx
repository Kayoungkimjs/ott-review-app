import { theme } from '@/styles'
import { useEffect, useState } from 'react'

function getResponsive() {
  const { innerWidth } = window

  let breakPoint = 'Mobile'
  let isMobile = true
  let isTablet = false
  let isDesktop = false

  if (innerWidth > Number(theme.breakpoints.tablet.replace('px', ''))) {
    breakPoint = 'Tablet'
    isMobile = false
    isTablet = true
  }

  if (innerWidth > Number(theme.breakpoints.desktop.replace('px', ''))) {
    breakPoint = 'Desktop'
    isTablet = false
    isDesktop = true
  }

  return {
    breakPoint,
    isMobile,
    isTablet,
    isDesktop,
  }
}

export const useResponsive = () => {
  const [responsive, setResponsive] = useState(getResponsive())

  const updateResponsive = () => {
    setResponsive(getResponsive())
  }

  useEffect(() => {
    window.addEventListener('resize', updateResponsive)

    return () => {
      window.removeEventListener('resize', updateResponsive)
    }
  }, [])

  return {
    ...responsive,
  }
}

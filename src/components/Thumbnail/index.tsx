import { findSelectoption } from '@/utils'
import { StyledThumbnail } from './styles'
import { useResponsive } from '@/hooks/useResponsive'

export type ThumbnailSize = 'big' | 'small'

export interface ThumbnailProps {
  className?: string
  size?: ThumbnailSize
  category: number
  options?: CategorySelectOption[]
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  className,
  category,
  size = 'small',
  options = [],
}) => {
  const { isDesktop } = useResponsive()

  const image = findSelectoption(options, category, 'image')?.toString()
  const url = findSelectoption(options, category, 'url')?.toString()

  const createImageElement = (image: string) => {
    const imageUrl = new URL(
      `${process.env.VITE_PUBLIC_URL}/${image}.png`,
      import.meta.url
    ).href

    return (
      <a href={url} target="_blank">
        <img src={imageUrl} alt="thumbnail image" />
      </a>
    )
  }

  return (
    <StyledThumbnail className={className} size={isDesktop ? 'big' : size}>
      {image && createImageElement(image)}
    </StyledThumbnail>
  )
}

import { StyledThumbnail } from './styles'

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
  const image =
    options && options.find((option) => option.value === category)?.image

  const createImageElement = (image: string) => {
    const imageUrl = new URL(
      `${import.meta.env.VITE_PUBLIC_URL}/${image}.png`,
      import.meta.url
    ).href
    return <img src={imageUrl} alt="thumbnail image" />
  }

  return (
    <StyledThumbnail className={className} size={size}>
      {image && createImageElement(image)}
    </StyledThumbnail>
  )
}

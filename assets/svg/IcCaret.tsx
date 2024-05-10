import type { SVGProps } from 'react'

const SvgIcCaret = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="current"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#000"
      fillRule="evenodd"
      d="M7.966 10a.4.4 0 0 0-.283.683l4.034 4.034a.4.4 0 0 0 .566 0l4.034-4.034a.4.4 0 0 0-.283-.683z"
      clipRule="evenodd"
    />
  </svg>
)
export default SvgIcCaret

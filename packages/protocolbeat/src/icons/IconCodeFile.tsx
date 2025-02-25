import { Icon } from './Icon'

export function IconCodeFile(props: { className?: string }) {
  return (
    <Icon {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.57 1.14L13.85 4.44L14 4.8V14.5L13.5 15H2.5L2 14.5V1.5L2.5 1H10.22L10.57 1.14ZM10 5H13L10 2V5ZM3 2V14H13V6H9.5L9 5.5V2H3ZM5.062 9.533L6.879 7.705L6.17 7L4 9.179V9.886L6.171 12.06L6.878 11.353L5.062 9.533ZM8.8 7.714L9.5 7.005L11.689 9.18V9.889L9.5 12.062L8.795 11.353L10.626 9.533L8.8 7.714Z"
        fill="currentColor"
      />
    </Icon>
  )
}

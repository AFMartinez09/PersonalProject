import { ReactNode } from 'react'

type classNameTypeData =
  | "primary"
  | "secondary"
  | "adding"
  | "logout"
  | "delete";

type buttonType = 
  | "button"
  | "submit";

type Props = {
  children: ReactNode;
  classStyle?: classNameTypeData;
  type: buttonType;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const Button = ({ children = "primary", classStyle, type = "button"}: Props) => {
  return (
    <button
      type={type}
      className={classStyle}
    >
      {children}
    </button>
  )
}

export default Button
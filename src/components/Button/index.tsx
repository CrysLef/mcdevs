import { ButtonHTMLAttributes, ReactNode } from "react"
import { Botao } from "./styles"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "transparent" | "primary" | undefined,
  children: ReactNode
}


export const Button = ({ variant, children, ...props }: Props) => {
  return(
    <Botao variant={variant} {...props}>
      {children}
    </Botao>
  )
}
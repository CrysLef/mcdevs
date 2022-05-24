import { ReactNode, AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link'
import { Anchor } from './styles'

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string,
  children: ReactNode,
}

export const Link = ({ href, children, ...props }: Props) => {
  return(
    <NextLink href={href}>
      <Anchor {...props}>{children}</Anchor>
    </NextLink>
  )
}
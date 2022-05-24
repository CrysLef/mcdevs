import { ReactNode } from "react"
import Head from "next/head"

type Props = {
  children: ReactNode;
}

export const PageTitle = ({ children }: Props) => {
  return(
    <Head>
      <title>{children}</title>
    </Head>
  )
}

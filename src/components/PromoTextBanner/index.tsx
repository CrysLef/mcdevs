import { Button } from "components/Button";
import { PromoWrapper, Title } from './styles'

interface PromoTextBannerProps {
  title: string;
  side?: "bottom_left" | "bottom_right" | "top_left" | "top_right";
}

export const PromoTextBanner = ({ title, side }: PromoTextBannerProps) => {
  return (
    <PromoWrapper side={side}>
      <Title>{ title }</Title>
      <Button>Eu quero</Button>
    </PromoWrapper>
  )
}
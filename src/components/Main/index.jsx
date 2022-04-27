import * as S from './styles'

const Main = ({
  title = 'Qcompare',
  description = 'A compare text tool for QA',
  quote = 'Let‘s QA'
}) => (
  <S.Wrapper>
    <S.Logo
      src="https://www.quarry.com/_themes/quarry/_/img/logo-quarry.png"
      alt="My avatar"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Quote>{quote}</S.Quote>
  </S.Wrapper>
)

export default Main

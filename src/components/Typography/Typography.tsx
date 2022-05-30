import { TypographyProps } from 'global.types'
import styled from 'styled-components'

const TypographyText = styled.p<TypographyProps>`
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: 'Red Hat Display';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;
`

const TypographyBigTitle = styled.h2<TypographyProps>`
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 99px;
`

const TypographySmallTitle = styled.h3<TypographyProps>`
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 700;
  font-size: 40px;
  line-height: 50px;
`

const TypographySubtitle = styled.h4<TypographyProps>`
  color: ${(props) => props.color};
  margin: ${(props) => (props.margin ? props.margin : '')};
  font-family: 'Rowdies';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
`

export {
  TypographyBigTitle,
  TypographySmallTitle,
  TypographyText,
  TypographySubtitle,
}

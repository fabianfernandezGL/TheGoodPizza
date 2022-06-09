import { Rectangle } from 'components/Shapes'
import { SectionLayoutProps } from 'global.types'
import styled from 'styled-components'

interface FrontLayoutProps {
  readonly height: string
}

const FrontLayout = styled.div<FrontLayoutProps>`
  height: ${(props) => props.height};
  z-index: 10;
  position: absolute;
  width: 100%;
`

interface BackLayoutProps {}

const BackLayout = styled.div<BackLayoutProps>`
  z-index: 5;
  width: 100%;
`

const SectionLayout = (props: SectionLayoutProps) => {
  return (
    <>
      <FrontLayout height={props.height}>{props.children}</FrontLayout>
      {(props.shapeImg || props.shapeColor) && (
        <BackLayout>
          <Rectangle
            colSpan={props.shapeSpan}
            radiusValue="388px"
            roundCorner={props.cornerToRound}
            backgroundColor={props.shapeColor}
            backgroundImg={props.shapeImg}
            height={props.height}
          />
        </BackLayout>
      )}
    </>
  )
}

SectionLayout.defaultProps = {
  imgSpan: 6,
  radiusValue: '388px',
  height: 'auto',
}

export default SectionLayout

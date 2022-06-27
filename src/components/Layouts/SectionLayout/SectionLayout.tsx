import { Rectangle } from 'components/Shapes'
import { SectionLayoutProps } from 'global.types'
import styled from 'styled-components'

interface FrontLayoutProps {
  readonly minHeight?: string
}

const FrontLayout = styled.div<FrontLayoutProps>`
  z-index: 10;
  position: relative;
  width: 100%;
  min-height: ${(props) => props.minHeight ?? 'auto'};

  & > * {
    display: inline-flex;
    height: fit-content;
  }
`

interface BackLayoutProps {}

const BackLayout = styled.div<BackLayoutProps>`
  z-index: 5;
  position: absolute;
  width: 100%;
`

interface LayoutProps {}

const Layout = styled.div<LayoutProps>`
  position: relative;
`

const SectionLayout = (props: SectionLayoutProps) => {
  return (
    <Layout>
      {(props.shapeImg || props.shapeColor) && (
        <BackLayout>
          <Rectangle
            colSpan={props.shapeSpan}
            radiusValue="388px"
            roundCorner={props.cornerToRound}
            backgroundColor={props.shapeColor}
            backgroundImg={props.shapeImg}
            height={props.shapeHeight}
          />
        </BackLayout>
      )}
      <FrontLayout minHeight={props.shapeHeight}>{props.children}</FrontLayout>
    </Layout>
  )
}

SectionLayout.defaultProps = {
  imgSpan: 6,
  radiusValue: '388px',
  height: 'auto',
}

export default SectionLayout

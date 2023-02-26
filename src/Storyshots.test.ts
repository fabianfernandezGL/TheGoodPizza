// @ts-nocheck

import initStoryshots from '@storybook/addon-storyshots'
import { styleSheetSerializer } from 'jest-styled-components/serializer'

jest.mock('react-dom', () => {
  const original = jest.requireActual('react-dom')
  return {
    ...original,
    createPortal: (node: any) => node,
  }
})

initStoryshots({
  snapshotSerializers: [styleSheetSerializer],
})

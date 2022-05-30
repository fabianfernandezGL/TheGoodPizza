import Home from './'
import { render, screen } from '@testing-library/react'

const mock = () => {}

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: (query: any) => {
    return {
      matches: false,
      media: query,
      onchange: null,
      addListener: mock, // deprecated
      removeListener: mock, // deprecated
      addEventListener: mock,
      removeEventListener: mock,
      dispatchEvent: mock,
    }
  },
})

test('renders component', () => {
  render(<Home />)
  expect(screen.getByTestId('title').textContent).toContain('WELCOME!')
})

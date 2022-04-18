import Home from './'
import { render, screen } from '@testing-library/react'

test('renders component', () => {
  render(<Home />)
  expect(screen.getByTestId('title').textContent).toContain('Home')
})

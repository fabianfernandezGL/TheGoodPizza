import Home from './'
import { render, screen } from '@testing-library/react'

const title = 'WELCOME!'
const subtitle = 'Make yourself at home'

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

test('renders greatings text', () => {
  render(<Home isAuthenticated />)
  expect(screen.getByTestId('title').textContent).toContain(title)
})

test('renders subtitle text', () => {
  render(<Home isAuthenticated />)
  expect(screen.getByTestId('subtitle').textContent).toContain(subtitle)
})

test('renders login button', () => {
  render(<Home isAuthenticated />)
  expect(screen.getByTestId('login-btn')).toBeDefined()
})

test('renders sign up button', () => {
  render(<Home isAuthenticated />)
  expect(screen.getByTestId('sign-up-btn')).toBeDefined()
})

import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders menu link', () => {
  render(<App />)
  const msgElement = screen.getByText(/Menu/i)
  expect(msgElement).toBeInTheDocument()
})

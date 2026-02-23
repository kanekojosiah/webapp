
import { render, screen } from '@testing-library/react'
import LoginForm from '../components/LoginForm'

test('renders login button', () => {
  render(<LoginForm />)
  expect(screen.getByText('Login')).toBeInTheDocument()
})

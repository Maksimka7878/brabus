import { render, screen } from '@testing-library/react'
import Portfolio from '../components/Portfolio'
import Testimonials from '../components/Testimonials'
import '@testing-library/jest-dom'

// Mock IntersectionObserver
beforeAll(() => {
  const observe = jest.fn();
  const unobserve = jest.fn();

  // @ts-ignore
  window.IntersectionObserver = jest.fn(() => ({
    observe,
    unobserve,
    disconnect: jest.fn(),
  }));
});

describe('Portfolio Component', () => {
  it('renders without crashing', () => {
    render(<Portfolio />)
    expect(screen.getByText('Фотоотчеты')).toBeInTheDocument()
  })
})

describe('Testimonials Component', () => {
  it('renders without crashing', () => {
    render(<Testimonials />)
    expect(screen.getByText('Родители рекомендуют')).toBeInTheDocument()
  })
})

import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Login from './Components/Login';

describe('Login component', () => {
  test('renders login form correctly', () => {
    render(<Login />);
    
    expect(screen.getByText('Login Form')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
    expect(screen.getByText('Not registered? Sign up here')).toBeInTheDocument();
  });

  test('handles login form submission', async () => {
    render(<Login />);

    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const loginButton = screen.getByRole('button', { name: 'Login' });

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    act(() => {
      fireEvent.click(loginButton);
    });

    // Adjust the assertions based on your actual API response
    await screen.findByText('Login successful User John Doe');
    // Add more assertions if needed
  });
});

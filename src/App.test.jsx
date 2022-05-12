import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('App', () => {
  it('should navigate between list and view', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);

    const pokemon = await screen.findByText('Name: butterfree');
    expect(pokemon).toBeInTheDocument();

    const name = await screen.findByText('Name: pikachu');
    expect(name).toBeInTheDocument();
    // const image = screen.getByAltText('image');
    // expect(image).toHaveAttribute();
  });
});

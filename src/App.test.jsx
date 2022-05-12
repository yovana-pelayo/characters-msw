import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import userEvent from '@testing-library/user-event';

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

    const pikachuImage = screen.queryByAltText('pikachu');
    expect(pikachuImage).toBeInTheDocument();

    userEvent.selectOptions(
      await screen.findByRole('combobox'),
      await screen.findByRole('option', { name: 'Flying' })
    );
    expect(screen.getByRole('option', { name: 'Flying' }).selected).toBe(true);
  });
});

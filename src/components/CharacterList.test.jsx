import { render, screen } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('should display pokemon image and name', async () => {
    render(<CharacterList />);

    const image = await screen.findByAltText('butterfree');
    expect(image).toBeInTheDocument();

    const name = await screen.findByText('Name: butterfree');
    expect(name).toBeInTheDocument();
  });
});

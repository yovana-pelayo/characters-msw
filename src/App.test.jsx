import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { setupServer } from 'msw/node';
import { rest } from 'msw';

const pokemonApiData = {
  data: [
    {
      _id: '5ff4fb7cd89993a89cc6544f',
      pokemon: 'butterfree',
      type_2: 'flying',
      url_image:
        'http://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    },
  ],
};
const server = setupServer(
  rest.get(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex',
    (req, res, ctx) => res(ctx.json(pokemonApiData))
  ),
  rest.get(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex:id',
    (req, res, ctx) => res(ctx.json(pokemonApiData))
  )
);

describe('App', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());
  it('should navigate between list and view', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    screen.getByText(/loading/i);

    // const pokemon = await screen.findByText('butterfree');
    // expect(pokemon).toBeInTheDocument();

    // const image = screen.getByAltText('image');
    // expect(image).toHaveAttribute();
  });
});

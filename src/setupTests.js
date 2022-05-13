import fetch from 'cross-fetch';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { pokemonApiData } from './data';
global.fetch = fetch;

const server = setupServer(
  rest.get(
    'https://pokedex-alchemy.herokuapp.com/api/pokedex',
    (req, res, ctx) => res(ctx.json(pokemonApiData))
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

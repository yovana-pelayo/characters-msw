import { Route, Switch } from 'react-router-dom';
import CharacterList from './components/CharacterList';

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/">
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}

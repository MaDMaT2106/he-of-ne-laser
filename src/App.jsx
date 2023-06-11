import { LanguageProvider } from './providers/LanguageContext';
import { DistanceProvider } from './providers/DistanceContext';
import { TurnedProvider } from './providers/TurnedContext';

import Header from './components/Header/Header';
import LanguageButton from './components/LanguageButton/LanguageButton';
import MainPart from './components/MainPart/MainPart';

import './App.css';

function App() {
  return (
    <LanguageProvider>
      <TurnedProvider>
        <DistanceProvider>
          <div className="App">
            <div className="container">
              <Header />
              <LanguageButton />
              <MainPart />
            </div>
          </div>
        </DistanceProvider>
      </TurnedProvider>
    </LanguageProvider>
  );
}

export default App;

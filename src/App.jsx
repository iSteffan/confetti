import { Header, Hero, AboutUs } from './sections';
import { Main } from './App.styled';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <AboutUs />
      </Main>
    </>
  );
}

export default App;

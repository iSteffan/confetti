import { Header, Hero, AboutUs, Reviews } from './sections';
import { Main } from './App.styled';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <AboutUs />
        <Reviews />
      </Main>
    </>
  );
}

export default App;

import { Header, Hero, AboutUs, Reviews, Contacts } from './sections';
import { Main } from './App.styled';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <AboutUs />
        <Reviews />
        <Contacts />
      </Main>
    </>
  );
}

export default App;

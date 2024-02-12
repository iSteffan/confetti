import Drawer from '@mui/material/Drawer';
import { useState } from 'react';
import { Header, Hero, AboutUs, Reviews, Contacts, Footer } from './sections';
import { BurgerMenu } from './components/BurgerMenu/BurgerMenu';

function App() {
  // ---------------------------------------------------------------------------------MUI-DRAWER
  const [state, setState] = useState({
    openBurgerMenu: false,
  });

  const toggleDrawer = (anchor, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  // ---------------------------------------------------------------------------------

  return (
    <>
      <Header toggleMenu={toggleDrawer('openBurgerMenu', true)} />
      <main>
        <Hero />
        <AboutUs />
        <Reviews />
        <Contacts />
      </main>
      <Footer />

      <Drawer
        className="mui-fixed"
        anchor="right"
        open={state['openBurgerMenu']}
        onClose={toggleDrawer('openBurgerMenu', false)}
        hideBackdrop={true}
        sx={{
          position: 'fixed',
          '& .MuiDrawer-paper': {
            position: 'relative',
          },
        }}
      >
        <BurgerMenu anchor="openBurgerMenu" onClose={toggleDrawer('openBurgerMenu', false)} />
      </Drawer>
    </>
  );
}

export default App;

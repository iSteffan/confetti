import { Header, Hero, AboutUs, Reviews, Contacts, Footer } from './sections';
import { ModalWindow } from './components/ModalWindow/ModalWindow';

import { useState, useEffect } from 'react';

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleClick = () => {
    setIsModalVisible(!isModalVisible);
  };

  useEffect(() => {
    if (isModalVisible) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalVisible]);

  return (
    <>
      <Header toggleMenu={handleClick} />
      <main>
        <Hero />
        <AboutUs />
        <Reviews />
        <Contacts />
      </main>
      <Footer />
      {isModalVisible && <ModalWindow toggleMenu={handleClick} />}
    </>
  );
}

export default App;

import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import Section from './components/Section';
import data from './data';
import SideMenu from './components/SideMenu';
import MenuForm from './components/MenuForm';

function App() {
  return (
    <>
      <Section
        variant='blue'
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant='beige'
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant='blue'
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant='white'
        title={data[0].title}
        description={data[0].description}
      />
      <Section
        variant='black'
        title={data[0].title}
        description={data[0].description}
      />
      <SideMenu>
        <MenuForm />
      </SideMenu>
       
      <GlobalStyles />
    </>
  );
}

export default App;

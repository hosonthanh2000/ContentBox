import React  from 'react'
import MyApp from './components/MyApp';
import ThemeContextProvider from './contexts/ThemeContextProvider';

function App() {
      return (
       <ThemeContextProvider>
          <MyApp/>
       </ThemeContextProvider> 
      )
}

export default App;

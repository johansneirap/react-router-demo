import { useState } from 'react';
import './App.css';
import { AppRouter } from './components/AppRouter';
import { HomePage } from './components/HomePage';
import { UserContext } from './components/UserContext';

function App() {

  const [user, setUser] = useState({});
  return (
    <UserContext.Provider value={{user,setUser}}>
      <div className="App">
        <AppRouter />
      </div>
    </UserContext.Provider>
  );
}

export default App;

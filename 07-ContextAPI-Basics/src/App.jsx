import './App.css'
import Login from './components/Login';
import Profile from './components/Profile';
import UserContextProvider from './UI/UserContextProvider';

function App() {
  return (
    <UserContextProvider>
      <h1>React Video for Context API</h1>
      <Login />
      <Profile/>
    </UserContextProvider>
  )
}

export default App;

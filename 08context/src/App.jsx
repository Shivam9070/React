
import './App.css'
import Login from './context/components/Login'
import Profile from './context/components/Profile'
import UserContextProvider from './context/userContextProvider'

function App() {

  return (
    <UserContextProvider>
     <h1>React with chai</h1>
     <Login />
     <Profile />
    </UserContextProvider>
  )
}

export default App

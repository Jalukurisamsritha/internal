// lab6//
// import './App.css';
// import Lab6 from './Lab6';
// function App() {
//  return (
//  <div className="App">
//  <header className="App-header">
//  <Lab6/>
//  </header>
//  </div>
//  );}
// export default App;

//lab7//
// import React from 'react';
// import EmailForm from './EmailForm';
// const App = () => {
// return (
// <div>
// <EmailForm/>
// </div>
// );
// };
// export default App;

//lab8//
// import React, { useContext } from 'react';
// import AuthProvider, { AuthContext } from './AuthContext';
// import Login from './Login';
// import Home from './Home';
// function App() {
//  const { user } = useContext(AuthContext);
//  return (
//  <div className="App">
//  {user ? <Home /> : <Login />}
//  </div>
//  );
// }
// const AppWrapper = () => (
//  <AuthProvider>
//  <App />
//  </AuthProvider>
// );
// export default AppWrapper;

//lab9//
// import React from 'react';
// import Home from './Home';
// import Header from'./Header';
// import Footer from './Footer';
// const App = () => {
// return (
// <div>
// <Header/>
// <Home/>
// <Footer/>
// </div>
// );
// };
// export default App;

//lab10
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Header from './Header';
function App() {
return (
  <div className='container'>
    <Router>
      <Header/>
      <Routes>
        <Route path = '/' element = {<Home/>}>Home </Route>
        <Route path = '/About' element = {<About/>}>About </Route>
      </Routes>
    </Router>
  </div>
);
}
export default App;
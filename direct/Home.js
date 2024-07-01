//lab 8//
// import React, { useContext } from 'react';
// import { AuthContext } from './AuthContext';
// const Home = () => {
//  const { user, logout } = useContext(AuthContext);
//  return (
//  <div>
//  <h2>Welcome, {user.username}!</h2>
//  <button onClick={logout}>Logout</button>
//  </div>
//  );
// };
// export default Home;

//lab9//

import React from 'react';
import HomeChild1 from './HomeChild2';
import HomeChild2 from './HomeChild1';
const Home = () => {
 return (
 <div>
 <h2>Home Page</h2>
 <HomeChild1 />
 <HomeChild2 />
 </div>
 );
};
export default Home;
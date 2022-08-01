import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import UserList from './compenents/UserList';



function App() {
  const [user, setUser] = useState()
  // console.log(user)
  useEffect(() => {
    const getUser = async () =>{
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUser(res.data)
        console.log(res);
      } catch (error){
        console.log(error)
      };
    }
    getUser()
   
 
  },[])
  return (
    <div className="App">
      <UserList users={user}/>
    </div>
  );
}

export default App;
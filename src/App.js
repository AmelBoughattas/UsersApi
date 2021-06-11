import React, {useEffect,useState} from 'react'
import './App.css';
import { BrowserRouter, Route, Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

import UserList from './UsersList/UserList';
import UserDetails from './UserDetails/UserDetails';


function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setUsers(res.data);
        setLoading(false);
      } catch (error) {
        console.log("err");
      }
    };
    fetchData();
  }, []);


  return (
    <BrowserRouter>
      <div >
        <Route exact={true} path="/" render={() => (<UserList users={users} />)} />
      </div>
      <Route path="/UserDetails/:user" render={(props) => <UserDetails {...props} users={users} />} />
    </BrowserRouter>

  );
}

export default App;

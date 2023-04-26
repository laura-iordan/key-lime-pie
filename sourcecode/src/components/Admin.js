import React, {useState, useEffect} from 'react';
import axios from 'axios';

/*function Admin(){
    const [credential, setCredential] = useState({});
    const url = "http://localhost/key-lime-pie/php/login.php/";
    React.useEffect(() => {
        axios.get(url).then(response=>alert(response.data))
        .catch(error=>alert(error));
      }, []);
    return <h1>Admin</h1>
}*/


function Admin() {
  const [credential, setCredential] = useState({"email": ""});
  const url = "http://localhost/key-lime-pie/php/login.php";
  
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, {
          params: {
            username: 'laura',
            password: '1234'
          }
        });
        setCredential(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
  <div>
    <h1>Admin</h1>
    <p>{credential.email}</p>
  </div>);
  
}


export default Admin;
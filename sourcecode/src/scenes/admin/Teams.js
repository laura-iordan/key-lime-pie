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


function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost/key-lime-pie/php/get_teams.php')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#990099'}}>
            <th style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>Team ID</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Team Name</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Manager Name</th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.email} style={{backgroundColor: 'white'}}>
              <td style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>{team.id_teams}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{team.team_name}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{team.manager_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Teams;

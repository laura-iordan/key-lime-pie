import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ShowSelectedMember({ emp }) {
  // aici o sa afisez detalii despre angajatul selectat: activitatea in proiectele in care e implicat
  return (
    <div>
      <h2 style={{textAlign:'center'}}>{emp.employee_name}</h2>
      <p style={{textAlign:'center'}}>ID: {emp.id_emp}</p>
      <h4 style={{textAlign:'center'}}> To do: se va afisa activitatea angajatului selectat in proiectele in care e implicat </h4>
    </div>
  );
}

function ManagerTeam() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://localhost/key-lime-pie/php/get_manager_team.php')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error(error));
  }, []);

   const[member, setMember] = useState('');
   function handleSelectedMember(sel) {
       console.log(sel.employee_name);
       console.log(sel.id_emp);
       setMember(sel);
  }

  return (
    <div>
    <h2 style={{textAlign: 'center', color:'#990099'}}> Your Team's Members </h2>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#990099'}}>
            <th style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>Team ID</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Team Member</th>
            <th style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}> Member ID </th>
          </tr>
        </thead>
        <tbody>
          {teams.map(team => (
            <tr key={team.id_emp} style={{backgroundColor: 'white'}}  onClick={() => handleSelectedMember(team)}>
              <td style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>{team.id_teams}</td>
              <td style={{border: '1px solid #ddd', padding: '8px',textAlign:'center'}}>{team.employee_name}</td>
              <td style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}> {team.id_emp} </td>
            </tr>
          ))}
          
        </tbody>
      </table>

      {member && <ShowSelectedMember emp={member} />}
    </div>
  );
}

export default ManagerTeam;

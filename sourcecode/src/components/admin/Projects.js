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


function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost/key-lime-pie/php/get_projects.php')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#990099'}}>
            <th style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>Project ID</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Project Name</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Budget</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Hours</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Manager</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Starting Date</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Ending Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id_project} style={{backgroundColor: 'white'}}>
              <td style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>{project.id_project}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.project_name}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.budget}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.hours}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.manager_name}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.starting_date.date}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.ending_date.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projects;

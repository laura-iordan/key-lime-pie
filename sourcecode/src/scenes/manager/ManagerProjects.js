import React, {useState, useEffect} from 'react';

function ShowSelectedProject( {pr} ) {
    const today = new Date();
    const end = new Date(pr.ending_date.date);
    const time = Math.round((end - today) / (1000 * 60 * 60 * 24)); // din milisecunde in zile
    return (
      <div>
        <h3 style={{textAlign: 'center'}}> Project <i> {pr.project_name} </i> status : smth % done </h3>
        <h3 style={{textAlign: 'center'}}> Time left: {time} days</h3>
      </div>
    )
}


function ManagerProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost/key-lime-pie/php/get_manager_projects.php')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error(error));
  }, []);


  const[proj, setProj] = useState('');
  function handleSelectedProject(sel) {
      console.log(sel.project_name);
      console.log(sel.id_project);
      setProj(sel);
 }

  return (
    <div>
      <h2 style={{textAlign: 'center', color:'#990099'}}> Your Current Projects </h2>
      <table style={{borderCollapse: 'collapse', width: '100%'}}>
        <thead>
          <tr style={{backgroundColor: '#990099'}}>
            <th style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>Project ID </th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Project Name</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Budget</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Hours</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Starting Date</th>
            <th style={{border: '1px solid #ddd', padding: '8px'}}>Ending Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map(project => (
            <tr key={project.id_project} style={{backgroundColor: 'white'}}  onClick={() => handleSelectedProject(project)}>
              <td style={{display: 'none', border: '1px solid #ddd', padding: '8px'}}>{project.id_project}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}> {project.project_name} </td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.budget}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.hours}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.starting_date.date}</td>
              <td style={{border: '1px solid #ddd', padding: '8px'}}>{project.ending_date.date}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {proj && <ShowSelectedProject pr = {proj} />}
    </div>
  );
}

export default ManagerProjects;

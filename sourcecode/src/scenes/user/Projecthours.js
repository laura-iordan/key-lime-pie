import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projecthours() {
  const [id_project, setIdProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");

  console.log(date);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost/key-lime-pie/php/get_projects.php');
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  const postHours = async (projectId, date, hours) => {
    let fData = new FormData();
    fData.append('id_project', id_project);
    fData.append('date', date);
    fData.append('hours', hours);
    fData.append('id_user', 5);
    const data = {
      id_project: projectId,
      date: date,
      hours: hours
    };
  
    console.log(data); 
  
    try {
      const response = await axios.post('http://localhost/key-lime-pie/php/post_hours.php', fData);
      console.log(response.data);
      if (response.data === "Orele de lucru au fost adăugate cu succes.") {
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const handleHourChange = async (projectId) => {
    try {
      const success = await postHours(id_project, date, hours);
      if (success) {
        console.log("Orele de lucru au fost adăugate cu succes.");
        setDate("");
        setHours("");
      } else {
        console.error("Adăugarea orelor de lucru a eșuat.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const renderProjects = () => {
    return projects.map(project => {
      return (
        <tr key={project.id_project}>
          <td>{project.project_name}</td>
          <td>
            <input type="number" name="id_project" value={project.id_project} onChange={(event) => setIdProject(event.target.value)} />
          </td>
          <td>
            <input type="date" name="date" value={date} onChange={(event) => setDate(event.target.value)} />
          </td>
          <td>
            <input type="number" name="hours" min="0" value={hours} onChange={(event) => setHours(event.target.value)} />
          </td>
          <td>
            <button onClick={() => handleHourChange(project.id)}>Send</button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>ID</th>
            <th>Date</th>
            <th>Hours</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {renderProjects()}
        </tbody>
      </table>
    </div>
  );
}

export default Projecthours;

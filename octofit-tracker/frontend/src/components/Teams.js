import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('https://supreme-acorn-g479rvvw7p9q2w6v6-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h1" className="mb-4">Teams</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Members</th>
            </tr>
          </thead>
          <tbody>
            {teams.map(team => (
              <tr key={team._id}>
                <td>{team.name}</td>
                <td>{Array.isArray(team.members) ? team.members.join(', ') : ''}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Teams;

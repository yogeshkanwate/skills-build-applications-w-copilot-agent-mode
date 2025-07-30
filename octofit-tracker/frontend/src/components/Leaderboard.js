import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    fetch('https://supreme-acorn-g479rvvw7p9q2w6v6-8000.app.github.dev/api/leaderboard/')
      .then(response => response.json())
      .then(data => setLeaderboard(data))
      .catch(error => console.error('Error fetching leaderboard:', error));
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h1" className="mb-4">Leaderboard</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {leaderboard.map(entry => (
              <tr key={entry._id}>
                <td>{entry.user}</td>
                <td>{entry.score}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Leaderboard;

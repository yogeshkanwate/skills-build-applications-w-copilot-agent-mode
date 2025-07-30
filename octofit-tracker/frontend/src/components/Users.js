import React, { useEffect, useState } from 'react';
import { Card, Table } from 'react-bootstrap';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://supreme-acorn-g479rvvw7p9q2w6v6-8000.app.github.dev/api/users/')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h1" className="mb-4">Users</Card.Title>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Users;

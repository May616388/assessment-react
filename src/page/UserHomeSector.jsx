import React from 'react'

const UserHomeSector = ({users}) => {
  return (
    <div>
        <h1>
            Generation Thailand<br />
            React - Assessment
        </h1>
        <button>User Home Sector</button>
        <button>Admin Home Sector</button>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Last Name</th>
                    <th>Position</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.lastName}</td>
                        <td>{user.position}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  );
};
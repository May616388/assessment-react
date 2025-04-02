import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminHomeSector = () => {
    const [users, setUsers] = useState([]);
    const [newUserName, setNewUserName] = useState("");

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
            setUsers(response.data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const addUser = async (e) => {
        e.preventDefault(); 
        try {
            await axios.post("https://jsd5-mock-backend.onrender.com/members", { name: newUserName });
            fetchUsers();
            setNewUserName("");
        } catch (error) {
            console.error('Error adding user:', error);
        }
    };

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://jsd5-mock-backend.onrender.com/members/${id}`);
            fetchUsers();
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <div>
            <h1>
                Generation Thailand<br />
                Home - Admin Sector
            </h1>
            <button>User Home Sector</button>
            <button>Admin Home Sector</button>

            <div>
                <form onSubmit={addUser}>
                    <input type="text" placeholder="name" value={newUserName} onChange={(e) => setNewUserName(e.target.value)} />
                    <button type='submit'>Add User</button>
                </form>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Last Name</th>
                        <th>Position</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.lastName}</td>
                            <td>{user.position}</td>
                            <td><button onClick={() => deleteUser(user.id)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminHomeSector;
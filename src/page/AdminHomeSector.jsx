import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router';

const AdminHomeSector = () => {
    const [users, setUsers] = useState([]);
    const [newUser, setNewUser] = useState({ name: "", lastname: "", position: "" });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.get("https://jsd5-mock-backend.onrender.com/members");
            console.log(response.data)
            setUsers(response.data);
        } catch (error) {
            setError('Failed to fetch users. Please try again.');
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

const createUser = async () => {
    if (!newUser.name || !newUser.lastname || !newUser.position) {
        return;
    }

    setError("");

    try {
        const response = await axios.post(
            "https://jsd5-mock-backend.onrender.com/members",
            newUser,
            {
                headers: {
                    "Content-Type": "application/json",
                    "accept" : "application/json"
                },
            }
        );
        setUsers([...users, response.data]);
        setNewUser({ name: "", lastname: "", position: "" });
        fetchUsers();
    } catch (error) {
        setError("Failed to add user. Please try again.");
        console.error("Error adding user:", error);
    } finally {
        setLoading(false);
    }
};
const handleSave = (e) => {
    e.preventDefault();
    createUser();
};

      const deleteUser = async (id) => {
        setLoading(true);
        setError(null);
        try {
            await axios.delete(`https://jsd5-mock-backend.onrender.com/member/${id}`);
            fetchUsers();
        } catch (error) {
            setError('Failed to delete user. Please try again.');
            console.error('Error deleting user:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className='text-5xl font-bold flex item-center justify-center mt-12 mb-12'>
                Generation Thailand<br />
                Home - Admin Sector
            </h1>
            <div className='flex items-center justify-center gap-8 mb-12'>
                <Link to="/User">
                    <button className='px-6 py-4 bg-pink-300 text-black font-medium text-lg rounded-md hover:bg-pink-400 transition p-4'>User Home Sector</button>
                </Link>
                <Link to="/admin">
                    <button className='px-6 py-4 bg-pink-300 text-black font-medium text-lg rounded-md hover:bg-pink-400 transition p-4'>Admin Home Sector</button>
                </Link>
            </div>
            <div className='flex justify-center items-center gap-10'>
                <input
                    type="text"
                    name='name'
                    placeholder="Name"
                    value={newUser.name}
                    onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                    className='bg-slate-50 border border-slate-400 rounded-md p-2'
                />
                <input
                    type="text"
                    name='lastname'
                    placeholder="Last Name"
                    value={newUser.lastname}
                    onChange={(e) => setNewUser({ ...newUser, lastname: e.target.value })}
                    className='bg-slate-50 border border-slate-400 rounded-md p-2'
                />
                <input
                    type="text"
                    name='position'
                    placeholder="Position"
                    value={newUser.position}
                    onChange={(e) => setNewUser({ ...newUser, position: e.target.value })}
                    className='bg-slate-50 border border-slate-400 rounded-md p-2'
                />
                <button
                    type='submit'
                    disabled={loading}
                    onClick={handleSave}
                    className='bg-sky-500 p-2 rounded-md text-white'
                >
                    Save
                </button>
                {loading && <p>Loading...</p>}
                {error && <p style={{ color: 'red' }}>{error}</p>}
            </div>
            <div className='flex justify-center items-center mt-12'>
                <div className='w-full max-w-4xl'>
                    <table className='w-full border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200'>
                                <th className='border border-gray-300 px-4 py-2 text-left'>Name</th>
                                <th className='border border-gray-300 px-4 py-2 text-left'>Last Name</th>
                                <th className='border border-gray-300 px-4 py-2 text-left'>Position</th>
                                <th className='border border-gray-300 px-4 py-2 text-left'>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) => (
                                <tr key={user.id} className='border border-gray-300 hover:bg-gray-100'>
                                    <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{user.lastname}</td>
                                    <td className='border border-gray-300 px-4 py-2'>{user.position}</td>
                                    <td className='border border-gray-300 px-4 py-2'><button onClick={() => deleteUser(user.id)} disabled={loading}>Delete</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AdminHomeSector;
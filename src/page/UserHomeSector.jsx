import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UserHomeSector = () => {
    const [users, setUsers] = useState([]);
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
            setUsers(response.data);
        } catch (error) {
            setError('Failed to fetch users. Please try again.');
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h1 className='text-5xl font-bold flex item-center justify-center mt-12 mb-12'>
                Generation Thailand<br />
                React - Assessment
            </h1>
            <div className='flex items-center justify-center gap-8 mb-12'>
                <Link to="/User">
                    <button className='px-6 py-4 bg-pink-300 text-black font-medium text-lg rounded-md hover:bg-pink-400 transition p-4'>
                        User Home Sector
                    </button>
                </Link>
                <Link to="/admin">
                    <button className='px-6 py-4 bg-pink-300 text-black font-medium text-lg rounded-md hover:bg-pink-400 transition p-4'>
                        Admin Home Sector
                    </button>
                </Link>
            </div>

            {loading && <p>Loading...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            <div className='flex justify-center items-center mt-12'>
                <div className='w-full max-w-4xl'>
                    <table className='w-full border border-gray-300'>
                        <thead>
                            <tr className='bg-gray-200'>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Name</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Last Name</th>
                            <th className='border border-gray-300 px-4 py-2 text-left'>Position</th>
                         </tr>
                        </thead>
                            <tbody>
                            {users.map((user) => (
                            <tr key={user.id} className='border border-gray-300 hover:bg-gray-100'>
                            <td className='border border-gray-300 px-4 py-2'>{user.name}</td>
                            <td className='border border-gray-300 px-4 py-2'>{user.lastname}</td>
                            <td className='border border-gray-300 px-4 py-2'>{user.position}</td>
                            </tr>
                         ))}
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default UserHomeSector;
import { useState, useEffect } from 'react';
import axios from 'axios';
import type { ApiUser } from '../Types/ApiUser';

interface UseUsersOptions {
  autoFetch?: boolean;
}

export const useUsers = (options: UseUsersOptions = { autoFetch: true }) => {
  const [users, setUsers] = useState<ApiUser[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await axios.get<ApiUser[]>('https://jsonplaceholder.typicode.com/users');
      setUsers(response.data);
    } catch (err) {
      setError('Error al cargar los usuarios. Por favor, intenta nuevamente.');
      console.error('Error fetching users:', err);
    } finally {
      setLoading(false);
    }
  };

  const getUserById = (id: number): ApiUser | undefined => {
    return users.find(user => user.id === id);
  };

  const searchUsers = (query: string): ApiUser[] => {
    if (!query.trim()) return users;
    
    const lowercaseQuery = query.toLowerCase();
    return users.filter(user =>
      user.name.toLowerCase().includes(lowercaseQuery) ||
      user.username.toLowerCase().includes(lowercaseQuery) ||
      user.email.toLowerCase().includes(lowercaseQuery) ||
      user.company.name.toLowerCase().includes(lowercaseQuery)
    );
  };

  const refreshUsers = () => {
    fetchUsers();
  };

  useEffect(() => {
    if (options.autoFetch) {
      fetchUsers();
    }
  }, [options.autoFetch]);

  return {
    users,
    loading,
    error,
    fetchUsers,
    refreshUsers,
    getUserById,
    searchUsers,
    totalUsers: users.length
  };
};

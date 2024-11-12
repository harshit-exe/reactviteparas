import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
// import { Dropdown, DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const dummyUsers = [
  { id: '1', name: 'John Doe', email: 'johndoe@example.com', phone: '1234567890' },
  { id: '2', name: 'Jane Smith', email: 'janesmith@example.com', phone: '0987654321' },
  { id: '3', name: 'Bob Johnson', email: 'bobjohnson@example.com', phone: '5555555555' },
  { id: '4', name: 'Alice Williams', email: 'alicewilliams@example.com', phone: '9999999999' },
  { id: '5', name: 'Tom Brown', email: 'tombrown@example.com', phone: '1111111111' },
];

const ViewUser = () => {
  const [users, setUsers] = useState(dummyUsers);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field) => {
    setSortBy(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    // Fetch user data from an API (optional)
  }, []);

  const sortedUsers = [...users].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Users</h2>
        <Link to="/view-user/create">
          <Button variant="primary">Create New User</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Users</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedUsers.map((user) => (
                <TableRow key={user.id}>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.phone}</TableCell>
                  <TableCell className="text-right">
                    <Link to={`/view-user/${user.id}/edit`}>
                      <Button variant="ghost" size="sm">
                        View Details
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter className="flex justify-end">
          <Button variant="secondary" size="sm">
            Show 10 per page
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default ViewUser;
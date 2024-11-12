import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger, DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';

const dummyBranches = [
  { id: 'RBI/002', name: 'Thane Branch', city: 'Thane', state: 'Maharashtra' },
  { id: 'RBL2003', name: 'Mumbai Central', city: 'Mumbai', state: 'Maharashtra' },
  { id: '123', name: 'Pune Branch', city: 'Pune', state: 'Maharashtra' },
  { id: '456', name: 'Nagpur Branch', city: 'Nagpur', state: 'Maharashtra' },
  { id: '789', name: 'Nashik Branch', city: 'Nashik', state: 'Maharashtra' },
];

const ViewBranch = () => {
  const [branches, setBranches] = useState(dummyBranches);
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');

  const handleSort = (field) => {
    setSortBy(field);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  useEffect(() => {
    // Fetch branch data from an API (optional)
  }, []);

  const sortedBranches = [...branches].sort((a, b) => {
    if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
    if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div className="container mx-auto p-6 space-y-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Branches</h2>
        <Link to="/branch/create">
          <Button variant="primary">Create New Branch</Button>
        </Link>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>All Branches</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Branch ID</TableHead>
                <TableHead>Branch Name</TableHead>
                <TableHead>City</TableHead>
                <TableHead>State</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {sortedBranches.map((branch) => (
                <TableRow key={branch.id}>
                  <TableCell className="font-medium">{branch.id}</TableCell>
                  <TableCell>{branch.name}</TableCell>
                  <TableCell>{branch.city}</TableCell>
                  <TableCell>{branch.state}</TableCell>
                  <TableCell className="text-right">
                    <Link to={`/branch/${branch.id}/edit`}>
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

export default ViewBranch;
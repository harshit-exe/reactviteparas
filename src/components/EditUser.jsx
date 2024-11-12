import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { useForm } from '@/hooks/useForm';

const dummyUser = {
  id: '1',
  name: 'John Doe',
  email: 'johndoe@example.com',
  phone: '1234567890',
};

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(dummyUser);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { values, handleChange, handleSubmit, errors } = useForm(
    {
      name: user.name,
      email: user.email,
      phone: user.phone,
    },
    () => saveUser()
  );

  useEffect(() => {
    // Fetch user data from an API (optional)
  }, [id]);

  const saveUser = () => {
    // Save the updated user information
    console.log('Saved user:', user);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate('/view-user');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/view-users');
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Edit User</h2>
      <Card>
        <CardHeader>
          <CardTitle>User Details</CardTitle>
        </CardHeader>
        <CardContent>
          {error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          {success && (
            <Alert variant="positive">
              <AlertTitle>Success</AlertTitle>
              <AlertDescription>User updated successfully.</AlertDescription>
            </Alert>
          )}
          <div>
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
              ID
            </label>
            <Input id="id" name="id" value={user.id} onChange={handleChange} disabled />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Name
            </label>
            <Input id="name" name="name" value={values.name} onChange={handleChange} error={errors.name} />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <Input id="email" name="email" value={values.email} onChange={handleChange} error={errors.email} />
          </div>
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone
            </label>
            <Input id="phone" name="phone" value={values.phone} onChange={handleChange} error={errors.phone} />
          </div>
        </CardContent>
        <CardFooter className="flex justify-end space-x-4">
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Save
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditUser;
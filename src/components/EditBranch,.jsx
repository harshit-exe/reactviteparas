import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Input} from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';


import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useForm } from '@/hooks/useForm';

const dummyBranch = {
  id: 'RBI/002',
  name: 'Thane Branch',
  city: 'Thane',
  state: 'Maharashtra',
};

const EditBranch = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [branch, setBranch] = useState(dummyBranch);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const { values, handleChange, handleSubmit, errors } = useForm(
    {
      name: branch.name,
      city: branch.city,
      state: branch.state,
    },
    () => saveBranch()
  );

  useEffect(() => {
    // Fetch branch data from an API (optional)
  }, [id]);

  const saveBranch = () => {
    // Save the updated branch information
    console.log('Saved branch:', branch);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      navigate('/view-branch');
    }, 2000);
  };

  const handleCancel = () => {
    navigate('/branch');
  };

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800">Edit Branch</h2>
      <Card>
        <CardHeader>
          <CardTitle>Branch Details</CardTitle>
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
              <AlertDescription>Branch updated successfully.</AlertDescription>
            </Alert>
          )}
          <div>
            <label htmlFor="id" className="block text-gray-700 font-medium mb-2">
              Branch ID
            </label>
            <Input id="id" name="id" value={branch.id} onChange={handleChange} disabled />
          </div>
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Branch Name
            </label>
            <Input id="name" name="name" value={values.name} onChange={handleChange} error={errors.name} />
          </div>
          <div>
            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">
              City
            </label>
            <Input id="city" name="city" value={values.city} onChange={handleChange} error={errors.city} />
          </div>
          <div>
            <label htmlFor="state" className="block text-gray-700 font-medium mb-2">
              State
            </label>
            <Input id="state" name="state" value={values.state} onChange={handleChange} error={errors.state} />
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

export default EditBranch;
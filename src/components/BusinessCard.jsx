import React, { useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Building2, Briefcase, MapPin, Phone, Mail, FileText, Eye, Save, User, Users, Building, MapPinned } from 'lucide-react'

export default function BusinessCardForm() {
  const [formData, setFormData] = useState({
    branchCode: '',
    department: '',
    costCenter: '',
    branchName: '',
    cardType: '',
    firstName: '',
    lastName: '',
    designation1: '',
    designation2: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    state: '',
    pincode: '',
    mobile1: '',
    mobile2: '',
    email: '',
    orderingQty: '',
    remarks: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSelectChange = (name, value) => {
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSave = () => {
    console.log('Saving Card Data:', formData)
    // Implement save functionality here
  }

  return (
    <Card className="w-full max-w-7xl mx-auto shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-400 py-4">
        <CardTitle className="text-2xl font-bold text-center text-white">Business Card Information</CardTitle>
      </CardHeader>
      <CardContent className="p-4">
        <ScrollArea className="h-[calc(100vh-200px)] pr-4">
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="branchCode" className="text-sm font-medium text-gray-700">Branch Code</Label>
                <Select name="branchCode" onValueChange={(value) => handleSelectChange('branchCode', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Branch Code" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="BC001">BC001</SelectItem>
                    <SelectItem value="BC002">BC002</SelectItem>
                    <SelectItem value="BC003">BC003</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="text-sm font-medium text-gray-700">Department</Label>
                <Select name="department" onValueChange={(value) => handleSelectChange('department', value)}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Department" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sales">Sales</SelectItem>
                    <SelectItem value="marketing">Marketing</SelectItem>
                    <SelectItem value="it">IT</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="costCenter" className="text-sm font-medium text-gray-700">Cost Center</Label>
                <div className="relative">
                  <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="costCenter" name="costCenter" onChange={handleInputChange} className="pl-10" placeholder="Enter Cost Center" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="branchName" className="text-sm font-medium text-gray-700">Branch Name</Label>
                <div className="relative">
                  <Building2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="branchName" name="branchName" onChange={handleInputChange} className="pl-10" placeholder="Enter Branch Name" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardType" className="text-sm font-medium text-gray-700">Card Type</Label>
              <Select name="cardType" onValueChange={(value) => handleSelectChange('cardType', value)}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select Card Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="standard">Standard</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                  <SelectItem value="executive">Executive</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="firstName" name="firstName" onChange={handleInputChange} className="pl-10" placeholder="Enter First Name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="lastName" name="lastName" onChange={handleInputChange} className="pl-10" placeholder="Enter Last Name" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="designation1" className="text-sm font-medium text-gray-700">Designation 1</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="designation1" name="designation1" onChange={handleInputChange} className="pl-10" placeholder="Enter Designation 1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="designation2" className="text-sm font-medium text-gray-700">Designation 2</Label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="designation2" name="designation2" onChange={handleInputChange} className="pl-10" placeholder="Enter Designation 2" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="addressLine1" className="text-sm font-medium text-gray-700">Address Line 1</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input id="addressLine1" name="addressLine1" onChange={handleInputChange} className="pl-10" placeholder="Enter Address Line 1" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="addressLine2" className="text-sm font-medium text-gray-700">Address Line 2</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input id="addressLine2" name="addressLine2" onChange={handleInputChange} className="pl-10" placeholder="Enter Address Line 2" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city" className="text-sm font-medium text-gray-700">City</Label>
                <div className="relative">
                  <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="city" name="city" onChange={handleInputChange} className="pl-10" placeholder="Enter City" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="state" className="text-sm font-medium text-gray-700">State</Label>
                <div className="relative">
                  <MapPinned className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="state" name="state" onChange={handleInputChange} className="pl-10" placeholder="Enter State" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">Pincode</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="pincode" name="pincode" onChange={handleInputChange} className="pl-10" placeholder="Enter Pincode" />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="mobile1" className="text-sm font-medium text-gray-700">Mobile 1</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="mobile1" name="mobile1" onChange={handleInputChange} className="pl-10" placeholder="Enter Mobile 1" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="mobile2" className="text-sm font-medium text-gray-700">Mobile 2</Label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="mobile2" name="mobile2" onChange={handleInputChange} className="pl-10" placeholder="Enter Mobile 2" />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <Input id="email" name="email" type="email" onChange={handleInputChange} className="pl-10" placeholder="Enter Email" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="orderingQty" className="text-sm font-medium text-gray-700">Ordering Quantity</Label>
                <div className="relative">
                  <FileText className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                  <Input id="orderingQty" name="orderingQty" type="number" onChange={handleInputChange} className="pl-10" placeholder="Enter Quantity" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="remarks" className="text-sm font-medium text-gray-700">Remarks</Label>
                <Textarea id="remarks" name="remarks" onChange={handleInputChange} placeholder="Enter any additional remarks" className="h-10" />
              </div>
            </div>
          </form>
        </ScrollArea>
      </CardContent>
      <CardFooter className="flex justify-between bg-gray-50 p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Eye className="w-4 h-4 mr-2" />
              Preview Card
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Business Card Preview</DialogTitle>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Name
                </Label>
                <div className="col-span-3">
                  {formData.firstName} {formData.lastName}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="designation" className="text-right">
                  Designation
                </Label>
                <div className="col-span-3">
                  {formData.designation1}<br />
                  {formData.designation2}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="contact" className="text-right">
                  Contact
                </Label>
                <div className="col-span-3">
                  {formData.mobile1}<br />
                  {formData.email}
                </div>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="address" className="text-right">
                  Address
                </Label>
                <div className="col-span-3">
                  {formData.addressLine1}, {formData.addressLine2}<br />
                  {formData.city}, {formData.state}, {formData.pincode}
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
        <Button onClick={handleSave}>
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
      </CardFooter>
    </Card>
  )
}
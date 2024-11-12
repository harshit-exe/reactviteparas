import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, Eye } from 'lucide-react'

const dummyOrders = [
  { id: 'ORD001', date: '2023-05-15', status: 'Completed', statusDate: '2023-05-18' },
  { id: 'ORD002', date: '2023-05-16', status: 'Processing', statusDate: '2023-05-16' },
  { id: 'ORD003', date: '2023-05-17', status: 'Shipped', statusDate: '2023-05-19' },
  { id: 'ORD004', date: '2023-05-18', status: 'Cancelled', statusDate: '2023-05-20' },
  { id: 'ORD005', date: '2023-05-19', status: 'Pending', statusDate: '2023-05-19' },
]

export default function OrderProduct() {
  const [searchTerm, setSearchTerm] = useState('')
  const [filteredOrders, setFilteredOrders] = useState(dummyOrders)

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = dummyOrders.filter(order => 
      order.id.toLowerCase().includes(term) || 
      order.date.includes(term) ||
      order.status.toLowerCase().includes(term)
    )
    setFilteredOrders(filtered)
  }

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'completed': return 'bg-green-500'
      case 'processing': return 'bg-blue-500'
      case 'shipped': return 'bg-yellow-500'
      case 'cancelled': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Order Management</h2>
      <div className="flex items-center space-x-4 mb-6">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search orders..."
            value={searchTerm}
            onChange={handleSearch}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Status Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredOrders.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{order.id}</TableCell>
                <TableCell>{order.date}</TableCell>
                <TableCell>
                  <Badge className={`${getStatusColor(order.status)} text-white`}>
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell>{order.statusDate}</TableCell>
                <TableCell className="text-right">
                  <Button variant="ghost" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
} 
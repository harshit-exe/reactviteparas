import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, ShoppingCart, Eye } from 'lucide-react'

const dummyProducts = [
  { id: 1, name: 'Product A', MoQ: 10, MaxQ: 100, price: 19.99, link: '#' },
  { id: 2, name: 'Product B', MoQ: 5, MaxQ: 50, price: 29.99, link: '#' },
  { id: 3, name: 'Product C', MoQ: 20, MaxQ: 200, price: 9.99, link: '#' },
  { id: 4, name: 'Product D', MoQ: 15, MaxQ: 150, price: 39.99, link: '#' },
  { id: 5, name: 'Product E', MoQ: 8, MaxQ: 80, price: 24.99, link: '#' },
]

export default function OtherProduct() {
  const [searchTerm, setSearchTerm] = useState('')
  const [orderQuantity, setOrderQuantity] = useState({})
  const [filteredProducts, setFilteredProducts] = useState(dummyProducts)

  const handleNameSearch = (e) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    const filtered = dummyProducts.filter(product => 
      product.name.toLowerCase().includes(term)
    )
    setFilteredProducts(filtered)
  }

  const handleOrderQuantityChange = (id, value) => {
    setOrderQuantity(prev => ({ ...prev, [id]: value }))
  }

  const handleAddToCart = () => {
    const cartItems = Object.entries(orderQuantity).map(([id, quantity]) => ({
      product: dummyProducts.find(p => p.id === parseInt(id)),
      quantity: parseInt(quantity)
    })).filter(item => item.quantity > 0)

    console.log('Added to cart:', cartItems)
  }

  const handleViewDetails = (product) => {
    console.log('Viewing details for:', product)
  }

  return (
    <div className="container mx-auto p-6 space-y-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={handleNameSearch}
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search by order quantity..."
            className="pl-10 pr-4 py-2 w-full"
          />
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>MoQ</TableHead>
              <TableHead>MaxQ</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredProducts.map((product, index) => (
              <TableRow key={product.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.MoQ}</TableCell>
                <TableCell>{product.MaxQ}</TableCell>
                <TableCell>
                  <Input
                    type="number"
                    min={0}
                    max={product.MaxQ}
                    value={orderQuantity[product.id] || ''}
                    onChange={(e) => handleOrderQuantityChange(product.id, e.target.value)}
                    className="w-20"
                  />
                </TableCell>
                <TableCell>
                  <a href={product.link} className="inline-flex items-center text-blue-500 hover:text-blue-700">
                    <Eye className="w-5 h-5 mr-2" />
                    View Details
                  </a>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="flex justify-end mt-6">
        <Button onClick={handleAddToCart}>
          <ShoppingCart className="w-4 h-4 mr-2" />
          Add to Cart
        </Button>   
      </div>
    </div>
  )
}
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Plus, Search, Edit, Trash2 } from 'lucide-react'

const ProductList = () => {
  const [products, setProducts] = useState([
    {
        id: "1",
        image: "https://plus.unsplash.com/premium_photo-1664202219793-89a237c9b612?q=80&w=1926&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Business Card Printing",
        company: "Paras Print",
        price: 299.99,
        minQty: 100,
        maxQty: 1000,
      },
      {
        id: "2",
        image: "https://images.unsplash.com/photo-1628625194933-ac2b3c0109e7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "ID Card Printing",
        company: "Paras Print",
        price: 49.99,
        minQty: 10,
        maxQty: 200,
      },
      {
        id: "3",
        image: "https://plus.unsplash.com/premium_photo-1698362819283-8a321d8cf2ab?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Brochure Printing",
        company: "Paras Print",
        price: 399.99,
        minQty: 50,
        maxQty: 500,
      },
      {
        id: "4",
        image: "https://plus.unsplash.com/premium_photo-1682145818233-6b4db2365ec3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Flyer Printing",
        company: "Paras Print",
        price: 199.99,
        minQty: 100,
        maxQty: 1000,
      }
  ])

  const handleDelete = (id) => {
    setProducts(products.filter(product => product.id !== id))
  }

  return (
    <div className="container mx-auto p-4 md:p-8">
      <div className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0">Product Management</h1>
        <Button asChild className="self-start md:self-auto">
          <Link to="/view-product/edit/1">
            <Plus className="mr-2 h-4 w-4" />
            Add New Product
          </Link>
        </Button>
      </div>
      <div className="mb-6 flex flex-col md:flex-row gap-4">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search products..."
            className="pl-10"
          />
        </div>
        <Button variant="outline">
          Filter
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <Card key={product.id} className="overflow-hidden">
            <img 
              src={product.image} 
              alt={product.name} 
              className="h-48 w-full object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
              <p className="text-sm text-gray-600 mb-2">{product.company}</p>
              <p className="text-lg font-bold mb-2">₹{product.price.toFixed(2)}</p>
              <div className="text-sm text-gray-600 mb-4">
                <span>Min: {product.minQty}</span>
                <span className="mx-2">|</span>
                <span>Max: {product.maxQty}</span>
              </div>
              <div className="flex justify-between">
                <Button variant="outline" asChild>
                  <Link to={`edit/${product.id}`}>
                    <Edit className="mr-2 h-4 w-4" />
                    Edit
                  </Link>
                </Button>
                <Button variant="destructive" onClick={() => handleDelete(product.id)}>
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ProductList
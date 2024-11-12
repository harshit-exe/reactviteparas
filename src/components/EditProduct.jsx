import React, { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Save, Upload } from 'lucide-react'

const EditProduct = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({
    name: "",
    company: "",
    price: "",
    minQty: "",
    maxQty: "",
    image: null,
  })
  const [previewImage, setPreviewImage] = useState("")

  useEffect(() => {
    if (id) {
      // Fetch product data if editing an existing product
      const fetchedProduct = {
        id,
        name: "Sample Product",
        company: "Sample Company",
        price: "99.99",
        minQty: "1",
        maxQty: "10",
        image: null,
      }
      setProduct(fetchedProduct)
      setPreviewImage("https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=300&q=80")
    }
  }, [id])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setProduct(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setProduct(prev => ({ ...prev, image: file }))
      setPreviewImage(URL.createObjectURL(file))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission (create new product or update existing one)
    console.log("Submitting product:", product)
    navigate('/view-product')
  }

  return (
    <div className="container mx-auto max-w-4xl p-4 md:p-8">
      <Button variant="ghost" className="mb-6" asChild>
        <Link to="/">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Products
        </Link>
      </Button>
      <Card>
        <form onSubmit={handleSubmit}>
          <CardContent className="p-6">
            <h1 className="text-2xl font-bold mb-6">{id ? 'Edit Product' : 'Create New Product'}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name">Product Name</Label>
                  <Input id="name" name="name" value={product.name} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" name="company" value={product.company} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" name="price" type="number" step="0.01" value={product.price} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="minQty">Minimum Quantity</Label>
                  <Input id="minQty" name="minQty" type="number" value={product.minQty} onChange={handleInputChange} required />
                </div>
                <div>
                  <Label htmlFor="maxQty">Maximum Quantity</Label>
                  <Input id="maxQty" name="maxQty" type="number" value={product.maxQty} onChange={handleInputChange} required />
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="image">Product Image</Label>
                  <div className="mt-2 flex items-center gap-4">
                    <Button type="button" onClick={() => document.getElementById('image').click()}>
                      <Upload className="mr-2 h-4 w-4" />
                      Upload Image
                    </Button>
                    <Input
                      id="image"
                      name="image"
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                    />
                    <span className="text-sm text-gray-500">
                      {product.image ? product.image.name : "No file chosen"}
                    </span>
                  </div>
                </div>
                {previewImage && (
                  <div className="mt-4">
                    <img src={previewImage} alt="Product Preview" className="max-h-64 w-full rounded object-cover" />
                  </div>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className="bg-gray-50 p-6">
            <Button type="submit" className="ml-auto">
              <Save className="mr-2 h-4 w-4" />
              {id ? 'Update Product' : 'Create Product'}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  )
}

export default EditProduct
import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import BusinessCardForm from './components/BusinessCard'
import OrderProduct from './components/OrderProduct'
import OtherProduct from './components/OtherProduct'
import EditProduct from './components/EditProduct'
import ViewBranch from './components/ViewBranch'
import ViewUser from './components/ViewUser'
import EditUser from './components/EditUser'
import EditBranch from './components/EditBranch,'
import Login from './components/Login'
import AppLayout from './components/AppLayout'
import Overview from './components/Overview'
import MIS from './components/MIS'
import ViewProduct from './components/ViewProduct'


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/*"
          element={
            <AppLayout userName="Your Name">
              <Routes>
                <Route path="/" element={<Navigate to="/overview" replace />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/business-card" element={<BusinessCardForm />} />
                <Route path="/order-product" element={<OrderProduct />} />
                <Route path="/other-product" element={<OtherProduct />} />
                <Route path="/mis" element={<MIS />} />
                <Route path="/view-product" element={<ViewProduct />} />
                <Route path="/view-product/edit/:id" element={<EditProduct />} />
                <Route path="/view-branch" element={<ViewBranch />} />
                <Route path="/view-user" element={<ViewUser />} />
                <Route path="/view-user/:id/edit" element={<EditUser />} />
                <Route path="/branch/:id/edit" element={<EditBranch />} />
                <Route path="/branch/create" element={<EditBranch />} />
              </Routes>
            </AppLayout>
          }
        />
      </Routes>
    </Router>
  )
}
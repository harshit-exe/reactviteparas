import React from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import AppLayout from './components/AppLayout'
import BusinessCardForm from './components/BusinessCard';
import OrderProduct from './components/OrderProduct';
import OtherProduct from './components/OtherProduct';
import ViewBranch from './components/ViewBranch';
import EditBranch from './components/EditBranch,';
import ViewUser from './components/ViewUser';
import EditUser from './components/EditUser';
import ViewProduct from './components/ViewProduct';
import EditProduct from './components/EditProduct';

// Import your page components
const Overview = () => <h2>Overview Page</h2>;
const MIS = () => <h2>Other List Page</h2>;
// const ViewProduct = () => <h2>Other List Page</h2>;



export default function App() {
  return (
    <Router>
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
    </Router>
  )
}
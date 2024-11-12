import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, Mail, Lock, ArrowRight, User } from "lucide-react"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)
  
  async function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.target)
    const username = formData.get('username')
    const email = formData.get('email')
    const password = formData.get('password')
    const remember = formData.get('remember') === 'on'
    
    try {
      // Replace with your actual API endpoint
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password, remember }),
      })
      
      if (!response.ok) throw new Error('Login failed')
      
      // Handle successful login here (e.g., redirect or store token)
      const data = await response.json()
      toast({ title: "Success", description: "You have successfully logged in." })
      
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Invalid username, email or password.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center    bg-gray-50">
      {/* Left side - Image */}
      
      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 lg:p-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl"
        >
          <div className="flex flex-col items-center">
            <img
              src="https://parasprint.in/wp-content/uploads/2018/05/HEADER-LOGO.png"
              alt="Paras Print Logo"
              className="h-16 mb-8"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Welcome Back
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Enter your credentials to access your account
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="relative">
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="pl-10 border-gray-300"
                  placeholder="Email address"
                />
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">
                <Input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="pl-10 border-gray-300"
                  placeholder="Username"
                />
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              <div className="relative">
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="pl-10 border-gray-300"
                  placeholder="Password"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Checkbox id="remember" name="remember" />
                <label htmlFor="remember" className="ml-2 block text-sm text-gray-900">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="/forgot-password" className="font-medium text-primary hover:text-primary/90">
                  Forgot password?
                </a>
              </div>
            </div>

            <div>
              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-white group"
                type="submit" 
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Logging in...
                  </>
                ) : (
                  <>
                    Log in
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </div>

            <div className="text-center text-sm">
              <span className="text-gray-600">Don't have an account?</span>{' '}
              <a href="/register" className="font-medium text-primary hover:text-primary/90">
                Sign up
              </a>
            </div>
          </form>
        </motion.div>
        <footer className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Paras Print. All rights reserved.
        </footer>
      </div>
    </div>
  )
}
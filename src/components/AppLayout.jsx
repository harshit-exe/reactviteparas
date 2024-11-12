import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { LayoutDashboard, CreditCard, Package, List, LogOut, Menu , FileDown ,FilePenLine,MapPinHouse ,UsersRound } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const sidebarItems = [
  { icon: LayoutDashboard, label: 'Overview', route: '/overview' },
  { icon: CreditCard, label: 'Business Card', route: '/business-card' },
  { icon: List, label: 'Other Product', route: '/other-product' },
  { icon: Package, label: 'Order Product', route: '/order-product' },
  { icon: FileDown, label: 'MIS', route: '/mis' },
  { icon: FilePenLine, label: 'View Product', route: '/view-product' },
  { icon: MapPinHouse, label: 'View Branch', route: '/view-branch' },
  { icon: UsersRound    , label: 'View User', route: '/view-user' },
]

export default function AppLayout({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const savedPath = localStorage.getItem('currentPath')
    if (savedPath && savedPath !== location.pathname) {
      navigate(savedPath, { replace: true })
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('currentPath', location.pathname)
  }, [location.pathname])

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen)
  const handleLogOut = ()=>{
    navigate("/login")
  }
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <div className="flex  items-center justify-between h-16 px-4 border-b border-gray-200">
          <img src="https://parasprint.in/wp-content/uploads/2018/05/HEADER-LOGO.png" className="w-2/3 h-fit object-contain" alt="" />
          <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </div>
        <nav className="mt-5">
          <ul className="space-y-2 px-3">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                <Button
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-sm font-medium transition-colors duration-150 ease-in-out",
                    location.pathname === item.route
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                  )}
                  onClick={() => {
                    navigate(item.route)
                    if (window.innerWidth < 1024) setSidebarOpen(false)
                  }}
                >
                  <item.icon className="mr-3 h-5 w-5" />
                  {item.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-200">
          <Button
            variant="ghost"
            className="w-full justify-start text-sm font-medium text-red-600 hover:bg-red-50 hover:text-red-700"
            onClick={() => {
              console.log('Logging out...')
              handleLogOut()
              // Implement logout functionality here
            }}
          >
            <LogOut  className="mr-3 h-5 w-5" />
            Log out
          </Button>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="flex items-center justify-between h-16 px-4 bg-white border-b border-gray-200">
          <div className="flex items-center">
            <Button variant="ghost" size="icon" onClick={toggleSidebar} className="mr-4 lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
            <h1 className="text-xl font-semibold text-gray-800">
              {sidebarItems.find(item => item.route === location.pathname)?.label || 'Dashboard'}
            </h1>
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-medium text-gray-700">Aman Gupta</span>
            <Avatar className="h-8 w-8">
              <AvatarImage src="/avatar.png" alt="John Doe" />
              <AvatarFallback>AG</AvatarFallback>
            </Avatar>
          </div>
        </header>

        <main className="flex-1 overflow-x-hidden overflow-y-auto p-2">
          <div className="container mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
}
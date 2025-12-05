import { useState, useEffect } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { Home, Users, AppWindow, Settings, Shield, LogOut, Menu, ChevronLeft, ShieldCheck, KeyRound, Palette, UserCog, Mail, Smartphone } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { ThemeToggle } from '~/components/theme-toggle'
import { useTheme } from '~/components/theme-provider'
import { Separator } from '~/components/ui/separator'
import logoLight from '~/assets/logo-light.svg'
import logoDark from '~/assets/logo-dark.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '~/components/ui/dropdown-menu'

const navigationGroups = [
  {
    title: '控制台',
    items: [
      { name: '概览', href: '/dashboard', icon: Home },
    ]
  },
  {
    title: '资源管理',
    items: [
      { name: '应用', href: '/dashboard/applications', icon: AppWindow },
      { name: '用户', href: '/dashboard/users', icon: Users },
      { name: '角色', href: '/dashboard/roles', icon: UserCog },
    ]
  },
  {
    title: '身份认证',
    items: [
      { name: '品牌定制', href: '/dashboard/branding', icon: Palette },
      { name: '登录方式', href: '/dashboard/login-methods', icon: Mail },
      { name: '社交连接', href: '/dashboard/social-connections', icon: Users },
      { name: '注册设置', href: '/dashboard/register-settings', icon: UserCog },
      { name: '多因素验证', href: '/dashboard/mfa', icon: ShieldCheck },
      { name: 'SSO', href: '/dashboard/sso', icon: KeyRound },
      { name: 'OpenID Connect', href: '/dashboard/oidc', icon: Shield },
    ]
  },
  {
    title: '系统',
    items: [
      { name: '设置', href: '/dashboard/settings', icon: Settings },
    ]
  },
]

// 用于查找当前页面名称的扁平化列表
const allNavItems = navigationGroups.flatMap(group => group.items)

export default function DashboardLayout() {
  const location = useLocation()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isDark, setIsDark] = useState(false)
  
  // 监听实际应用的主题（从 HTML 元素的 class）
  useEffect(() => {
    const updateTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'))
    }
    
    // 初始化
    updateTheme()
    
    // 监听 class 变化
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    })
    
    return () => observer.disconnect()
  }, [])
  
  const logo = isDark ? logoDark : logoLight
  
  return (
    <div className="flex h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Sidebar */}
      <aside className={`bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-r border-gray-200 dark:border-gray-700 transition-all duration-300 ${isCollapsed ? 'w-[72px]' : 'w-64'}`}>
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-700">
          {!isCollapsed && <img src={logo} alt="MagicEdge" className="h-8 w-auto" />}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="ml-auto"
          >
            {isCollapsed ? <Menu className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
          </Button>
        </div>
        <nav className="p-4 space-y-6 overflow-y-auto">
          {navigationGroups.map((group, groupIndex) => (
            <div key={group.title}>
              {!isCollapsed && (
                <div className="px-4 mb-2">
                  <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    {group.title}
                  </p>
                </div>
              )}
              {groupIndex > 0 && isCollapsed && (
                <Separator className="my-2" />
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const isActive = location.pathname === item.href
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={`flex items-center ${isCollapsed ? 'justify-center flex px-2' : 'px-4'} py-2 text-sm font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                      }`}
                      title={isCollapsed ? item.name : undefined}
                    >
                      <item.icon className={`w-5 h-5 ${isCollapsed ? '' : 'mr-3'} flex-shrink-0`} />
                      {!isCollapsed && <span className="truncate">{item.name}</span>}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Header */}
        <header className="flex items-center justify-between h-16 px-6 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center space-x-4">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
              {allNavItems.find((item) => item.href === location.pathname)?.name || '控制台'}
            </h2>
          </div>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="" alt="User" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel>我的账户</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>个人资料</DropdownMenuItem>
                <DropdownMenuItem>账户设置</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>退出登录</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 overflow-y-auto p-6">
          <div
            key={location.pathname}
            className="animate-fade-in-up"
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

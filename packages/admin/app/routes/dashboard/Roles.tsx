import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Badge } from '~/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'
import { Plus, MoreVertical, Shield, Users as UsersIcon } from 'lucide-react'
import { Search } from 'lucide-react'

const roles = [
  {
    id: '1',
    name: 'Admin',
    description: '完全管理权限',
    type: 'system',
    users: 5,
    permissions: ['users:read', 'users:write', 'apps:read', 'apps:write', 'settings:write'],
  },
  {
    id: '2',
    name: 'Developer',
    description: '应用开发和管理权限',
    type: 'custom',
    users: 23,
    permissions: ['apps:read', 'apps:write', 'users:read'],
  },
  {
    id: '3',
    name: 'User Manager',
    description: '用户管理权限',
    type: 'custom',
    users: 8,
    permissions: ['users:read', 'users:write'],
  },
  {
    id: '4',
    name: 'Viewer',
    description: '只读访问权限',
    type: 'system',
    users: 156,
    permissions: ['users:read', 'apps:read'],
  },
]

const allPermissions = [
  { id: 'users:read', name: '查看用户', category: '用户管理' },
  { id: 'users:write', name: '管理用户', category: '用户管理' },
  { id: 'apps:read', name: '查看应用', category: '应用管理' },
  { id: 'apps:write', name: '管理应用', category: '应用管理' },
  { id: 'settings:read', name: '查看设置', category: '系统设置' },
  { id: 'settings:write', name: '修改设置', category: '系统设置' },
  { id: 'audit:read', name: '查看审计日志', category: '审计' },
]

export default function Roles() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredRoles = roles.filter(
    (role) =>
      role.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      role.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">角色管理</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            管理用户角色和权限
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          创建角色
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">总角色数</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{roles.length}</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {roles.filter(r => r.type === 'system').length} 个系统角色
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">自定义角色</CardTitle>
            <Shield className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {roles.filter(r => r.type === 'custom').length}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">可编辑和删除</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">分配的用户</CardTitle>
            <UsersIcon className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {roles.reduce((sum, role) => sum + role.users, 0)}
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400">已分配角色的用户总数</p>
          </CardContent>
        </Card>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜索角色..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white/80 dark:bg-card/40 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-sm dark:shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <TableHead className="text-gray-900 dark:text-gray-100">角色名称</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-100">类型</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-100">用户数</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-100">权限数</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredRoles.map((role) => (
              <TableRow key={role.id} className="border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <TableCell>
                  <div>
                    <div className="font-medium text-gray-900 dark:text-gray-100">{role.name}</div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">{role.description}</div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant={role.type === 'system' ? 'secondary' : 'default'}>
                    {role.type === 'system' ? '系统角色' : '自定义'}
                  </Badge>
                </TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{role.users}</TableCell>
                <TableCell className="text-gray-900 dark:text-gray-100">{role.permissions.length}</TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>可用权限</CardTitle>
          <CardDescription>系统中所有可分配的权限</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {['用户管理', '应用管理', '系统设置', '审计'].map((category) => (
              <div key={category}>
                <h3 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {allPermissions
                    .filter((p) => p.category === category)
                    .map((permission) => (
                      <Badge key={permission.id} variant="outline">
                        {permission.name}
                      </Badge>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

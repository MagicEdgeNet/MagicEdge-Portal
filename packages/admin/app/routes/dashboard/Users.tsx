import { MoreVertical, Plus, Search } from 'lucide-react'
import { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '~/components/ui/avatar'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '~/components/ui/table'

const users = [
  {
    id: '1',
    name: 'Zhang Wei',
    email: 'zhang.wei@example.com',
    role: 'Admin',
    status: 'active',
    lastLogin: '2 hours ago',
    avatar: '',
  },
  {
    id: '2',
    name: 'Li Na',
    email: 'li.na@example.com',
    role: 'User',
    status: 'active',
    lastLogin: '1 day ago',
    avatar: '',
  },
  {
    id: '3',
    name: 'Wang Fang',
    email: 'wang.fang@example.com',
    role: 'User',
    status: 'inactive',
    lastLogin: '1 week ago',
    avatar: '',
  },
  {
    id: '4',
    name: 'Liu Yang',
    email: 'liu.yang@example.com',
    role: 'Developer',
    status: 'active',
    lastLogin: '5 minutes ago',
    avatar: '',
  },
]

export default function Users() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredUsers = users.filter(
    user =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase())
      || user.email.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">用户管理</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            管理平台用户和权限
          </p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          添加用户
        </Button>
      </div>

      <div className="flex items-center space-x-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="搜索用户..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      <div className="bg-white/80 dark:bg-card/40 backdrop-blur-md rounded-lg border border-gray-200 dark:border-gray-700/50 shadow-sm dark:shadow-lg">
        <Table>
          <TableHeader>
            <TableRow className="border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
              <TableHead className="text-gray-900 dark:text-gray-100">用户</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-100">角色</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-100">状态</TableHead>
              <TableHead className="text-gray-900 dark:text-gray-100">最后登录</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map(user => (
              <TableRow key={user.id} className="border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800/50">
                <TableCell>
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={user.avatar} alt={user.name} />
                      <AvatarFallback>
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-gray-900 dark:text-gray-100">{user.name}</div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{user.role}</Badge>
                </TableCell>
                <TableCell>
                  <Badge variant={user.status === 'active' ? 'default' : 'secondary'}>
                    {user.status === 'active' ? '活跃' : '未激活'}
                  </Badge>
                </TableCell>
                <TableCell className="text-sm text-gray-500 dark:text-gray-400">
                  {user.lastLogin}
                </TableCell>
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
    </div>
  )
}

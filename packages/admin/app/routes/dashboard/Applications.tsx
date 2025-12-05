import { ExternalLink, MoreVertical, Plus } from 'lucide-react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/components/ui/dialog'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const applications = [
  {
    id: '1',
    name: 'My SaaS App',
    type: 'Web Application',
    clientId: 'app_123456789',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Mobile App',
    type: 'Native',
    clientId: 'app_987654321',
    status: 'active',
    createdAt: '2024-02-20',
  },
  {
    id: '3',
    name: 'Internal Tool',
    type: 'SPA',
    clientId: 'app_456789123',
    status: 'inactive',
    createdAt: '2024-03-10',
  },
]
export default function Applications() {
  const navigate = useNavigate()
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [appName, setAppName] = useState('')
  const [appType, setAppType] = useState('')

  const handleCreateApp = () => {
    // eslint-disable-next-line no-console
    console.log('Creating app:', { appName, appType })
    setIsDialogOpen(false)
    setAppName('')
    setAppType('')
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">应用管理</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            管理您的 OAuth 应用和客户端
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              创建应用
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>创建新应用</DialogTitle>
              <DialogDescription>
                填写应用信息以创建新的 OAuth 客户端
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="app-name">应用名称</Label>
                <Input
                  id="app-name"
                  placeholder="My Application"
                  value={appName}
                  onChange={e => setAppName(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="app-type">应用类型</Label>
                <Input
                  id="app-type"
                  placeholder="Web Application"
                  value={appType}
                  onChange={e => setAppType(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                取消
              </Button>
              <Button onClick={handleCreateApp}>创建</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {applications.map(app => (
          <Card
            key={app.id}
            className="cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => navigate(`/dashboard/applications/${app.id}`)}
          >
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">{app.name}</CardTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.stopPropagation()
                    // 打开更多操作菜单
                  }}
                >
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
              <CardDescription>{app.type}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400">Client ID</p>
                <code className="text-xs bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
                  {app.clientId}
                </code>
              </div>
              <div className="flex items-center justify-between">
                <Badge variant={app.status === 'active' ? 'default' : 'secondary'}>
                  {app.status === 'active' ? '活跃' : '未激活'}
                </Badge>
                <p className="text-xs text-gray-500 dark:text-gray-400">{app.createdAt}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="w-full"
                onClick={(e) => {
                  e.stopPropagation()
                  navigate(`/dashboard/applications/${app.id}`)
                }}
              >
                查看详情
                {' '}
                <ExternalLink className="ml-2 h-3 w-3" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

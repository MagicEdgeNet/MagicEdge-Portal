import { ArrowLeft, Copy, RefreshCw, Trash2 } from 'lucide-react'
import { useNavigate, useParams } from 'react-router'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

export default function ApplicationDetail() {
  const { id } = useParams()
  const navigate = useNavigate()

  // Mock data - 实际应用中应该从 API 获取
  const application = {
    id,
    name: 'My SaaS App',
    type: 'Web Application',
    clientId: 'app_123456789',
    clientSecret: '••••••••••••••••••••••••••••',
    status: 'active',
    createdAt: '2024-01-15',
    redirectUris: [
      'https://myapp.com/auth/callback',
      'http://localhost:3000/callback',
    ],
    allowedScopes: ['openid', 'profile', 'email'],
    tokenLifetime: 3600,
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate('/dashboard/applications')}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">
              {application.name}
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              应用详情和配置
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant={application.status === 'active' ? 'default' : 'secondary'}>
            {application.status === 'active' ? '活跃' : '未激活'}
          </Badge>
          <Button variant="destructive" size="sm">
            <Trash2 className="mr-2 h-4 w-4" />
            删除应用
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>基本信息</CardTitle>
            <CardDescription>应用的基本配置信息</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="app-name">应用名称</Label>
              <Input id="app-name" defaultValue={application.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="app-type">应用类型</Label>
              <Input id="app-type" defaultValue={application.type} readOnly />
            </div>
            <div className="space-y-2">
              <Label>创建时间</Label>
              <Input value={application.createdAt} readOnly />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Label>应用状态</Label>
                <p className="text-sm text-gray-500 dark:text-gray-400">启用或禁用此应用</p>
              </div>
              <Switch defaultChecked={application.status === 'active'} />
            </div>
            <Button className="w-full">保存更改</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>凭据</CardTitle>
            <CardDescription>OAuth 客户端凭据</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Client ID</Label>
              <div className="flex items-center space-x-2">
                <Input value={application.clientId} readOnly className="font-mono text-sm" />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => copyToClipboard(application.clientId)}
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="space-y-2">
              <Label>Client Secret</Label>
              <div className="flex items-center space-x-2">
                <Input value={application.clientSecret} readOnly type="password" className="font-mono text-sm" />
                <Button variant="outline" size="icon">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <Button variant="outline" className="w-full">
              <RefreshCw className="mr-2 h-4 w-4" />
              重新生成密钥
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>重定向 URI</CardTitle>
          <CardDescription>允许的回调地址列表</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {application.redirectUris.map(uri => (
            <div key={uri} className="flex items-center space-x-2">
              <Input value={uri} readOnly className="flex-1" />
              <Button variant="outline" size="icon">
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          ))}
          <Button variant="outline" className="w-full">
            添加重定向 URI
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>权限范围</CardTitle>
          <CardDescription>应用可以请求的 OAuth 范围</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {application.allowedScopes.map(scope => (
              <Badge key={scope} variant="outline">
                {scope}
              </Badge>
            ))}
          </div>
          <Separator className="my-4" />
          <Button variant="outline">管理范围</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Token 设置</CardTitle>
          <CardDescription>访问令牌的生命周期配置</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="token-lifetime">访问令牌生命周期 (秒)</Label>
            <Input
              id="token-lifetime"
              type="number"
              defaultValue={application.tokenLifetime}
            />
          </div>
          <Button>保存设置</Button>
        </CardContent>
      </Card>
    </div>
  )
}

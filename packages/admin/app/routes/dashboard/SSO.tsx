import { Plus, Settings, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

const ssoProviders = [
  {
    id: 'google',
    name: 'Google Workspace',
    type: 'OIDC',
    enabled: true,
    users: 234,
    icon: '🔷',
  },
  {
    id: 'microsoft',
    name: 'Microsoft Entra ID (Azure AD)',
    type: 'SAML 2.0',
    enabled: true,
    users: 156,
    icon: '🔶',
  },
  {
    id: 'okta',
    name: 'Okta',
    type: 'SAML 2.0',
    enabled: false,
    users: 0,
    icon: '🔵',
  },
]

export default function SSO() {
  const [showAddProvider, setShowAddProvider] = useState(false)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">单点登录 (SSO)</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            配置企业级单点登录集成
          </p>
        </div>
        <Button onClick={() => setShowAddProvider(!showAddProvider)}>
          <Plus className="mr-2 h-4 w-4" />
          添加 SSO 提供商
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SSO 全局设置</CardTitle>
          <CardDescription>配置单点登录的全局策略</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">启用 SSO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                允许用户通过企业身份提供商登录
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">强制 SSO 登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                要求用户只能通过 SSO 登录，禁用密码登录
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Just-in-Time (JIT) 用户创建</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                SSO 登录时自动创建新用户账户
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      {showAddProvider && (
        <Card className="border-primary">
          <CardHeader>
            <CardTitle>添加新的 SSO 提供商</CardTitle>
            <CardDescription>配置新的企业身份提供商</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="provider-name">提供商名称</Label>
                <Input id="provider-name" placeholder="例如: Google Workspace" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="protocol">协议类型</Label>
                <Input id="protocol" placeholder="SAML 2.0 / OIDC" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="issuer">Issuer / Entity ID</Label>
              <Input id="issuer" placeholder="https://idp.example.com" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sso-url">SSO URL / Authorization Endpoint</Label>
              <Input id="sso-url" placeholder="https://idp.example.com/sso" />
            </div>
            <div className="flex items-center space-x-2">
              <Button>保存配置</Button>
              <Button variant="outline" onClick={() => setShowAddProvider(false)}>
                取消
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">已配置的提供商</h2>
        {ssoProviders.map(provider => (
          <Card key={provider.id}>
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 text-2xl">
                    {provider.icon}
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                        {provider.name}
                      </h3>
                      <Badge variant={provider.enabled ? 'default' : 'secondary'}>
                        {provider.enabled ? '已启用' : '未启用'}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      协议:
                      {' '}
                      {provider.type}
                      {' '}
                      •
                      {' '}
                      {provider.users}
                      {' '}
                      个用户
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked={provider.enabled} />
                  <Button variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="icon">
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>SAML 元数据</CardTitle>
          <CardDescription>用于配置身份提供商的服务提供商信息</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>Entity ID / Audience</Label>
            <div className="flex items-center space-x-2">
              <Input value="https://auth.magicedge.com/saml/metadata" readOnly className="font-mono text-sm" />
              <Button variant="outline" size="sm">复制</Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>ACS URL / Callback URL</Label>
            <div className="flex items-center space-x-2">
              <Input value="https://auth.magicedge.com/saml/acs" readOnly className="font-mono text-sm" />
              <Button variant="outline" size="sm">复制</Button>
            </div>
          </div>
          <Separator />
          <Button variant="outline" className="w-full">
            下载 SP 元数据 XML
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}

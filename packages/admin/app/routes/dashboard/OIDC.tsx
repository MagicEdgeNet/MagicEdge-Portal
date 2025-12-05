import { Copy, ExternalLink, RefreshCw } from 'lucide-react'
import { Badge } from '~/components/ui/badge'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

export default function OIDC() {
  const oidcConfig = {
    issuer: 'https://auth.magicedge.com',
    authorizationEndpoint: 'https://auth.magicedge.com/oauth/authorize',
    tokenEndpoint: 'https://auth.magicedge.com/oauth/token',
    userinfoEndpoint: 'https://auth.magicedge.com/oauth/userinfo',
    jwksUri: 'https://auth.magicedge.com/.well-known/jwks.json',
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">OpenID Connect</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          配置和管理 OIDC 端点
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>服务端点</CardTitle>
            <CardDescription>标准 OIDC 发现端点</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {Object.entries(oidcConfig).map(([key, value]) => (
              <div key={key} className="space-y-2">
                <Label className="text-xs text-gray-500">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </Label>
                <div className="flex items-center space-x-2">
                  <Input value={value} readOnly className="font-mono text-xs" />
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => copyToClipboard(value)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>支持的特性</CardTitle>
            <CardDescription>当前启用的 OIDC 功能</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm">Authorization Code Flow</span>
              <Badge>已启用</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm">Implicit Flow</span>
              <Badge>已启用</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm">Hybrid Flow</span>
              <Badge variant="secondary">未启用</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm">Client Credentials</span>
              <Badge>已启用</Badge>
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <span className="text-sm">PKCE</span>
              <Badge>已启用</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>JWT 签名密钥</CardTitle>
              <CardDescription>用于签名访问令牌的密钥对</CardDescription>
            </div>
            <Button variant="outline" size="sm">
              <RefreshCw className="mr-2 h-4 w-4" />
              轮换密钥
            </Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>当前密钥 ID</Label>
            <div className="flex items-center space-x-2">
              <Input
                value="key_2024_01"
                readOnly
                className="font-mono"
              />
              <Button variant="outline" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>算法</Label>
            <Input value="RS256" readOnly />
          </div>
          <div className="space-y-2">
            <Label>创建时间</Label>
            <Input value="2024-01-15 10:30:00 UTC" readOnly />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>OAuth 2.0 流程配置</CardTitle>
          <CardDescription>启用或禁用特定的授权流程</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Authorization Code Flow</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">标准的服务器端授权流程，最安全</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Authorization Code Flow + PKCE</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">适用于原生应用和单页应用</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Implicit Flow</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">已弃用，不推荐使用</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Client Credentials</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">用于服务器到服务器通信</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Resource Owner Password</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">不推荐，仅用于遗留系统</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">Device Code Flow</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">用于智能电视、IoT 设备等</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Token 生命周期</CardTitle>
          <CardDescription>配置各类令牌的有效期</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="access-token">Access Token (秒)</Label>
              <Input id="access-token" defaultValue="3600" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="refresh-token">Refresh Token (秒)</Label>
              <Input id="refresh-token" defaultValue="2592000" type="number" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="id-token">ID Token (秒)</Label>
              <Input id="id-token" defaultValue="3600" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="auth-code">Authorization Code (秒)</Label>
              <Input id="auth-code" defaultValue="600" type="number" />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">启用 Refresh Token 轮换</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">每次刷新时颁发新的 Refresh Token</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Button>保存配置</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>可用的 Scopes</CardTitle>
          <CardDescription>应用可以请求的权限范围</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { scope: 'openid', description: '必需，用于 OpenID Connect 认证', required: true },
              { scope: 'profile', description: '访问用户的基本资料信息', required: false },
              { scope: 'email', description: '访问用户的邮箱地址', required: false },
              { scope: 'phone', description: '访问用户的手机号码', required: false },
              { scope: 'address', description: '访问用户的地址信息', required: false },
              { scope: 'offline_access', description: '获取 Refresh Token', required: false },
            ].map(item => (
              <div key={item.scope}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center space-x-2">
                      <code className="text-sm font-mono text-gray-900 dark:text-gray-100">{item.scope}</code>
                      {item.required && <Badge variant="secondary">必需</Badge>}
                    </div>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{item.description}</p>
                  </div>
                  <Switch defaultChecked disabled={item.required} />
                </div>
                <Separator className="mt-3" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>发现端点</CardTitle>
          <CardDescription>OIDC Discovery 文档</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label>OpenID Configuration</Label>
            <div className="flex items-center space-x-2">
              <Input
                value="https://auth.magicedge.com/.well-known/openid-configuration"
                readOnly
                className="font-mono text-xs"
              />
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="space-y-2">
            <Label>OAuth Authorization Server Metadata</Label>
            <div className="flex items-center space-x-2">
              <Input
                value="https://auth.magicedge.com/.well-known/oauth-authorization-server"
                readOnly
                className="font-mono text-xs"
              />
              <Button variant="outline" size="icon">
                <ExternalLink className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

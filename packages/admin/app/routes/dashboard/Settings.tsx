import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

export default function Settings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">系统设置</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          管理系统配置和偏好设置
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>基本设置</CardTitle>
          <CardDescription>配置平台基本信息</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="platform-name">平台名称</Label>
            <Input id="platform-name" defaultValue="MagicEdge" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="platform-url">平台 URL</Label>
            <Input
              id="platform-url"
              defaultValue="https://auth.magicedge.com"
              type="url"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="support-email">支持邮箱</Label>
            <Input
              id="support-email"
              defaultValue="support@magicedge.com"
              type="email"
            />
          </div>
          <Button>保存更改</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>安全设置</CardTitle>
          <CardDescription>配置安全相关选项</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">双因素认证</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">要求用户启用 2FA</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">会话超时</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">用户会话的最大时长（小时）</p>
            </div>
            <Input className="w-32" defaultValue="24" type="number" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">强制复杂密码</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">要求密码包含大小写字母和数字</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>邮件设置</CardTitle>
          <CardDescription>配置 SMTP 服务器</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="smtp-host">SMTP 主机</Label>
            <Input id="smtp-host" placeholder="smtp.example.com" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="smtp-port">端口</Label>
              <Input id="smtp-port" placeholder="587" type="number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="smtp-security">加密方式</Label>
              <Input id="smtp-security" placeholder="TLS" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-username">用户名</Label>
            <Input id="smtp-username" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="smtp-password">密码</Label>
            <Input id="smtp-password" type="password" />
          </div>
          <Button>保存邮件设置</Button>
        </CardContent>
      </Card>
    </div>
  )
}

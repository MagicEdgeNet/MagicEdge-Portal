import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Badge } from '~/components/ui/badge'
import { Switch } from '~/components/ui/switch'
import { Separator } from '~/components/ui/separator'
import { Smartphone, Mail, Key, Shield } from 'lucide-react'

const mfaMethods = [
  {
    id: 'totp',
    name: 'TOTP (时间基准一次性密码)',
    description: '使用 Google Authenticator、Authy 等应用生成验证码',
    icon: Smartphone,
    enabled: true,
    users: 1234,
  },
  {
    id: 'sms',
    name: 'SMS 短信验证',
    description: '通过短信发送验证码到用户手机',
    icon: Mail,
    enabled: true,
    users: 856,
  },
  {
    id: 'email',
    name: '邮箱验证码',
    description: '通过邮件发送验证码',
    icon: Mail,
    enabled: false,
    users: 0,
  },
  {
    id: 'webauthn',
    name: 'WebAuthn / FIDO2',
    description: '使用硬件密钥或生物识别(指纹、Face ID)',
    icon: Key,
    enabled: false,
    users: 0,
  },
]

export default function MFA() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">多因素验证</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          配置和管理多因素身份验证方式
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>全局 MFA 设置</CardTitle>
          <CardDescription>配置多因素验证的全局策略</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">强制所有用户启用 MFA</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                要求所有用户必须设置至少一种多因素验证方式
              </p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">管理员强制 MFA</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                要求所有管理员账户必须启用多因素验证
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">记住设备</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                允许用户在受信任设备上跳过 MFA 验证(30天)
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {mfaMethods.map((method) => {
          const Icon = method.icon
          return (
            <Card key={method.id}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{method.name}</CardTitle>
                      <CardDescription className="mt-1">{method.description}</CardDescription>
                    </div>
                  </div>
                  <Switch defaultChecked={method.enabled} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-gray-100">
                      {method.users.toLocaleString()}
                    </span>{' '}
                    个用户已启用
                  </div>
                  <Badge variant={method.enabled ? 'default' : 'secondary'}>
                    {method.enabled ? '已启用' : '未启用'}
                  </Badge>
                </div>
                {method.id === 'totp' && method.enabled && (
                  <div className="mt-4 space-y-2">
                    <Separator />
                    <div className="pt-2">
                      <p className="text-sm font-medium text-gray-900 dark:text-gray-100">支持的应用</p>
                      <div className="mt-2 flex flex-wrap gap-2">
                        <Badge variant="outline">Google Authenticator</Badge>
                        <Badge variant="outline">Microsoft Authenticator</Badge>
                        <Badge variant="outline">Authy</Badge>
                      </div>
                    </div>
                  </div>
                )}
                {method.id === 'sms' && method.enabled && (
                  <div className="mt-4">
                    <Separator />
                    <Button variant="outline" className="mt-4 w-full">
                      配置短信服务商
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-primary" />
            <CardTitle>恢复码设置</CardTitle>
          </div>
          <CardDescription>配置多因素验证的备用恢复方式</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">允许使用恢复码</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                用户可以生成一次性恢复码用于紧急访问
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">恢复码数量</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">每个用户生成的恢复码数量</p>
            </div>
            <div className="text-lg font-semibold text-gray-900 dark:text-gray-100">10</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

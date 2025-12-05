import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Switch } from '~/components/ui/switch'
import { Separator } from '~/components/ui/separator'
import { Mail, Smartphone } from 'lucide-react'

export default function LoginMethods() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">登录方式</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          配置可用的登录认证方式
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-primary" />
            <CardTitle>密码登录</CardTitle>
          </div>
          <CardDescription>传统的密码认证方式</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">用户名/密码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">使用用户名和密码登录</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">邮箱/密码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">使用邮箱地址和密码登录</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">手机号/密码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">使用手机号和密码登录</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <CardTitle>验证码登录</CardTitle>
          </div>
          <CardDescription>无密码登录方式</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">手机验证码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">通过短信验证码快速登录</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">邮箱验证码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">通过邮件验证码登录</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>登录选项</CardTitle>
          <CardDescription>额外的登录配置选项</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">显示"记住我"选项</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许用户保持登录状态</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">显示"忘记密码"链接</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">提供密码找回入口</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">首次登录强制修改密码</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">新用户首次登录时要求修改密码</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

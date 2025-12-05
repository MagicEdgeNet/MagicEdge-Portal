import { Lock, Mail, Palette, Smartphone } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

export default function LoginExperience() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">登录体验</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          自定义用户登录和注册流程
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Palette className="h-5 w-5 text-primary" />
            <CardTitle>品牌定制</CardTitle>
          </div>
          <CardDescription>自定义登录页面的品牌外观</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand-name">品牌名称</Label>
              <Input id="brand-name" defaultValue="MagicEdge" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-logo">品牌 Logo URL</Label>
              <Input id="brand-logo" placeholder="https://..." type="url" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">主题色</Label>
              <div className="flex items-center space-x-2">
                <Input id="primary-color" defaultValue="#2393f2" type="color" className="w-20 h-10" />
                <Input defaultValue="#2393f2" className="flex-1" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="background">背景图片 URL</Label>
              <Input id="background" placeholder="https://..." type="url" />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">显示暗色模式切换</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许用户切换深浅色主题</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Button>保存品牌设置</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Mail className="h-5 w-5 text-primary" />
            <CardTitle>登录方式</CardTitle>
          </div>
          <CardDescription>配置可用的登录和注册选项</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">用户名/密码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">传统的账号密码登录方式</p>
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
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">手机验证码登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">无需密码，通过短信验证码登录</p>
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
          <div className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <CardTitle>社交登录</CardTitle>
          </div>
          <CardDescription>配置第三方社交平台登录</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {[
            { name: 'Google', enabled: true, icon: '🔵' },
            { name: 'GitHub', enabled: true, icon: '⚫' },
            { name: 'Microsoft', enabled: false, icon: '🔷' },
            { name: 'WeChat (微信)', enabled: false, icon: '🟢' },
            { name: 'Alipay (支付宝)', enabled: false, icon: '🔵' },
          ].map(provider => (
            <div key={provider.name}>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{provider.icon}</span>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{provider.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {provider.enabled ? '已配置' : '未配置'}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch defaultChecked={provider.enabled} />
                  {provider.enabled && (
                    <Button variant="outline" size="sm">配置</Button>
                  )}
                </div>
              </div>
              <Separator className="mt-4" />
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Lock className="h-5 w-5 text-primary" />
            <CardTitle>注册设置</CardTitle>
          </div>
          <CardDescription>配置用户注册流程和要求</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">允许用户注册</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">开放公开注册，任何人都可以创建账户</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">邮箱验证</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">要求用户验证邮箱后才能使用账户</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">手机号验证</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">要求用户验证手机号</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">用户协议和隐私政策</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">注册时要求用户同意服务条款</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="terms-url">用户协议 URL</Label>
            <Input id="terms-url" defaultValue="https://magicedge.com/terms" type="url" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="privacy-url">隐私政策 URL</Label>
            <Input id="privacy-url" defaultValue="https://magicedge.com/privacy" type="url" />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>会话管理</CardTitle>
          <CardDescription>配置用户会话和登录行为</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">记住登录状态</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许用户选择"记住我"保持登录</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">会话超时(小时)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">用户无操作后自动登出的时间</p>
            </div>
            <Input className="w-32" defaultValue="24" type="number" />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">"记住我"有效期(天)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">勾选记住我后的会话有效期</p>
            </div>
            <Input className="w-32" defaultValue="30" type="number" />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between rounded-lg border border-primary/50 bg-primary/5 p-4">
        <div>
          <p className="font-medium text-gray-900 dark:text-gray-100">预览登录页面</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">查看实际登录页面效果</p>
        </div>
        <Button>
          打开预览
        </Button>
      </div>
    </div>
  )
}

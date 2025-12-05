import { UserPlus } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

export default function RegisterSettings() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">注册设置</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          配置用户注册流程和验证要求
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <UserPlus className="h-5 w-5 text-primary" />
            <CardTitle>注册开关</CardTitle>
          </div>
          <CardDescription>控制是否允许新用户注册</CardDescription>
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
              <p className="font-medium text-gray-900 dark:text-gray-100">需要邀请码</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">仅允许持有邀请码的用户注册</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>验证要求</CardTitle>
          <CardDescription>配置注册时的验证步骤</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
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
              <p className="font-medium text-gray-900 dark:text-gray-100">人机验证 (CAPTCHA)</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">使用验证码防止机器人注册</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>注册字段配置</CardTitle>
          <CardDescription>配置注册时需要填写的字段</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">用户名</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">要求用户设置用户名</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">真实姓名</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">要求用户填写真实姓名</p>
            </div>
            <Switch />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">个人简介</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许用户填写个人简介</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>密码策略</CardTitle>
          <CardDescription>设置注册时的密码要求</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="min-length">最小长度</Label>
              <Input id="min-length" defaultValue="8" type="number" min="6" max="32" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="max-length">最大长度</Label>
              <Input id="max-length" defaultValue="128" type="number" min="8" max="256" />
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">要求包含大写字母</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">密码必须包含至少一个大写字母</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">要求包含小写字母</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">密码必须包含至少一个小写字母</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">要求包含数字</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">密码必须包含至少一个数字</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">要求包含特殊字符</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">密码必须包含特殊字符 (!@#$% 等)</p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>用户协议和隐私政策</CardTitle>
          <CardDescription>配置注册时的法律条款</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">要求同意服务条款</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">注册时必须勾选同意用户协议</p>
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

      <div className="flex items-center space-x-2">
        <Button>保存设置</Button>
        <Button variant="outline">重置为默认</Button>
      </div>
    </div>
  )
}

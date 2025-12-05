import { Palette } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Separator } from '~/components/ui/separator'
import { Switch } from '~/components/ui/switch'

export default function Branding() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">品牌定制</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          自定义登录页面的品牌外观和样式
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Palette className="h-5 w-5 text-primary" />
            <CardTitle>品牌信息</CardTitle>
          </div>
          <CardDescription>配置品牌的基本信息</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="brand-name">品牌名称</Label>
              <Input id="brand-name" defaultValue="MagicEdge" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="brand-slogan">品牌标语</Label>
              <Input id="brand-slogan" placeholder="您的品牌标语" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="brand-logo">品牌 Logo URL</Label>
            <Input id="brand-logo" placeholder="https://..." type="url" />
            <p className="text-xs text-gray-500 dark:text-gray-400">建议尺寸: 240x60 像素</p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="favicon">网站图标 (Favicon) URL</Label>
            <Input id="favicon" placeholder="https://..." type="url" />
            <p className="text-xs text-gray-500 dark:text-gray-400">建议格式: .ico 或 .png, 尺寸 32x32</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>颜色主题</CardTitle>
          <CardDescription>定制登录页面的配色方案</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="primary-color">主题色</Label>
              <div className="flex items-center space-x-2">
                <Input id="primary-color" defaultValue="#2393f2" type="color" className="w-20 h-10" />
                <Input defaultValue="#2393f2" className="flex-1" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">用于按钮、链接等主要元素</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="secondary-color">辅助色</Label>
              <div className="flex items-center space-x-2">
                <Input id="secondary-color" defaultValue="#51A9F5" type="color" className="w-20 h-10" />
                <Input defaultValue="#51A9F5" className="flex-1" />
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">用于辅助元素和强调</p>
            </div>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">显示暗色模式切换</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许用户在登录页切换深浅色主题</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>背景样式</CardTitle>
          <CardDescription>定制登录页面的背景</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="background">背景图片 URL</Label>
            <Input id="background" placeholder="https://..." type="url" />
            <p className="text-xs text-gray-500 dark:text-gray-400">留空使用默认渐变背景</p>
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">使用渐变背景</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">启用现代化的渐变色背景</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">使用玻璃态效果</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">为登录框添加半透明模糊效果</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>自定义内容</CardTitle>
          <CardDescription>添加额外的页面内容</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="welcome-text">欢迎文字</Label>
            <Input id="welcome-text" placeholder="欢迎使用 MagicEdge" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">描述文本</Label>
            <Input id="description" placeholder="企业级身份认证平台" />
          </div>
          <Separator />
          <div className="space-y-2">
            <Label htmlFor="footer-text">页脚文本</Label>
            <Input id="footer-text" defaultValue="© 2024 MagicEdge. All rights reserved." />
          </div>
        </CardContent>
      </Card>

      <div className="flex items-center space-x-2">
        <Button>保存品牌设置</Button>
        <Button variant="outline">重置为默认</Button>
        <Button variant="outline" className="ml-auto">
          预览效果
        </Button>
      </div>
    </div>
  )
}

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'
import { Button } from '~/components/ui/button'
import { Switch } from '~/components/ui/switch'
import { Separator } from '~/components/ui/separator'
import { Smartphone } from 'lucide-react'

// SVG Logo 组件
const GoogleLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
)

const GitHubLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path className="dark:fill-white fill-gray-900" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
)

const MicrosoftLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <rect width="10.8" height="10.8" fill="#F25022"/>
    <rect x="13.2" width="10.8" height="10.8" fill="#7FBA00"/>
    <rect y="13.2" width="10.8" height="10.8" fill="#00A4EF"/>
    <rect x="13.2" y="13.2" width="10.8" height="10.8" fill="#FFB900"/>
  </svg>
)

const FacebookLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1877F2">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const TwitterLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
    <path className="dark:fill-white fill-gray-900" d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
)

const WeChatLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#07C160">
    <path d="M8.691 2.188C3.891 2.188 0 5.476 0 9.53c0 2.212 1.17 4.203 3.002 5.55a.59.59 0 0 1 .213.665l-.39 1.48c-.019.07-.048.141-.048.213 0 .163.13.295.29.295a.326.326 0 0 0 .167-.054l1.903-1.114a.864.864 0 0 1 .717-.098 10.16 10.16 0 0 0 2.837.403c.276 0 .543-.027.811-.05-.857-2.578.157-4.972 1.932-6.446 1.703-1.415 3.882-1.98 5.853-1.838-.576-3.583-4.196-6.348-8.596-6.348zM5.785 5.991c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178A1.17 1.17 0 0 1 4.623 7.17c0-.651.52-1.18 1.162-1.18zm5.813 0c.642 0 1.162.529 1.162 1.18a1.17 1.17 0 0 1-1.162 1.178 1.17 1.17 0 0 1-1.162-1.178c0-.651.52-1.18 1.162-1.18zm5.34 2.867c-1.797-.052-3.746.512-5.28 1.786-1.72 1.428-2.687 3.72-1.78 6.22.942 2.453 3.666 4.229 6.884 4.229.826 0 1.622-.12 2.361-.336a.722.722 0 0 1 .598.082l1.584.926a.272.272 0 0 0 .14.047c.134 0 .24-.111.24-.247 0-.06-.023-.12-.038-.177l-.327-1.233a.582.582 0 0 1-.023-.156.49.49 0 0 1 .201-.398C23.024 18.48 24 16.82 24 14.98c0-3.21-2.931-5.837-6.656-6.088V8.89c-.135-.01-.27-.027-.407-.03zm-2.53 3.274c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.97-.982zm4.844 0c.535 0 .969.44.969.982a.976.976 0 0 1-.969.983.976.976 0 0 1-.969-.983c0-.542.434-.982.969-.982z"/>
  </svg>
)

const AlipayLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#1677FF">
    <path d="M19.695 15.07c3.426 1.158 4.203 1.22 4.203 1.22V3.846c0-2.124-1.705-3.845-3.81-3.845H3.914C1.808.001.102 1.722.102 3.846v16.31c0 2.123 1.706 3.845 3.813 3.845h16.173c2.105 0 3.81-1.722 3.81-3.845v-.157s-6.19-2.602-9.315-4.119c-2.096 2.602-4.8 4.181-7.607 4.181-4.75 0-6.361-4.19-4.112-6.949.49-.602 1.324-1.175 2.617-1.497 2.025-.502 5.247.313 8.266 1.317a16.796 16.796 0 0 0 1.341-3.302H5.781v-.952h4.799V6.975H4.77v-.953h5.81V3.591s0-.409.411-.409h2.347v2.84h5.744v.951h-5.744v1.704h4.69a19.453 19.453 0 0 1-1.986 5.06c1.424.52 2.702 1.011 3.654 1.333m-13.81-2.032c-.596.06-1.71.325-2.321.869-1.83 1.608-.735 4.55 2.968 4.55 2.151 0 4.301-1.388 5.99-3.61-2.403-1.182-4.438-2.028-6.637-1.809"/>
  </svg>
)

const QQLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#12B7F5">
    <path d="M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673"/>
  </svg>
)

const DingTalkLogo = () => (
  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
    <path fill="#0089FF" fillRule="nonzero" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.49 9.04l-.006.014c-.42.898-1.516 2.66-1.516 2.66l-.005-.012-.32.558h1.543l-2.948 3.919.67-2.666h-1.215l.422-1.763c-.341.082-.745.195-1.223.349 0 0-.646.378-1.862-.729 0 0-.82-.722-.344-.902.202-.077.981-.175 1.594-.257.83-.112 1.339-.172 1.339-.172s-2.555.038-3.161-.057c-.606-.095-1.375-1.107-1.539-1.996 0 0-.253-.488.545-.257.798.231 4.101.9 4.101.9S8.27 9.312 7.983 8.99c-.286-.32-.841-1.754-.769-2.634 0 0 .031-.22.257-.16 0 0 3.176 1.45 5.347 2.245 2.172.795 4.06 1.199 3.816 2.228-.02.087-.072.216-.144.37z"/>
  </svg>
)

const socialProviders = [
  { id: 'google', name: 'Google', enabled: true, logo: GoogleLogo, users: 1234 },
  { id: 'github', name: 'GitHub', enabled: true, logo: GitHubLogo, users: 856 },
  { id: 'microsoft', name: 'Microsoft', enabled: false, logo: MicrosoftLogo, users: 0 },
  { id: 'facebook', name: 'Facebook', enabled: false, logo: FacebookLogo, users: 0 },
  { id: 'twitter', name: 'Twitter / X', enabled: false, logo: TwitterLogo, users: 0 },
  { id: 'wechat', name: 'WeChat (微信)', enabled: false, logo: WeChatLogo, users: 0 },
  { id: 'alipay', name: 'Alipay (支付宝)', enabled: false, logo: AlipayLogo, users: 0 },
  { id: 'qq', name: 'QQ', enabled: false, logo: QQLogo, users: 0 },
  { id: 'dingtalk', name: 'DingTalk (钉钉)', enabled: false, logo: DingTalkLogo, users: 0 },
]

export default function SocialConnections() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">社交登录</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          配置第三方社交平台登录集成
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-2">
            <Smartphone className="h-5 w-5 text-primary" />
            <CardTitle>全局设置</CardTitle>
          </div>
          <CardDescription>社交登录的全局配置</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">启用社交登录</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许用户通过社交平台账号登录</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">自动创建账户</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">首次社交登录时自动创建用户账户</p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">允许账户绑定</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">允许现有用户绑定社交账号</p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>已配置的社交平台</CardTitle>
          <CardDescription>管理第三方社交平台登录集成</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {socialProviders.map((provider, index) => {
              const LogoComponent = provider.logo
              return (
                <div key={provider.id}>
                  <div className="flex items-center justify-between py-3">
                    <div className="flex items-center space-x-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gray-50 dark:bg-gray-800">
                        <LogoComponent />
                      </div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-gray-100">
                          {provider.name}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {provider.enabled
                            ? `${provider.users.toLocaleString()} 个用户使用`
                            : '未配置'}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {provider.enabled && (
                        <>
                          <Button variant="outline" size="sm">
                            编辑配置
                          </Button>
                          <Button variant="outline" size="sm">
                            测试连接
                          </Button>
                        </>
                      )}
                      {!provider.enabled && (
                        <Button variant="outline" size="sm">
                          配置
                        </Button>
                      )}
                      <Switch defaultChecked={provider.enabled} />
                    </div>
                  </div>
                  {index < socialProviders.length - 1 && <Separator />}
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>账户合并规则</CardTitle>
          <CardDescription>当社交账号与现有账户匹配时的处理方式</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">自动合并相同邮箱</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                社交账号邮箱与现有账户相同时自动关联
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <Separator />
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium text-gray-900 dark:text-gray-100">需要邮箱验证</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                合并前要求用户验证邮箱所有权
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

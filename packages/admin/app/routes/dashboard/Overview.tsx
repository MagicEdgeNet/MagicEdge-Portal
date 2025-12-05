import { Activity, AppWindow, Shield, Users } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '~/components/ui/card'

const stats = [
  {
    name: '总用户数',
    value: '2,543',
    icon: Users,
    change: '+12.5%',
    changeType: 'positive',
  },
  {
    name: '应用数量',
    value: '12',
    icon: AppWindow,
    change: '+2',
    changeType: 'positive',
  },
  {
    name: 'OIDC 连接',
    value: '8',
    icon: Shield,
    change: '0',
    changeType: 'neutral',
  },
  {
    name: '今日活跃',
    value: '573',
    icon: Activity,
    change: '+8.2%',
    changeType: 'positive',
  },
]

export default function Overview() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-gray-100">概览</h1>
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          欢迎回到 MagicEdge Portal 控制台
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map(stat => (
          <Card key={stat.name}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.name}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className={`text-xs ${
                stat.changeType === 'positive' ? 'text-primary' : 'text-gray-600'
              }`}
              >
                {stat.change}
                {' '}
                相比上周
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>最近活动</CardTitle>
            <CardDescription>最近 7 天的用户活动</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="flex items-center">
                  <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">用户登录</p>
                    <p className="text-xs text-gray-500">
                      {i}
                      {' '}
                      小时前
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>快速操作</CardTitle>
            <CardDescription>常用功能快捷入口</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <button type="button" className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              创建新应用
            </button>
            <button type="button" className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              添加用户
            </button>
            <button type="button" className="w-full text-left px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              配置 OIDC
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

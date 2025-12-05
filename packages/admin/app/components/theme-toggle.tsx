import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { useTheme } from '~/components/theme-provider'
import { Button } from '~/components/ui/button'

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect, react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    // 切换逻辑：如果是 system，则根据 resolvedTheme 切换到相反的明确主题
    // 如果是明确主题，则切换到相反的明确主题
    // 这里我们简单地在 light 和 dark 之间切换，不使用 system
    // 或者，如果当前是 system，我们看 resolvedTheme

    if (theme === 'system') {
      setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
    }
    else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  // SSR 防止水合不匹配：在挂载前渲染占位符或默认状态
  // 但为了更好的体验，我们可以渲染一个不带图标的按钮，或者默认图标
  // 由于我们不知道服务器上的主题，最安全的做法是等待挂载
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon">
        <span className="sr-only">切换主题</span>
      </Button>
    )
  }

  const isDark = resolvedTheme === 'dark'

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      title={isDark ? '切换到亮色模式' : '切换到暗色模式'}
    >
      <Sun className={`h-5 w-5 transition-all ${isDark ? '-rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
      <Moon className={`absolute h-5 w-5 transition-all ${isDark ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`} />
      <span className="sr-only">切换主题</span>
    </Button>
  )
}

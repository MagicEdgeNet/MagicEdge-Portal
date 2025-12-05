# @magicedge/shared

MagicEdge Portal 共享组件库和工具包。

## 📦 包含内容

### UI 组件 (`@magicedge/shared/ui`)
shadcn/ui 组件库,包括:
- Avatar
- Badge
- Button
- Card
- Checkbox
- Dialog
- DropdownMenu
- Form
- Input
- Label
- Select
- Separator
- Switch
- Table
- Tabs

### 图标组件 (`@magicedge/shared/icons`)
社交登录平台 SVG 图标:
- GoogleLogo
- GitHubLogo
- MicrosoftLogo
- FacebookLogo
- TwitterLogo
- WeChatLogo
- AlipayLogo
- QQLogo
- DingTalkLogo

### 工具函数 (`@magicedge/shared/utils`)
- `cn()` - Tailwind CSS 类名合并工具

## 🚀 使用方法

```tsx
// 导入 UI 组件
import { Button, Card } from '@magicedge/shared/ui'

// 导入图标
import { WeChatLogo, AlipayLogo } from '@magicedge/shared/icons'

// 导入工具函数
import { cn } from '@magicedge/shared/utils'

// 使用组件
export function MyComponent() {
  return (
    <Card>
      <Button>Click me</Button>
      <WeChatLogo className="w-6 h-6" />
    </Card>
  )
}
```

## 🔧 开发

```bash
# 开发模式(监听文件变化)
bun dev

# 构建
bun run build

# 类型检查
bun run typecheck
```

## 📄 License

Proprietary

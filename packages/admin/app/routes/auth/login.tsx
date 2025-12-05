import type { Route } from './+types/login'
import { Form, redirect, useActionData, useNavigation } from 'react-router'
import * as z from 'zod'
import logo from '~/assets/logo.svg'
import { Button } from '~/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'

const formSchema = z.object({
  email: z.email({ message: '请输入有效的邮箱地址' }),
  password: z.string().min(12, { message: '密码至少需要 12 个字符' }),
})

export function meta(_: Route.MetaArgs) {
  return [
    { title: '登录 - MagicEdge Portal' },
    { name: 'description', content: '登录到 MagicEdge Portal 以访问您的账户' },
  ]
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')

  const result = formSchema.safeParse({ email, password })

  if (!result.success) {
    return {
      errors: z.treeifyError(result.error).properties,
      fields: {
        email: String(email || ''),
        password: String(password || ''),
      },
    }
  }

  // TODO: 调用登录 API
  // eslint-disable-next-line no-console
  console.log('Sign in:', result.data)

  return redirect('/')
}

export default function Login() {
  const actionData = useActionData<typeof action>()
  const navigation = useNavigation()
  const isSubmitting = navigation.state === 'submitting'

  return (
    <div className="flex items-center justify-center min-h-svh bg-linear-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-3">
          <div className="flex justify-center">
            <img src={logo} alt="MagicEdge" className="h-12 w-auto" />
          </div>
          <CardTitle className="text-2xl font-bold text-center">登录到 MagicEdge Portal</CardTitle>
          <CardDescription className="text-center">输入您的凭据以访问您的账户</CardDescription>
        </CardHeader>
        <CardContent>
          <Form method="post" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">邮箱</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="mail@example.com"
                defaultValue={actionData?.fields?.email}
              />
              {actionData?.errors?.email && (
                <p className="text-sm font-medium text-destructive">{actionData.errors.email.errors[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••"
                defaultValue={actionData?.fields?.password}
              />
              {actionData?.errors?.password && (
                <p className="text-sm font-medium text-destructive">{actionData.errors.password.errors[0]}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? '登录中...' : '登录'}
            </Button>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            还没有账户?
            {' '}
            <a href="/auth/register" className="text-primary hover:underline">
              注册
            </a>
          </div>

          {/* Powered by */}
          <div className="pt-2 border-t w-full flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <span>Powered by</span>
            <img src="/favicon.svg" alt="MagicEdge" className="w-4 h-4 opacity-60" />
            <span className="font-semibold">MagicEdge</span>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

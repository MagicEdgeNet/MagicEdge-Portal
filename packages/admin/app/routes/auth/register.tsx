import { Form, redirect, useActionData, useNavigation } from 'react-router'
import * as z from 'zod'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Label } from '~/components/ui/label'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '~/components/ui/card'
import logo from '~/assets/logo.svg'
import type { Route } from "./+types/register";

const formSchema = z.object({
  email: z.email({ message: '请输入有效的邮箱地址' }),
  password: z.string()
    .min(12, { message: '密码至少需要 12 个字符' })
    .regex(/[A-Z]/, { message: '密码需要包含至少一个大写字母' })
    .regex(/[a-z]/, { message: '密码需要包含至少一个小写字母' })
    .regex(/[0-9]/, { message: '密码需要包含至少一个数字' }),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: '两次输入的密码不一致',
  path: ['confirmPassword'],
})

export function meta({}: Route.MetaArgs) {
  return [
    { title: "创建账户 - MagicEdge Portal" },
    { name: "description", content: "创建您的 MagicEdge Portal 账户" },
  ];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData()
  const email = formData.get('email')
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')

  const result = formSchema.safeParse({ email, password, confirmPassword })

  if (!result.success) {
    return {
      errors: result.error.flatten().fieldErrors,
      fields: {
        email: String(email || ''),
        password: String(password || ''),
        confirmPassword: String(confirmPassword || ''),
      },
    }
  }

  // TODO: 调用注册 API
  console.log('Sign up:', result.data)

  return redirect('/auth/login')
}

export default function Register() {
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
          <CardTitle className="text-2xl font-bold text-center">创建账户</CardTitle>
          <CardDescription className="text-center">填写信息以创建您的 MagicEdge 账户</CardDescription>
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
                <p className="text-sm font-medium text-destructive">{actionData.errors.email[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                defaultValue={actionData?.fields?.password}
              />
              {actionData?.errors?.password && (
                <p className="text-sm font-medium text-destructive">{actionData.errors.password[0]}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">确认密码</Label>
              <Input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                placeholder="••••••••"
                defaultValue={actionData?.fields?.confirmPassword}
              />
              {actionData?.errors?.confirmPassword && (
                <p className="text-sm font-medium text-destructive">{actionData.errors.confirmPassword[0]}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? '创建中...' : '创建账户'}
            </Button>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-2">
          <div className="text-sm text-center text-muted-foreground">
            已有账户?{' '}
            <a href="/auth/login" className="text-primary hover:underline">
              登录
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

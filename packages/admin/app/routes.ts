import type { RouteConfig } from '@react-router/dev/routes'
import { index, layout, prefix, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  ...prefix('auth', [
    route('login', 'routes/auth/login.tsx'),
    route('register', 'routes/auth/register.tsx'),
  ]),
  layout('components/layout/dashboard.tsx', [
    ...prefix('dashboard', [
      index('routes/dashboard/overview.tsx'),
      route('applications', 'routes/dashboard/applications.tsx'),
      route('applications/:id', 'routes/dashboard/application-detail.tsx'),
      route('users', 'routes/dashboard/users.tsx'),
      route('roles', 'routes/dashboard/roles.tsx'),
      route('branding', 'routes/dashboard/branding.tsx'),
      route('login-methods', 'routes/dashboard/login-methods.tsx'),
      route('social-connections', 'routes/dashboard/social-connections.tsx'),
      route('register-settings', 'routes/dashboard/register-settings.tsx'),
      route('mfa', 'routes/dashboard/mfa.tsx'),
      route('sso', 'routes/dashboard/sso.tsx'),
      route('oidc', 'routes/dashboard/oidc.tsx'),
      route('settings', 'routes/dashboard/settings.tsx'),
      route('login-experience', 'routes/dashboard/login-experience.tsx'),
    ]),
  ]),
] satisfies RouteConfig

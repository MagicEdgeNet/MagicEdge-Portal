import type { RouteConfig } from '@react-router/dev/routes'
import { index, layout, prefix, route } from '@react-router/dev/routes'

export default [
  index('routes/home.tsx'),
  ...prefix('auth', [
    route('login', 'routes/auth/login.tsx'),
    route('register', 'routes/auth/register.tsx'),
  ]),
  layout('components/layout/DashboardLayout.tsx', [
    ...prefix('dashboard', [
      index('routes/dashboard/Overview.tsx'),
      route('applications', 'routes/dashboard/Applications.tsx'),
      route('applications/:id', 'routes/dashboard/ApplicationDetail.tsx'),
      route('users', 'routes/dashboard/Users.tsx'),
      route('roles', 'routes/dashboard/Roles.tsx'),
      route('branding', 'routes/dashboard/Branding.tsx'),
      route('login-methods', 'routes/dashboard/LoginMethods.tsx'),
      route('social-connections', 'routes/dashboard/SocialConnections.tsx'),
      route('register-settings', 'routes/dashboard/RegisterSettings.tsx'),
      route('mfa', 'routes/dashboard/MFA.tsx'),
      route('sso', 'routes/dashboard/SSO.tsx'),
      route('oidc', 'routes/dashboard/OIDC.tsx'),
      route('settings', 'routes/dashboard/Settings.tsx'),
      route('login-experience', 'routes/dashboard/LoginExperience.tsx'),
    ]),
  ]),
] satisfies RouteConfig

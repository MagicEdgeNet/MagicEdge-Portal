import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Button } from "~/components/ui/button";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (<>
    <p>Test Page (Admin)</p>
    <Button><Link to="/dashboard">Dashboard</Link></Button>
    <Button><Link to="/auth/login">Login</Link></Button>
    <Button><Link to="/auth/register">Register</Link></Button>
  </>)
}

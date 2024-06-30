import LoginForm from "@/components/LoginForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/home");

  return (
    <div className='bg-slate-800 text-white min-h-[100vh]'>
      <LoginForm />
    </div>
  );
}
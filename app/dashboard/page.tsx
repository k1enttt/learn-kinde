import Avatar from "@/components/avatar";
import { Button } from "@/components/ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export default async function Dashboard() {
  const { getUser, isAuthenticated } = getKindeServerSession();

  var user = await getUser();
  console.log(user);

  return (await isAuthenticated()) ? (
    <main className="flex items-center justify-center flex-col">
      <h1 className="text-xl font-bold text-blue-500">This is my dashboard</h1>
    </main>
  ) : (
    <center>
      <div className="text-xl font-bold text-red-500">You must login first</div>
      <LoginLink>
        <Button>Log in</Button>
      </LoginLink>
    </center>
  );
}

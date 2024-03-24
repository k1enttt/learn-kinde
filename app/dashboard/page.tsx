import Avatar from "@/components/avatar";
import { Button } from "@/components/ui/button";
import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Dashboard() {
    return (
      <main className="flex items-center justify-center flex-col">
        <Avatar />
        <LogoutLink>
            <Button>Log out</Button>
        </LogoutLink>
      </main>
    );
  }
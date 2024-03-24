import { Button } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function NavbarButtons() {
  return (
    <div className="flex items-center gap-x-5">
      <LoginLink>
        <Button>Sign in</Button>
      </LoginLink>

      <RegisterLink>
        <Button>Sign up</Button>
      </RegisterLink>
    </div>
  );
}

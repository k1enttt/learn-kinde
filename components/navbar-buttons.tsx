"use client";
import { Button } from "./ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import Avatar from "./avatar";

export default function NavbarButtons({ isLoggedIn }: { isLoggedIn: boolean }) {
  const { user, isAuthenticated, isLoading } = useKindeBrowserClient();

  if (isLoading) return <div>Loading...</div>;
  return (
    <div className="flex items-center gap-x-5">
      {isAuthenticated == true ? (
        <>
          <Avatar />
          {user == null ? "No user" : user.given_name}
          <LogoutLink>
            <Button>Log out</Button>
          </LogoutLink>
        </>
      ) : (
        <>
          <LoginLink>
            <Button>Sign in</Button>
          </LoginLink>
          <RegisterLink>
            <Button>Sign up</Button>
          </RegisterLink>
        </>
      )}
    </div>
  );
}

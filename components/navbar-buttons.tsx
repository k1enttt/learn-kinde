import { Button } from "./ui/button";

export default function NavbarButtons() {
    return (
        <div className="flex items-center gap-x-5">
            <Button>Sign in</Button>
            <Button>Sign up</Button>
        </div>
    );
}
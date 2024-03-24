import NavbarButtons from "./navbar-buttons";
import NavbarLogo from "./navbar-logo";

export default function Navbar() {
return (
    <nav className='border-b bg-background h-[10vh] flex items-center'>
        <div className="container flex items-center justify-between">
            <NavbarLogo />
            <NavbarButtons />
        </div>
    </nav>
);
}
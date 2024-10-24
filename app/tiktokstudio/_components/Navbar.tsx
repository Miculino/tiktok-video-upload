// Components
import Logo from "./Logo";
import UserMenu from "./UserMenu";

export default function Navbar() {
  return (
    <div className="h-[62px] w-full border-b border-b-gray-200 bg-white flex items-center justify-between px-4 pr-10 fixed top-0">
      <Logo />
      <UserMenu />
    </div>
  );
}

import { ButtonDemo } from "./Cta"
import Logo from "./Logo"
import { NavigationMenuBar } from "./Navbar"
import { SheetDemo } from "./SideBar";


const NavMenu = () => {
  return (
    <main className="flex align-center justify-between px-12  border-b-2 pb-3 bg-slate-400 ">
        <Logo/>
        <NavigationMenuBar />
        <ButtonDemo/>
        <SheetDemo/>

    </main>
  )
}

export default NavMenu

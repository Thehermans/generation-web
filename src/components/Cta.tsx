import { Button } from "@/components/ui/button"
import Link from "next/link"
import { VscAccount } from "react-icons/vsc";
import { CiSearch } from "react-icons/ci";



export function ButtonDemo() {
  return (
    
    <div className="align-center justify-center pt-1 gap-3 hidden md:flex text-white ">
      <Button className="bg-slate-900 rounded-[3px]">Button</Button>
      <Link href={'hey'}><CiSearch className="text-4xl"/></Link>
      <Link href={'hey'}><VscAccount className="text-3xl mt-1"/></Link>
    </div>
  )
}

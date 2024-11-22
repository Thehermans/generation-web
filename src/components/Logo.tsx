import Image from "next/image"

const Logo = () => {
  return (
    <div className="flex align-middle justify-center">
      <Image
        src="logo1.svg"
        width={100}
        height={100}
        alt="logo"
        quality={100}
      />

    </div>
  )
}

export default Logo

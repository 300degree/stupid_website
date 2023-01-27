import styles from '@/styles/globals.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <header>
        <h2 className="logo">Logo</h2>
        <nav className="navigation">
          <Link href={"/"}>Home</Link>
          <Link href={"/Character"}>Character</Link>
          <Link href={"/Challenge"}>Challenge</Link>
	        <button className="btnLogin-popup">Login</button>
        </nav>
      </header>
    </>
  )
}

export default Navbar

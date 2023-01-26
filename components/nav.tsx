import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <h2 className="logo">logo</h2>
      <nav className="navigation">
        <Link href="/">Home</Link>
        <Link href="/challenge">Challenge</Link>
        <Link href="/">About</Link>
      </nav>
    </div>
  )
}

export default Navbar

import styles from '@/styles/Nav.module.css'
import Image from 'next/image'

const Navbar = () => {
  return (
    <>
      <header>
        <h2 className={styles.logo}>
          Logo
        </h2>
        <nav className={styles.navigation}>
          <a href={'/'}>Home</a>
          <a href={'/character'}>Character</a>
          <a href={'/category'}>Category</a>
          <a href={'/challenge'}>Challenge</a>
          {/* <button className={styles.navigation}>Login</button> */}
        </nav>
      </header>
    </>
  )
}

export default Navbar

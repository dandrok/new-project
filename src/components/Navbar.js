import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <section className={styles.header}>
      <div className={styles.header__left}>LOGO</div>
      <nav className={styles.header__right}>
        <ul>
          <li>about</li>
          <li>contact</li>
          <li>more</li>
        </ul>
      </nav>
    </section>
  )
}

export default Navbar

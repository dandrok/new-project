import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <p>made by</p>
        <a href='https://github.com/dandrok'>dandrok</a>
      </div>
    </footer>
  )
}

export default Footer

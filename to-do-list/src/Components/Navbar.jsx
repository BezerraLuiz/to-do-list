import styles from './styles/Navbar.module.css';
import logo from '../assets/checklist.png'
import login from '../assets/login.png'

function Navbar() {

  return(
    <>
      <nav id={styles.navbar}>
        <ul><img id={styles.logo} src={logo}/></ul>
          <div className={styles.container_btn}>
          <button className={styles.btn}>Exibir todas</button>
          <button className={styles.btn}>Em espera</button>
          <button className={styles.btn}>Em andamento</button>
          <button className={styles.btn}>Encerradas</button>
        </div>
        <ul><img src={login}/></ul>
      </nav>
    </>
  )
};

export default Navbar

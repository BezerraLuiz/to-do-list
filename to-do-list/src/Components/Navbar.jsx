import styles from './styles/Navbar.module.css';
import logo from '../assets/checklist.png'
import login from '../assets/login.png'

function Navbar() {

  return(
    <>
      <nav id={styles.navbar}>
        <ul><img id={styles.logo} src={logo}/></ul>
        <ul><h1 id={styles.titulo}>My Tasks</h1></ul>
        <ul><img src={login}/></ul>
      </nav>
    </>
  )
};

export default Navbar

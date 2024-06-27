import { Link } from 'react-router-dom';
import styles from './styles/MenuPrincipal.module.css'

function MenuPrincipal() {

  return (
    <>
      <div id={styles.container_titulo}>
        <h1 id={styles.titulo}>Vision</h1>
        <div style={{ backgroundColor: 'black', width: '200px', height: '3px' }}></div>
        <p style={{ fontFamily: '"Mulish", sans-serif', fontSize: '15px', marginTop: '7px'}}>Sua to-do list</p>
      </div>
      <div className={styles.container_btn}>
      <Link to={'/iniciar_task'}><button className={styles.btn}>Iniciar Task</button></Link>
      </div>
      <div>

      </div>
    </>
  )
};

export default MenuPrincipal;
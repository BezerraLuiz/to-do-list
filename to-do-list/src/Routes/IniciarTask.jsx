import styles from './styles/IniciarTask.module.css';

function IniciarTask() {

  return (
    <>
      <div id={styles.container_main}>
        <div id={styles.container_task}>
          <h1 style={{ margin: '10px 0px 0px 10px' }}>Iniciar Nova Task</h1>
          <div style={{ width: '268px', height: '3px', backgroundColor: 'black', marginLeft: '8px', marginBottom: '10px' }}></div>
          <form id={styles.form} action="">
            <label className={styles.label_form} htmlFor="">Nome</label>
            <input className={styles.input_form} type="text" autoComplete='off' required/>
            <label className={styles.label_form} htmlFor="">Prazo</label>
            <input className={styles.input_form} type="date" autoComplete='off' required/>
            <label className={styles.label_form} htmlFor="">Complexidade</label>
            <select className={styles.input_form} name="" id="" required>
              <option value="selecionar">Selecionar</option>
              <option value="facil">Fácil</option>
              <option value="media">Média</option>
              <option value="dificil">Difícil</option>
            </select>
            <label className={styles.label_form} htmlFor="">Descrição</label>
            <input className={styles.input_form} type="text" autoComplete='off' required/>
          </form>
        </div>
      </div>
    </>
  )
};

export default IniciarTask;
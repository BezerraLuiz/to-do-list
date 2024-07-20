import { useState } from "react";
import "./App.css";
import { FaSearch } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { MdDelete } from "react-icons/md";

function App() {
  const [nameTask, setNameTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [pesquisa, setPesquisa] = useState("");

  const criarTask = (event) => {
    event.preventDefault();

    if (nameTask != "") {
      // Adiciono dentro do setTask, o nameTask que foi recebido através do 'value' no input.
      setTasks([...tasks, { name: nameTask, id: Date.now() }]);
      setNameTask("");
    }
  };

  const deleteTask = (id) => {
    const filterIdTasks = tasks.filter((task) => task.id != id);
    setTasks(filterIdTasks);
  };

  const filteredTasks = tasks.filter((task) =>
    task.name.toLowerCase().includes(pesquisa.toLowerCase())
  );

  const toggleCheckTask = (id) => {    
    const checkTask = tasks.map((task) =>
      task.id == id ? {...task, checked: !task.checked } : task
    );
    setTasks(checkTask)
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <h1>Tarefas</h1>
          <div className="form">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="container_input">
                <input
                  className="input"
                  type="text"
                  placeholder="Pesquisar task"
                  value={pesquisa}
                  onChange={(event) => setPesquisa(event.target.value)}
                />
                <FaSearch className="icons" />
              </div>
            </form>
            <form onSubmit={criarTask}>
              <div className="container_input">
                <input
                  className="input"
                  type="text"
                  placeholder="Criar nova task"
                  value={nameTask}
                  onChange={(event) => setNameTask(event.target.value)}
                />
                <button>
                  <IoIosAdd />
                </button>
              </div>
            </form>
          </div>

          <div className="separador"></div>

          {filteredTasks.map((task) => (
            <div key={task.id} className="tasks">
              <h3>{task.name}</h3>
              <div className="action-task">
                <span
                  className="check-task"
                  style={{
                    backgroundColor: task.checked ? "black" : "white"
                  }}
                  onClick={() => toggleCheckTask(task.id)}
                ></span>
                <MdDelete
                  className="icons"
                  onClick={() => deleteTask(task.id)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;

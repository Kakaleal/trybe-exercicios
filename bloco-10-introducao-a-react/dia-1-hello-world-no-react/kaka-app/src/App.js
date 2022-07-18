
import React from "react";
import Task from "./Task";

const tarefas =  ['ACORDAR', 'TOMAR CAFÉ', 'MALHAR', 'ARRUMAR CASA'];
class App extends React.Component{
  render() {
   return(
    <ul>{tarefas.map(tarefas => Task(tarefas)) } </ul>
   )
  }
}
  

export default App;

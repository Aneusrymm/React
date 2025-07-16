import Ngetes from "./hello";
import Counter from "./Counter"
import Greeting from "./Greeting";
import Siswa from "./Siswa"
import NamaInput from "./NamaInput";
import TodoList from "./TodoList";
const siswa = ["Nabil", "Dina", "Rafi"];

function App(){
  return (
    <div>
      <TodoList />
      {/* <Ngetes /> */}
      <Counter />
      <Greeting nama="Aji"/>
      <h1>Input Form Sederhana</h1>
      <NamaInput />
      <h1>Daftar Siswa</h1>
      {
        siswa.map((item)=>(
        <Siswa name={item}/>
          )
        )
      }
    </div>
  );
}

export default App;

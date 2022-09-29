import logo from './logo.svg';
import './App.css';
import Todolist from './components/todolist';

function App() {
  return (
    <div className="App">
        <Todolist titlelabel="TODO LIST NAME: " titleplaceholder="Podaj imie i nazwisko" />
    </div>
  );
}

export default App;

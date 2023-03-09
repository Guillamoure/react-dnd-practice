import './App.css';
import Field from './field';
import Storage from './storage';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <Field />
        <Storage />
      </DndProvider>
    </div>
  );
}

export default App;

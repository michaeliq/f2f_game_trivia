import './App.css';
import PanelQuestionGame from './components/PanelQuestionGame';
import ContainerGame from './components/ContainerGame';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import PanelQr from './components/PanelQr';
import PanelOptions from './components/PanelOptions';

function App() {
  return (
    <div className="App">
      <Router>

        <Routes>
          <Route exact path="/" element={<Navigate to="present-question" />}>
          </Route>
          <Route path="present-question" element={
            <ContainerGame>
              <PanelQuestionGame />
            </ContainerGame>
          }>
          </Route>
          <Route path="present-options" element={
            <ContainerGame>
              <PanelOptions />
            </ContainerGame>
          }>
          </Route>
        </Routes>

      </Router>

    </div>
  );
}

export default App;

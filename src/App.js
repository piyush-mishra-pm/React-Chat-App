import Header from './components/Header';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';

import './App.css';

function App() {
  return (
    <div>
      <div style={{ height: '5vh' }}>
        <Header />
      </div>
      <div className="ui two column celled grid" style={{ height: '93vh' }}>
        <SidePanel />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;

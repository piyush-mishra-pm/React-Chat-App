import Header from './components/Header';
import MainPanel from './components/MainPanel';
import SidePanel from './components/SidePanel';

function App() {
  return (
    <div>
      <Header />
      <div className="ui two column celled grid">
        <SidePanel />
        <MainPanel />
      </div>
    </div>
  );
}

export default App;

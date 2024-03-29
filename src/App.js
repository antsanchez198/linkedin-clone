import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';


function App() {
  return (
    <div className="app">

    {/* Header */}
    <Header/>
    
    {/* App Body */}
    <div className='app-body'>
      {/* Sidebar */}
      <Sidebar />
      {/* Feed */}
      {/* Widgets */}
    </div>

    </div>
  );
}

export default App;

import Sidenav from './Compontes/Sidenav';
import Feed from './Feed';
import './Csscompantes/App.css';
import Suggest from './Suggest';
function App() {
  return (
    <div className="appdiv">
      <div className='w-25'>
        <Sidenav />
      </div>
      <div className="w-50"><Feed /></div>
      <div className='w-25'><Suggest /></div>
    </div>
  );
}

export default App;

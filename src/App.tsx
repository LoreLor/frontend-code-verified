import AppRoutes from './routes/Routes';
import './App.css';
import StickyFoot from './components/dashboard/StickyFoot';



function App() {
  return (
    <div className="App">
      <AppRoutes />  
      <StickyFoot />
    </div>
  );
}

export default App;

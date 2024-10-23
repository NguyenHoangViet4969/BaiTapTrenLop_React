import './App.css'
import Slideshow from './components/Slideshow';
import { BrowserRouter } from 'react-router-dom';
function App() {

  return (
    <BrowserRouter basename="/BaiTapTrenLop_React/">
      <Slideshow />
    </BrowserRouter>
  );
}

export default App

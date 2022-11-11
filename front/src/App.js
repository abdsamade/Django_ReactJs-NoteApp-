import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import { NoteList } from './pages/NoteList';
import {BrowserRouter as Router,Route} from 'react-router-dom'

import { NotePage } from './pages/NotePage';
function App() {
  return (
      <Router>
    <div className="container dark">
      <div className='app'>
        <Route path='/' exact  component={NoteList} />
        <Route path='/note/:id' component={NotePage} />
        <NoteList />  
    </div>
    </div>
    </Router >
  );
}

export default App;

import './App.css';
import Router from './router/index';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet='utf-8'/>
        <title>Accord - Design Collaborator</title>
      </Helmet>
      <Router/>
    </div>
  );
}

export default App;

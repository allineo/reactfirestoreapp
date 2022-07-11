import { useState } from 'react';
import './App.css';
import { FeedbackForm } from './form';
import { ListFeedback } from './list';

function App() {

  const [AppMode, setAppMode] = useState(0);

  if (AppMode === 'form') {
    return (<FeedbackForm setAppMode={setAppMode} />);

  } else if (AppMode === 'list') {
    return (<div>
      <ListFeedback />
      <br />
      <button onClick={() => setAppMode('form')}>
        ENVIE UM FEEDBACK
      </button> &nbsp; &nbsp; 
      <button onClick={() => setAppMode('home')}>
        INÍCIO
      </button>
    </div>);

  } else {
    return (<div>
      <img src='logoapp.png' alt='Logo do App' height='200px' />
      <br /><br />
      <button onClick={() => setAppMode('list')}>
        ENTRAR
      </button>
    </div>);
  }
}

export default App;
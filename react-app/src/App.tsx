import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <div>
      <Button
        color="secondary"
        onClick={() => setShowAlert(true)}
      >
        Click me
      </Button>

      {showAlert &&
        <Alert onClose={() => setShowAlert(false)}>
          My Alert
        </Alert>
      }
    </div >
  );
};

export default App

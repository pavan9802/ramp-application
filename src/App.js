
import './App.css';
import { useEffect, useState } from 'react';
import Typewriter from './Typewriter';

function App() {
  const [flag, setFlag] = useState("")
  const [isLoading, setIsLoading] = useState (false)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
          const response = await fetch('https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/756e74');
          const result = await response.text();
          setFlag(result)
          console.log(result)
      } catch (error) {
          console.log(error)
      } finally {
        setIsLoading(false);
      }
  };
  fetchData()


  }, [])
  
  return (
    <div className="App">
      {isLoading ? "Loading...": <Typewriter text={flag} speed={500}/>}
      <div>
      </div>
    </div>
    
  );
}

export default App;


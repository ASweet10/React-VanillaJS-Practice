import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [color, setColor] = useState("")
  const [answers, setAnswers] = useState<string>([])

  const GenerateRandomColor = () => {
    const n = 6
    const hexaDecimalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    let randomValues = hexaDecimalValues.sort(() => 0.5 - Math.random()).slice(0, n)

    return '#' + randomValues
  }
  

  useEffect(() => {
    const answerColor = GenerateRandomColor()
    const colorOne = GenerateRandomColor()
    const colorTwo = GenerateRandomColor()

    setAnswers(answerColor, colorOne, colorTwo)
  }, [])

  return (
    <div className="App">
      <div className='color-square' style={{ backgroundColor: `${answerColor}` }}>{answerColor}</div>
      
    </div>
  );
}

export default App;

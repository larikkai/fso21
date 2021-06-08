import React, { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}> {text} </button>
)

const Statistic = ({ value, text, symbol }) => <tr><td>{text}</td><td>{value} {symbol}</td></tr>

const Statistics = ({good, neutral, bad}) => {
  const total = good + neutral + bad
  const avg = (good - bad)/total
  const positive = (good / total)*100
  if (total === 0) return <div>No feedback given</div>
  return (
    <table>
      <tbody>
        <Statistic text={"good"} value={good}/>
        <Statistic text={"neutral"} value={neutral}/>
        <Statistic text={"bad"} value={bad}/>
        <Statistic text={"all"} value={total}/>
        <Statistic text={"average"} value={avg}/>
        <Statistic text={"positive"} value={positive} symbol={"%"}/>
      </tbody>
    </table>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text={"give feedback"}/>
      <Button handleClick={() => setGood(good + 1)} text="good"/>
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
      <Button handleClick={() => setBad(bad + 1)} text="bad"/>
      <Header text={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App
import React, { useState } from 'react'

const Header = ({ text }) => <h1>{text}</h1>

const Anecdote = ({ anecdote }) => <p>{anecdote}</p>

const Votes = ({ value }) => <p>has {value} votes</p>

const Button = ({ handleClick, text }) => <button onClick={handleClick}> {text} </button>

const Content = ({ anecdote, value }) => {
  return (
    <div>
      <Anecdote anecdote={anecdote}/>
      <Votes value={value}/>
    </div>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(new Array(6).fill(0))
  const [mostVotes, setMostVotes] = useState(0)

  const handleAnecdote = () => {
    const random = Math.floor(Math.random()*6)
    setSelected(random)
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    if(copy[selected] > votes[mostVotes]) setMostVotes(selected)
  }

  return (
    <div>
      <Header text={"Anecdote of the day"}/>
      <Content anecdote={anecdotes[selected]} value={votes[selected]}/>
      <Button handleClick={handleVote} text={"vote"}/>
      <Button handleClick={handleAnecdote} text={"next anecdote"}/>
      <Header text={"Anecdote with most votes"}/>
      <Content anecdote={anecdotes[mostVotes]} value={votes[mostVotes]}/>
    </div>
  )
}

export default App
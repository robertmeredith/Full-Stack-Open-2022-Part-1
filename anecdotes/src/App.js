import { useState } from 'react'

const Anecdote = ({ quote, points }) => {
  return (
    <>
      <p>{quote}</p>
      <p>has {points} votes</p>
    </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients',
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  const [hasVoted, setHasVoted] = useState(false)

  const mostPopular = points.indexOf(Math.max(...points))

  const handleClick = () => {
    let index = selected
    while (index === selected) {
      index = randomIndex()
    }
    setSelected(index)
  }

  const randomIndex = () => {
    return Math.floor(Math.random() * anecdotes.length)
  }

  const handleVote = () => {
    const newPoints = [...points]
    newPoints[selected] += 1
    setPoints(newPoints)
    !hasVoted && setHasVoted(true)
  }

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <Anecdote quote={anecdotes[selected]} points={points[selected]} />
      <div>
        <button onClick={handleClick}>next anecdote</button>
        <button onClick={handleVote}>vote</button>
      </div>
      <h2>Anecdote with the most votes</h2>
      {!hasVoted ? (
        <p>No votes have been cast yet</p>
      ) : (
        <Anecdote quote={anecdotes[mostPopular]} points={points[mostPopular]} />
      )}
    </div>
  )
}

export default App

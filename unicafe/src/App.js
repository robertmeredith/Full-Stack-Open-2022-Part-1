import { useState } from 'react'

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>
}

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td style={{ paddingRight: '15px' }}>{text}</td>
      <td>{value}</td>
    </tr>
  )
}

const Statistics = ({ good, neutral, bad }) => {
  const totalVotes = good + neutral + bad

  return (
    <div>
      <h2>Statistics</h2>
      {totalVotes === 0 ? (
        <p>No feedback provided</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text="good" value={good} />
            <StatisticLine text="neutral" value={neutral} />
            <StatisticLine text="bad" value={bad} />
            <StatisticLine text="all" value={totalVotes} />
            <StatisticLine text="average" value={(good - bad) / totalVotes} />
            <StatisticLine
              text="positive"
              value={`${(good / totalVotes) * 100} %`}
            />
          </tbody>
        </table>
      )}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [totalVotes, setTotalVotes] = useState(0)

  const handleVote = (feedback) => {
    if (feedback === 'good') {
      setGood(good + 1)
    }
    if (feedback === 'neutral') {
      setNeutral(neutral + 1)
    }
    if (feedback === 'bad') {
      setBad(bad + 1)
    }
    setTotalVotes(totalVotes + 1)
  }

  return (
    <div>
      <div>
        <h2>Give Feedback</h2>
        <Button handleClick={() => handleVote('good')} text="good" />
        <Button handleClick={() => handleVote('neutral')} text="neutral" />
        <Button handleClick={() => handleVote('bad')} text="bad" />
      </div>
      <div>
        <Statistics good={good} neutral={neutral} bad={bad} />
      </div>
    </div>
  )
}

export default App

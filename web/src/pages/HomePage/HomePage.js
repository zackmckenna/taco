import { useState } from 'react'
import { Link } from '@redwoodjs/router'
import CandidateCell from 'src/components/CandidateCell'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('taco')
  return (
    <>
      <h1>Taco</h1>
      <p>Find tacos near you</p>
      <CandidateCell searchTerm={searchTerm} />
    </>
  )
}

export default HomePage

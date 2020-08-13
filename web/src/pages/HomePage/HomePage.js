import { useState, useEffect } from 'react'
import { Link } from '@redwoodjs/router'
import CandidateCell from 'src/components/CandidateCell'
import { Button } from 'react-bootstrap'

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('taco')
  const [findCandidate, setFindCandidate] = useState(false)
  const [latitude, setLatitude] = useState(null)
  const [longoitude, setLongitude] = useState(null)
  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {})
    } else {
      console.log('location not available')
    }
  })
  const handleFindCandidate = () => {
    setFindCandidate(!findCandidate)
  }

  return (
    <>
      <h1>Taco</h1>
      <p>Find tacoms near you</p>
      <Button onClick={() => handleFindCandidate()}>Taco</Button>
      {findCandidate && <CandidateCell searchTerm={searchTerm} />}
    </>
  )
}

export default HomePage

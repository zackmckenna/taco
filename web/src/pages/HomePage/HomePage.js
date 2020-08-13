import { Link } from '@redwoodjs/router'

const HomePage = () => {
  return (
    <>
      <h1>Taco</h1>
      <p>
        Find tacos near you
        <Link to="home">routes.home()</Link>`
      </p>
    </>
  )
}

export default HomePage

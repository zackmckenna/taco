export const QUERY = gql`
  query CandidateQuery {
    candidate {
      id
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ candidate }) => {
  return JSON.stringify(candidate)
}

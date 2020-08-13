export const QUERY = gql`
  query($searchTerm: String!) {
    candidate: getPlaces(searchTerm: $searchTerm) {
      candidates {
        name
        rating
        formatted_address
        open_now
        photos {
          height
          width
        }
      }
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

export const Success = ({ candidate }) => {
  return JSON.stringify(candidate)
}

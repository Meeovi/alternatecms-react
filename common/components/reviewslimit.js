import gql from 'graphql-tag';
import dynamic from 'next/dynamic'

const findManyReviews = gql`{
    findManyReviews(take: 5) {
        content
        created_at
        first_name
        id
        last_name
        websites
    }
}`

  const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
    const { ApolloTableQL } = m
    return ApolloTableQL
  }), { ssr: false })
  
  export function Reviewslimit() {
      return (
      <div class="col">
        <ApolloTableQL query={findManyReviews} sort pagination={
    {
      pageLimit: 5,
      pageNeighbors: 2,
      currentPage: 1,
      onPageChanged: ({currentPage, totalPages, pageLimit, totalRecords}) => {
        alert(currentPage)
      }
    }
  }  />
      </div>
  
   )
  }
  
  export default Reviewslimit


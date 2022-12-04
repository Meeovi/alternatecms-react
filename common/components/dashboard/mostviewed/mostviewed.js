import gql from 'graphql-tag';
import dynamic from 'next/dynamic'

const findManyProducts = gql`{
    findManyProducts(take: 5) {
      name
      price
      quantity_per_source
  }
}`

  const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
    const { ApolloTableQL } = m
    return ApolloTableQL
  }), { ssr: false })
  
  export function Mostviewed() {
      return (
      <div class="col">
        <ApolloTableQL query={findManyProducts} sort pagination={
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
  
  export default Mostviewed



import dynamic from 'next/dynamic'

const findManyCustomers = `{
    query findManyCustomers(take: 5, orderBy: {customer_since: desc}) {
      email
      first_name
      last_name
      customer_since
    }
}`
  
  const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
    const { ApolloTableQL } = m
    return ApolloTableQL
  }), { ssr: false })
  
  export function NewCustomers() {
      return (
      <div class="col">
        <ApolloTableQL query={findManyCustomers} sort pagination={
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
  
  export default NewCustomers
  
  
  



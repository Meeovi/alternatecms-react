import dynamic from 'next/dynamic'
import { loader } from 'graphql.macro';

const findManyProjects = loader('../../../../modules/graphql/query/findManyProjects.gql')

const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
  const { ApolloTableQL } = m
  return ApolloTableQL
}), { ssr: false })

export function Projects() {
    return (
    <div className="col">
      <ApolloTableQL query={findManyProjects} sort pagination={
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

export default Projects



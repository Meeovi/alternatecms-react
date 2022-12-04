import dynamic from 'next/dynamic'
import { loader } from 'graphql.macro';

const findManyTransactions = loader('../../../../modules/graphql/query/findManyTransactions.gql')

const ApolloTableQL = dynamic(() => import('react-tableql').then((m) => {
  const { ApolloTableQL } = m
  return ApolloTableQL
}), { ssr: false })

export function Sales() {
    return (
    <div className="col">
      <ApolloTableQL query={findManyTransactions} sort />
    </div>

 )
}

export default Sales



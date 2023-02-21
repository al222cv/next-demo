import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'apollo-server-micro'
import { log } from 'next-axiom'

const brandType = gql`
  type Brand {
    name: String!
  }

  type Query {
    brands: [Brand]
  }
`

const brandResolvers = {
  Query: {
    brands: async () => {
      log.debug('Graphql brands')
      return [
        {
          name: 'Line'
        },
        {
          name: 'Dynastar'
        },
        {
          name: 'Salomon'
        }
      ]
    }
  }
}

const types = [brandType]
const resolvers = [brandResolvers]

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types),
  resolvers: mergeResolvers(resolvers)
})

export default schema

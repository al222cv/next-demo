import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'apollo-server-micro'
import data from '../data/brands'

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
      return data
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

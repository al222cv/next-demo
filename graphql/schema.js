import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { gql } from 'graphql-tag'

const brandType = gql`
  type Brand {
    name: String!
  }

  type Query {
    brands: [Brand]
  }
`

export const getBrands = async () => {
  console.log('Graphql brands')
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

const brandResolvers = {
  Query: {
    brands: getBrands
  }
}

const types = [brandType]
const resolvers = [brandResolvers]

const schema = makeExecutableSchema({
  typeDefs: mergeTypeDefs(types),
  resolvers: mergeResolvers(resolvers)
})

export default schema

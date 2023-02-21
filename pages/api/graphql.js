import { ApolloServer } from 'apollo-server-micro'
import Cors from 'micro-cors'
import schema from '../../graphql/schema'

const cors = Cors()

export const apolloServer = new ApolloServer({
  schema,
  csrfPrevention: true,
  introspection: true
})

const startServer = apolloServer.start()

export const executeOperation = apolloServer.executeOperation

export default cors(async function handler (req, res) {
  if (req.method === 'OPTIONS') {
    res.end()
    return false
  }

  await startServer
  await apolloServer.createHandler({
    path: '/api/graphql'
  })(req, res)
})

export const config = {
  api: {
    bodyParser: false
  }
}

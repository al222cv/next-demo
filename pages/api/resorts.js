import { log } from 'next-axiom'

export default async function handler (req, res) {
  log.debug('Api Resorts')
  res.status(200).json([
    {
      name: 'Montafon'
    },
    {
      name: 'Chamonix'
    },
    {
      name: 'Åre'
    }
  ])
}

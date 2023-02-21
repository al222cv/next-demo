import { log } from 'next-axiom'

export default async function handler (req, res) {
  log.debug('Api brands')
  res.status(200).json([
    {
      name: 'Line'
    },
    {
      name: 'Dynastar'
    },
    {
      name: 'Salomon'
    }
  ])
}

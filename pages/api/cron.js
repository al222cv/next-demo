import { log } from 'next-axiom'

export default function handler (req, res) {
  log.debug('Cron job')
  res.status(200).end('Hello Cron!')
}

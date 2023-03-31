export default function handler (req, res) {
  console.debug('Cron job')
  res.status(200).end('Hello Cron!')
}

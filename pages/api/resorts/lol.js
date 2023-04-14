export default async function handler (req, res) {
  console.debug('Api lol')
  res.status(200).json([
    {
      name: 'Lol'
    }
  ])
}

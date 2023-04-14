export default async function handler (req, res) {
  console.debug('Api resorts')
  res.status(200).json([
    {
      name: 'Åre'
    },
    {
      name: 'Sälen'
    }
  ])
}

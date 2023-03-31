export default async function handler (req, res) {
  console.debug('Api brands')
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

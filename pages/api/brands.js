import data from '../../data/brands'
export default async function handler (req, res) {
  res.status(200).json(data)
}
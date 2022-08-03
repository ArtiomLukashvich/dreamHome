// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { houseItems } from './data/houseItems'

export default function handler(req, res) {
	res.status(200).json(houseItems)
}

export default function handler(req, res) {
  res.json(global.orders || [])
}
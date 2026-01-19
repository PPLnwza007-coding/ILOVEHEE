export default function handler(req, res) {
  global.orders = []
  res.json({ success: true })
}

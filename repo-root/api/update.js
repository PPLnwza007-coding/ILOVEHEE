export default function handler(req, res) {
  const { id, status } = req.body
  const order = global.orders.find(o => o.id == id)
  if (order) order.status = status
  res.json({ success: true })
}

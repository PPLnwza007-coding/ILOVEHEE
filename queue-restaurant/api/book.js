global.orders = global.orders || []

export default function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const { name, phone, people, time } = req.body

  if (!name || !phone || !people || !time) {
    return res.status(400).json({ error: 'ข้อมูลไม่ครบ' })
  }

  global.orders.push({
    id: Date.now(),
    name,
    phone,
    people,
    time,
    status: 'รอดำเนินการ',
    created: new Date().toLocaleString()
  })

  res.json({ success: true })
}
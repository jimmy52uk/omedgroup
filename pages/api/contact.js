
export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    // In production, forward to email or CRM
    res.status(200).json({ success: true, received: data });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

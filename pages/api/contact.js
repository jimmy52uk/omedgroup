
export default function handler(req, res) {
  if (req.method === 'POST') {
    // In production: validate and forward to email/CRM
    const data = req.body;
    res.status(200).json({ success: true, received: data });
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

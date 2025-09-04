// Vercel serverless function for contact form
export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        error: 'Missing required fields: name, email, and message are required' 
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Invalid email format' });
    }

    // Service validation
    const validServices = ['property-management', 'real-estate-sales', 'tenant-services', 'investment-advisory', 'other', ''];
    if (service && !validServices.includes(service)) {
      return res.status(400).json({ error: 'Invalid service type' });
    }

    // Create contact inquiry object
    const inquiry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone ? phone.trim() : '',
      service: service || '',
      message: message.trim(),
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    };

    // Log the inquiry (in production, you'd save to database)
    console.log('Contact Form Submission:', inquiry);

    // Send email notification (optional - requires SMTP setup)
    try {
      await sendEmailNotification(inquiry);
    } catch (emailError) {
      console.warn('Email notification failed:', emailError.message);
      // Continue without failing the request
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
      id: inquiry.id
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ 
      error: 'An error occurred while processing your inquiry. Please try again.' 
    });
  }
}

async function sendEmailNotification(inquiry) {
  // Email functionality can be added here with services like:
  // - SendGrid
  // - Nodemailer with SMTP
  // - Resend
  // For now, we'll just log the inquiry
  console.log('Email would be sent to: info@dellpropertymanagement.com');
  console.log('Inquiry details:', inquiry);
}

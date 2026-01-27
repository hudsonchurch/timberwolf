import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Authorization, X-Client-Info, apikey, Content-Type, X-Application-Name',
};

// Helper function to determine from email
function getFromEmail() {
  const domain = Deno.env.get('RESEND_DOMAIN');
  if (domain) {
    return `send@${domain}`;
  }
  return 'onboarding@resend.dev'; // Default fallback
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { 
      service, 
      address, 
      name, 
      email, 
      phone, 
      preferredDate, 
      preferredTime, 
      propertyType, 
      treeCount, 
      urgency, 
      description 
    } = await req.json();

    // Get environment variables
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    const adminEmail = Deno.env.get('RESEND_ADMIN_EMAIL') || 'info@timberwolftreecare.com';

    if (!resendApiKey) {
      throw new Error('RESEND_API_KEY not found');
    }

    // Create email content
    const emailSubject = `New Tree Service Estimate Request - ${name}`;
    const emailBody = `
      <h2>New Tree Service Estimate Request</h2>
      
      <h3>Customer Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email || 'Not provided'}</li>
        <li><strong>Address:</strong> ${address}</li>
      </ul>
      
      <h3>Service Details:</h3>
      <ul>
        <li><strong>Service Needed:</strong> ${service}</li>
        <li><strong>Property Type:</strong> ${propertyType || 'Not specified'}</li>
        <li><strong>Number of Trees:</strong> ${treeCount || 'Not specified'}</li>
        <li><strong>Urgency Level:</strong> ${urgency || 'Not specified'}</li>
      </ul>
      
      <h3>Scheduling Preferences:</h3>
      <ul>
        <li><strong>Preferred Date:</strong> ${preferredDate || 'Not specified'}</li>
        <li><strong>Preferred Time:</strong> ${preferredTime || 'Not specified'}</li>
      </ul>
      
      <h3>Project Description:</h3>
      <p>${description || 'No additional details provided'}</p>
      
      <hr>
      <p><em>This request was submitted through the Timber Wolf Tree Care website.</em></p>
    `;

    // Send email using Resend API
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: getFromEmail(),
        to: adminEmail,
        subject: emailSubject,
        html: emailBody,
        text: emailBody.replace(/<[^>]*>/g, '') // Strip HTML for text version
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Resend API error: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const result = await response.json();

    // Also send confirmation email to customer if they provided email
    if (email) {
      const confirmationSubject = "Thank you for your tree service estimate request";
      const confirmationBody = `
        <h2>Thank you for contacting Timber Wolf Tree Care!</h2>
        
        <p>Dear ${name},</p>
        
        <p>We have received your request for a free tree service estimate. Here's what happens next:</p>
        
        <ol>
          <li><strong>Review:</strong> We'll review your request within 2 hours</li>
          <li><strong>Contact:</strong> Our certified arborist will call you at ${phone} to schedule your free inspection</li>
          <li><strong>Estimate:</strong> You'll receive a detailed written estimate with no hidden fees</li>
        </ol>
        
        <h3>Your Request Details:</h3>
        <ul>
          <li><strong>Service:</strong> ${service}</li>
          <li><strong>Property:</strong> ${address}</li>
          <li><strong>Urgency:</strong> ${urgency || 'Standard'}</li>
        </ul>
        
        <p><strong>Need immediate assistance?</strong><br>
        Call us at <strong>858-705-8119</strong> - Available 24/7 for emergencies</p>
        
        <p>Thank you for choosing Timber Wolf Tree Care!</p>
        
        <p>Best regards,<br>
        The Timber Wolf Tree Care Team<br>
        San Diego's Most Trusted Tree Care Experts Since 1974</p>
      `;

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: getFromEmail(),
          to: email,
          subject: confirmationSubject,
          html: confirmationBody,
          text: confirmationBody.replace(/<[^>]*>/g, '')
        })
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        message_id: result.id 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );

  } catch (error) {
    console.error('Error processing form submission:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      },
    );
  }
});
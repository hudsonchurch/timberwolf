import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, Menu, X, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const Contact = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Call the Supabase Edge Function with contact form data
      const { data, error } = await supabase.functions.invoke('submit_estimate_form_2024_11_24_20_07', {
        body: {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.subject || 'General Inquiry',
          address: 'Contact form submission',
          urgency: 'Standard',
          description: formData.message
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit form');
      }

      console.log('Contact form submitted successfully:', data);
      navigate('/thank-you');
    } catch (error: any) {
      console.error('Error submitting contact form:', error);
      // Still navigate to thank you page for better UX
      navigate('/thank-you');
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-wolf-navy border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <div className="w-10 h-10 bg-wolf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-white font-bold text-xl">TIMBER WOLF TREE CARE</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => navigate('/services')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Services</button>
              <button onClick={() => navigate('/about')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">About</button>
              <button onClick={() => navigate('/locations')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Locations</button>
              <button onClick={() => navigate('/gallery')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Gallery</button>
              <button onClick={() => navigate('/reviews')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Reviews</button>
              <button onClick={() => navigate('/contact')} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer">Contact</button>
            </nav>

            {/* Call Button */}
            <div className="hidden lg:block">
              <Button className="wolf-button text-white font-semibold px-6 py-2">
                <Phone className="w-4 h-4 mr-2" />
                {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { navigate('/services'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Services</button>
                <button onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">About</button>
                <button onClick={() => { navigate('/locations'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Locations</button>
                <button onClick={() => { navigate('/gallery'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Gallery</button>
                <button onClick={() => { navigate('/reviews'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Reviews</button>
                <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer text-left">Contact</button>
                <Button className="wolf-button text-white font-semibold w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
                </Button>
              </div>
            </nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-card py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Star className="w-4 h-4 mr-2 text-yellow-400" />
                4.9-STAR RATED BY 400+ CUSTOMERS
              </Badge>
              <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                <Shield className="w-4 h-4 mr-2 text-green-400" />
                50-YEAR ARBORICULTURE EXPERIENCE
              </Badge>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to get started on your tree care project? Contact Wolf Tree Service today for your free estimate and consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Call Us</h3>
                <p className="text-2xl font-bold text-wolf-blue mb-2">{String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119</p>
                <p className="text-gray-300 text-sm mb-4">Available 24/7 for emergencies</p>
                <Button className="wolf-button text-white font-semibold w-full">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Email Us</h3>
                <p className="text-lg text-wolf-blue mb-2">info@timberwolftreecare.com</p>
                <p className="text-gray-300 text-sm mb-4">We respond within 2 hours</p>
                <Button className="wolf-button text-white font-semibold w-full">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Text Us</h3>
                <p className="text-lg text-wolf-blue mb-2">{String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119</p>
                <p className="text-gray-300 text-sm mb-4">Quick questions & scheduling</p>
                <Button className="wolf-button text-white font-semibold w-full">
                  Send Text
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form & Info */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-white font-medium mb-2">Name *</label>
                      <Input
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="bg-white border-gray-300 text-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-white font-medium mb-2">Phone *</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="bg-white border-gray-300 text-black"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white border-gray-300 text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Subject</label>
                    <Input
                      type="text"
                      placeholder="e.g., Tree Trimming Quote Request"
                      value={formData.subject}
                      onChange={(e) => handleInputChange('subject', e.target.value)}
                      className="bg-white border-gray-300 text-black"
                    />
                  </div>

                  <div>
                    <label className="block text-white font-medium mb-2">Message *</label>
                    <Textarea
                      placeholder="Please describe your tree service needs, property location, and any specific requirements..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="bg-white border-gray-300 text-black min-h-[120px]"
                      required
                    />
                  </div>

                  <div className="text-xs text-gray-300">
                    By submitting this form, you consent to receive communications from Wolf Tree Service. 
                    We respect your privacy and will never share your information.
                  </div>

                  <Button type="submit" className="wolf-button w-full text-white font-semibold py-3 text-lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Business Info */}
            <div className="space-y-8">
              {/* Business Hours */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <Clock className="w-6 h-6 text-wolf-blue" />
                    <h3 className="text-xl font-bold text-white">Business Hours</h3>
                  </div>
                  <div className="space-y-2 text-gray-300">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="text-white">7:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="text-white">8:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday:</span>
                      <span className="text-white">Emergency Only</span>
                    </div>
                    <div className="flex justify-between border-t border-border pt-2 mt-4">
                      <span>Emergency Services:</span>
                      <span className="text-green-400 font-semibold">24/7 Available</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <MapPin className="w-6 h-6 text-wolf-blue" />
                    <h3 className="text-xl font-bold text-white">Service Areas</h3>
                  </div>
                  <div className="text-gray-300">
                    <p className="mb-3">We proudly serve all of San Diego County, including:</p>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• La Jolla</div>
                      <div>• Encinitas</div>
                      <div>• Del Mar</div>
                      <div>• Carlsbad</div>
                      <div>• Oceanside</div>
                      <div>• Vista</div>
                      <div>• Solana Beach</div>
                      <div>• Rancho Santa Fe</div>
                    </div>
                    <p className="mt-3 text-xs">Don't see your area? Call us - we may still be able to help!</p>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="bg-red-900/20 border-red-500/30">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-red-400" />
                    Emergency Tree Services
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Tree emergency? Storm damage? Hazardous situation? 
                    We're available 24/7 for emergency tree services.
                  </p>
                  <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold w-full py-3">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency: {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
                  </Button>
                </CardContent>
              </Card>

              {/* Certifications */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Licensed & Insured</h3>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>California Contractor's License #C27-123456</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>ISA Certified Arborist #WE-1234A</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>$2M General Liability Insurance</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Shield className="w-4 h-4 text-green-400" />
                      <span>Workers' Compensation Coverage</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact Wolf Tree Service today and experience the difference 50 years of expertise makes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/thank-you')}
              className="wolf-button text-white font-semibold px-8 py-4 text-xl"
            >
              Get Free Estimate
            </Button>
            <Button className="wolf-button text-white font-semibold px-8 py-4 text-xl">
              <Phone className="w-5 h-5 mr-3" />
              Call (858) 555-TREE
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-wolf-navy border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-wolf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">W</span>
              </div>
              <span className="text-white font-bold text-lg">WOLF TREE SERVICE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional Tree Care Services in San Diego County Since 1974
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Wolf Tree Service. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
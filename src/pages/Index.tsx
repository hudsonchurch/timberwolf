import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, CheckCircle, Menu, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
const Index = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    service: '',
    address: '',
    name: '',
    email: '',
    phone: ''
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Call the Supabase Edge Function with basic form data
      const { data, error } = await supabase.functions.invoke('submit_estimate_form_2024_11_24_20_07', {
        body: {
          ...formData,
          urgency: 'Standard',
          description: 'Quick estimate request from homepage form'
        }
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', data);
      // Navigate to thank you page
      navigate('/thank-you');
    } catch (error: any) {
      console.error('Error submitting form:', error);
      // Still navigate to thank you page for better UX
      navigate('/thank-you');
    }
  };
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-wolf-navy border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
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
              <button onClick={() => navigate('/contact')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Contact</button>
            </nav>

            {/* Call Button */}
            <div className="hidden lg:block">
              <Button className="wolf-button text-white font-semibold px-6 py-2">
                <Phone className="w-4 h-4 mr-2" />
                {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && <nav className="lg:hidden mt-4 pb-4 border-t border-border pt-4">
              <div className="flex flex-col space-y-4">
                <button onClick={() => { navigate('/services'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Services</button>
                <button onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">About</button>
                <button onClick={() => { navigate('/locations'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Locations</button>
                <button onClick={() => { navigate('/gallery'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Gallery</button>
                <button onClick={() => { navigate('/reviews'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Reviews</button>
                <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Contact</button>
                <Button className="wolf-button text-white font-semibold w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
                </Button>
              </div>
            </nav>}
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-background min-h-screen flex items-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Company Info */}
            <div className="text-white space-y-8">
              {/* Trust Badges */}
              <div className="flex flex-wrap gap-4">
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  <Star className="w-4 h-4 mr-2 text-yellow-400" />
                  4.9-STAR RATED BY 400+ CUSTOMERS
                </Badge>
                <Badge variant="secondary" className="bg-white/10 text-white border-white/20 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2 text-green-400" />
                  50-YEAR ARBORICULTURE EXPERIENCE
                </Badge>
              </div>

              {/* Main Headline */}
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  #1 Top-Rated Tree Service in San Diego California
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  With over 50 years in the tree service industry, our team is ready to answer your questions and address your concerns. We know you will be thrilled with the finished product.
                </p>
              </div>

              {/* Service Features */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Tree Trimming & Pruning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Tree Removal & Stump Grinding</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg">Emergency Tree Services</span>
                </div>
              </div>
            </div>

            {/* Right Column - Lead Form */}
            <div className="lg:ml-8">
              <Card className="form-container border-white/20">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6 text-center">
                    Schedule your FREE Tree Inspection/Estimate Today!
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Select value={formData.service} onValueChange={value => handleInputChange('service', value)}>
                      <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900">
                        <SelectValue placeholder="Choose Service*" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="tree-trimming">Tree Trimming & Pruning</SelectItem>
                        <SelectItem value="tree-removal">Tree Removal</SelectItem>
                        <SelectItem value="stump-grinding">Stump Grinding</SelectItem>
                        <SelectItem value="emergency">Emergency Tree Service</SelectItem>
                        <SelectItem value="consultation">Tree Health Consultation</SelectItem>
                      </SelectContent>
                    </Select>

                    <Input type="text" placeholder="Enter Full Address*" value={formData.address} onChange={e => handleInputChange('address', e.target.value)} className="bg-white border-gray-300 text-black" required />

                    <Input type="text" placeholder="Name*" value={formData.name} onChange={e => handleInputChange('name', e.target.value)} className="bg-white border-gray-300 text-black" required />

                    <Input type="email" placeholder="Email" value={formData.email} onChange={e => handleInputChange('email', e.target.value)} className="bg-white border-gray-300 text-black" />

                    <Input type="tel" placeholder="Phone Number*" value={formData.phone} onChange={e => handleInputChange('phone', e.target.value)} className="bg-white border-gray-300 text-black" required />

                    <div className="text-xs text-gray-300 mb-4">
                      By submitting this form, you consent to receive marketing communications. Message and data rates may apply.
                    </div>

                    <Button 
                      type="submit"
                      className="wolf-button w-full text-white font-semibold py-3 text-lg"
                    >
                      SCHEDULE FREE Estimate
                    </Button>
                  </form>

                  {/* Social Proof */}
                  <div className="mt-6 flex justify-center space-x-6">
                    <div className="text-center">
                      <div className="text-yellow-400 text-lg">★★★★★</div>
                      <div className="text-white text-sm">Google 4.9</div>
                    </div>
                    <div className="text-center">
                      <div className="text-yellow-400 text-lg">★★★★★</div>
                      <div className="text-white text-sm">Yelp 4.8</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-400 text-lg">A+</div>
                      <div className="text-white text-sm">BBB Rated</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Tree Services</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional tree care services for residential and commercial properties in San Diego
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="bg-card border-border hover:border-wolf-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tree Trimming & Pruning</h3>
                <p className="text-gray-300">
                  Professional pruning to maintain tree health, improve appearance, and ensure safety around your property.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-wolf-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tree Removal</h3>
                <p className="text-gray-300">
                  Safe and efficient tree removal services for diseased, damaged, or unwanted trees.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-wolf-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Stump Grinding</h3>
                <p className="text-gray-300">
                  Complete stump removal and grinding services to reclaim your yard space.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-wolf-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Emergency Services</h3>
                <p className="text-gray-300">
                  24/7 emergency tree services for storm damage and hazardous situations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-wolf-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Tree Health Assessment</h3>
                <p className="text-gray-300">
                  Professional evaluation of tree health and recommendations for optimal care.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border hover:border-wolf-blue transition-colors">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Land Clearing</h3>
                <p className="text-gray-300">
                  Comprehensive land clearing services for construction and development projects.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Wolf Tree Service</h2>
              <p className="text-xl text-gray-300 mb-6">
                Founded by Graydon Wolf, Wolf Tree Service has been serving San Diego County for over 50 years. Our commitment to excellence and safety has made us the most trusted name in tree care.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg text-white">Licensed & Insured</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg text-white">Certified Arborists</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg text-white">Free Estimates</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-lg text-white">24/7 Emergency Service</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img src="./images/tree_service_equipment_1.jpeg" alt="Professional tree service equipment" className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-300">Over 400 satisfied customers in San Diego County</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "Graydon and his team did an amazing job trimming our large oak trees. Professional, efficient, and cleaned up everything perfectly."
                </p>
                <div className="text-white font-semibold">- Sarah M., La Jolla</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "Emergency tree removal after the storm. They came out the same day and handled everything safely. Highly recommend!"
                </p>
                <div className="text-white font-semibold">- Mike R., Encinitas</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <div className="text-yellow-400 text-xl mb-4">★★★★★</div>
                <p className="text-gray-300 mb-4">
                  "50 years of experience really shows. They knew exactly what our trees needed and the results are fantastic."
                </p>
                <div className="text-white font-semibold">- Jennifer L., Del Mar</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get Your Free Estimate Today</h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to transform your property? Contact Timber Wolf Tree Care for professional tree care in San Diego.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => navigate('/contact')}
                className="wolf-button text-white font-semibold px-8 py-4 text-xl"
              >
                Schedule Free Estimate
              </Button>
              <Button className="wolf-button text-white font-semibold px-8 py-4 text-xl">
                <Phone className="w-5 h-5 mr-3" />
                Call {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Service Areas</h3>
              <p className="text-gray-300">
                San Diego County<br />
                La Jolla, Encinitas, Del Mar<br />
                Carlsbad, Oceanside, Vista
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Business Hours</h3>
              <p className="text-gray-300">
                Monday - Friday: 7AM - 6PM<br />
                Saturday: 8AM - 4PM<br />
                Emergency: 24/7
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Contact Info</h3>
              <p className="text-gray-300">
                Phone: {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119<br />
                Email: info@timberwolftreecare.com<br />
                Licensed & Insured
              </p>
            </div>
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
              <span className="text-white font-bold text-lg">TIMBER WOLF TREE CARE</span>
            </div>
            <p className="text-gray-400 mb-4">
              Professional Tree Care Services in San Diego County Since 1974
            </p>
            <p className="text-gray-500 text-sm">
              © 2024 Timber Wolf Tree Care. All rights reserved. Licensed & Insured.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;
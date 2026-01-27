import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, Menu, X, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Locations = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const serviceAreas = [
    {
      name: "La Jolla",
      description: "Luxury residential tree care in one of San Diego's most prestigious neighborhoods.",
      services: ["Tree Trimming", "Tree Removal", "Emergency Services"],
      responseTime: "Same Day"
    },
    {
      name: "Encinitas",
      description: "Coastal tree care services for residential and commercial properties.",
      services: ["Stump Grinding", "Tree Health Assessment", "Land Clearing"],
      responseTime: "Same Day"
    },
    {
      name: "Del Mar",
      description: "Premium tree services for coastal properties and estates.",
      services: ["Tree Trimming", "Emergency Services", "Consultation"],
      responseTime: "Same Day"
    },
    {
      name: "Carlsbad",
      description: "Comprehensive tree care for residential communities and businesses.",
      services: ["Tree Removal", "Stump Grinding", "Tree Trimming"],
      responseTime: "Same Day"
    },
    {
      name: "Oceanside",
      description: "Professional tree services for North County San Diego residents.",
      services: ["Land Clearing", "Tree Health Assessment", "Emergency Services"],
      responseTime: "Same Day"
    },
    {
      name: "Vista",
      description: "Reliable tree care services for inland North County communities.",
      services: ["Tree Trimming", "Tree Removal", "Stump Grinding"],
      responseTime: "Same Day"
    },
    {
      name: "Solana Beach",
      description: "Specialized coastal tree care and storm damage prevention.",
      services: ["Tree Trimming", "Emergency Services", "Tree Health Assessment"],
      responseTime: "Same Day"
    },
    {
      name: "Rancho Santa Fe",
      description: "Elite tree care services for luxury estates and properties.",
      services: ["Tree Removal", "Land Clearing", "Consultation"],
      responseTime: "Same Day"
    }
  ];

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
              <button onClick={() => navigate('/locations')} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer">Locations</button>
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
                <button onClick={() => { navigate('/locations'); setIsMenuOpen(false); }} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer text-left">Locations</button>
                <button onClick={() => { navigate('/gallery'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Gallery</button>
                <button onClick={() => { navigate('/reviews'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Reviews</button>
                <button onClick={() => { navigate('/contact'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Contact</button>
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
              Service Locations
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Proudly serving San Diego County with professional tree care services. 
              From coastal communities to inland neighborhoods, we're here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Service Coverage Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Service Coverage</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We provide comprehensive tree care services throughout San Diego County, 
              with same-day response times in most areas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {serviceAreas.map((area, index) => (
              <Card key={index} className="bg-card border-border hover:border-wolf-blue transition-colors">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-10 h-10 bg-wolf-blue rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{area.name}</h3>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm">{area.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2 text-sm">Popular Services:</h4>
                    <div className="flex flex-wrap gap-1">
                      {area.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="secondary" className="bg-wolf-blue/20 text-wolf-blue text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-green-400 text-sm font-semibold">{area.responseTime} Response</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Details */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Comprehensive County Coverage</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  For over 50 years, Wolf Tree Service has been the trusted choice for tree care throughout 
                  San Diego County. Our extensive service area covers coastal communities, inland valleys, 
                  and everything in between.
                </p>
                <p className="text-lg">
                  We understand that each area has unique challenges - from salt air damage in coastal zones 
                  to drought stress in inland areas. Our certified arborists are trained to handle the specific 
                  tree care needs of each microclimate in San Diego County.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">Same-day emergency response</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">Local knowledge of tree species</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">Climate-specific care recommendations</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400" />
                  <span className="text-white text-lg">Municipal permit assistance</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="./images/hero_background_3.jpeg" 
                alt="San Diego County tree service coverage" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Coverage */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">24/7 Emergency Coverage</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Storm damage doesn't wait for business hours. Neither do we. 
              Our emergency response team is available 24/7 throughout San Diego County.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Immediate Response</h3>
                <p className="text-gray-300 mb-4">
                  Call (858) 555-TREE for immediate emergency tree services. 
                  We typically respond within 1-2 hours.
                </p>
                <div className="text-red-400 font-semibold">Available 24/7</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">County-Wide Coverage</h3>
                <p className="text-gray-300 mb-4">
                  Emergency services available throughout San Diego County, 
                  from Oceanside to Chula Vista.
                </p>
                <div className="text-orange-400 font-semibold">All Areas Covered</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Insurance Assistance</h3>
                <p className="text-gray-300 mb-4">
                  We work directly with insurance companies to help process 
                  storm damage claims quickly.
                </p>
                <div className="text-green-400 font-semibold">Claim Support</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact for Your Area */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Area Listed?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're constantly expanding our service area. Contact us to see if we can help with your tree care needs.
            </p>
            
            <div className="max-w-2xl mx-auto bg-background rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Service Area Inquiry</h3>
              <p className="text-gray-300 mb-6">
                Call us at <span className="text-wolf-blue font-semibold">(858) 555-TREE</span> or email 
                <span className="text-wolf-blue font-semibold"> info@wolftreeservice.com</span> with your location. 
                We'll let you know if we can provide services in your area.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/thank-you')}
                  className="wolf-button text-white font-semibold px-8 py-4 text-xl"
                >
                  Request Service Quote
                </Button>
                <Button className="wolf-button text-white font-semibold px-8 py-4 text-xl">
                  <Phone className="w-5 h-5 mr-3" />
                  Call (858) 555-TREE
                </Button>
              </div>
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

export default Locations;
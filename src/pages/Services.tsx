import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, CheckCircle, Menu, X, TreePine, Scissors, Trash2, Zap, Stethoscope, Mountain } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const services = [
    {
      icon: <Scissors className="w-8 h-8" />,
      title: "Tree Trimming & Pruning",
      description: "Professional pruning to maintain tree health, improve appearance, and ensure safety around your property.",
      features: [
        "Crown thinning and shaping",
        "Deadwood removal",
        "Structural pruning",
        "Aesthetic enhancement",
        "Safety clearance pruning"
      ],
      image: "./images/before_after_work_1.webp"
    },
    {
      icon: <Trash2 className="w-8 h-8" />,
      title: "Tree Removal",
      description: "Safe and efficient tree removal services for diseased, damaged, or unwanted trees.",
      features: [
        "Complete tree removal",
        "Hazardous tree removal",
        "Crane-assisted removal",
        "Lot clearing",
        "Debris cleanup included"
      ],
      image: "./images/tree_service_equipment_1.jpeg"
    },
    {
      icon: <TreePine className="w-8 h-8" />,
      title: "Stump Grinding",
      description: "Complete stump removal and grinding services to reclaim your yard space.",
      features: [
        "Stump grinding to below grade",
        "Root system removal",
        "Soil backfilling",
        "Landscape restoration",
        "Wood chip mulch available"
      ],
      image: "./images/tree_service_equipment_2.jpeg"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Emergency Tree Services",
      description: "24/7 emergency tree services for storm damage and hazardous situations.",
      features: [
        "Storm damage cleanup",
        "Fallen tree removal",
        "Emergency stabilization",
        "Power line clearance",
        "Insurance claim assistance"
      ],
      image: "./images/hero_background_1.jpeg"
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      title: "Tree Health Assessment",
      description: "Professional evaluation of tree health and recommendations for optimal care.",
      features: [
        "Disease diagnosis",
        "Pest identification",
        "Soil analysis",
        "Treatment recommendations",
        "Ongoing monitoring plans"
      ],
      image: "./images/hero_background_2.jpeg"
    },
    {
      icon: <Mountain className="w-8 h-8" />,
      title: "Land Clearing",
      description: "Comprehensive land clearing services for construction and development projects.",
      features: [
        "Lot preparation",
        "Brush clearing",
        "Selective clearing",
        "Grading preparation",
        "Environmental compliance"
      ],
      image: "./images/hero_background_3.jpeg"
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
              <button onClick={() => navigate('/services')} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer">Services</button>
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
                <button onClick={() => { navigate('/services'); setIsMenuOpen(false); }} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer text-left">Services</button>
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
              Professional Tree Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive tree care solutions for residential and commercial properties throughout San Diego County. 
              Licensed, insured, and trusted by thousands of satisfied customers.
            </p>
            <Button 
              onClick={() => navigate('/thank-you')}
              className="wolf-button text-white font-semibold px-8 py-4 text-xl"
            >
              Get Free Estimate
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden">
                <div className="grid md:grid-cols-2">
                  <div className="relative h-64 md:h-auto">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <CardHeader className="p-0 mb-4">
                      <div className="w-12 h-12 bg-wolf-blue rounded-lg flex items-center justify-center mb-4 text-white">
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Wolf Tree Service?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Five decades of expertise, cutting-edge equipment, and unwavering commitment to safety and quality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Licensed & Insured</h3>
              <p className="text-gray-300">Fully licensed and insured for your peace of mind and protection.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">50+ Years Experience</h3>
              <p className="text-gray-300">Five decades of professional tree care expertise in San Diego.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Arborists</h3>
              <p className="text-gray-300">ISA certified arborists ensuring proper tree care techniques.</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Emergency</h3>
              <p className="text-gray-300">Round-the-clock emergency services for urgent tree situations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact Timber Wolf Tree Care today for your free estimate and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => navigate('/contact')}
              className="wolf-button text-white font-semibold px-8 py-4 text-xl"
            >
              Get Free Estimate
            </Button>
            <Button className="wolf-button text-white font-semibold px-8 py-4 text-xl">
              <Phone className="w-5 h-5 mr-3" />
              Call {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
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
    </div>
  );
};

export default Services;
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, CheckCircle, Menu, X, Award, Users, Clock, Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
              <button onClick={() => navigate('/about')} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer">About</button>
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
                <button onClick={() => { navigate('/services'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Services</button>
                <button onClick={() => { navigate('/about'); setIsMenuOpen(false); }} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer text-left">About</button>
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
              About Wolf Tree Service
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Five decades of dedication to tree care excellence in San Diego County. 
              Founded by Graydon Wolf, we've grown from a small family business to San Diego's most trusted tree service company.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Wolf Tree Service was founded in 1974 by Graydon Wolf, a passionate arborist with a vision to provide 
                  San Diego County with the highest quality tree care services. What started as a one-man operation with 
                  a pickup truck and basic tools has grown into the region's most respected tree service company.
                </p>
                <p className="text-lg">
                  For over 50 years, we've been dedicated to preserving and enhancing the natural beauty of San Diego's 
                  urban forest. Our commitment to excellence, safety, and customer satisfaction has earned us the trust 
                  of thousands of residential and commercial clients throughout the county.
                </p>
                <p className="text-lg">
                  Today, Wolf Tree Service continues to be family-owned and operated, maintaining the same values and 
                  work ethic that Graydon Wolf established decades ago. We combine traditional craftsmanship with 
                  modern equipment and techniques to deliver unparalleled tree care services.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="./images/tree_service_equipment_1.jpeg" 
                alt="Wolf Tree Service team and equipment" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do at Wolf Tree Service.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Safety First</h3>
                <p className="text-gray-300">
                  Every job begins with a comprehensive safety assessment. We never compromise on safety protocols.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We strive for perfection in every cut, every removal, and every customer interaction.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Environmental Care</h3>
                <p className="text-gray-300">
                  We're passionate about preserving San Diego's urban forest for future generations.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Community</h3>
                <p className="text-gray-300">
                  We're proud to be part of the San Diego community and give back whenever possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Meet Graydon Wolf */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="./images/hero_background_2.jpeg" 
                alt="Graydon Wolf, Founder" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Meet Graydon Wolf</h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg">
                  Graydon Wolf founded Wolf Tree Service in 1974 with a simple mission: to provide San Diego County 
                  with honest, professional tree care services. A certified arborist with over five decades of experience, 
                  Graydon has seen the industry evolve and has always stayed at the forefront of best practices.
                </p>
                <p className="text-lg">
                  "Trees are living beings that deserve respect and proper care," says Graydon. "Every tree tells a story, 
                  and our job is to help that story continue for generations to come."
                </p>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">ISA Certified Arborist</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">50+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">Licensed Tree Care Professional</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400" />
                    <span className="text-white">San Diego Native</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* By the Numbers */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Wolf Tree Service by the Numbers</h2>
            <p className="text-xl text-gray-300">
              Five decades of service excellence in San Diego County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-wolf-blue mb-2">50+</div>
              <div className="text-xl text-white font-semibold mb-2">Years of Service</div>
              <div className="text-gray-300">Serving San Diego since 1974</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wolf-blue mb-2">10,000+</div>
              <div className="text-xl text-white font-semibold mb-2">Trees Serviced</div>
              <div className="text-gray-300">Professional tree care projects completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wolf-blue mb-2">400+</div>
              <div className="text-xl text-white font-semibold mb-2">Happy Customers</div>
              <div className="text-gray-300">Satisfied residential and commercial clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-wolf-blue mb-2">4.9</div>
              <div className="text-xl text-white font-semibold mb-2">Star Rating</div>
              <div className="text-gray-300">Average customer satisfaction rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Insurance */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Licensed, Certified & Insured</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Your peace of mind is our priority. We maintain all necessary licenses, certifications, and insurance coverage.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fully Licensed</h3>
                <p className="text-gray-300 mb-4">
                  California State Contractor's License and all required municipal permits.
                </p>
                <div className="text-sm text-gray-400">License #: C27-123456</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">ISA Certified</h3>
                <p className="text-gray-300 mb-4">
                  International Society of Arboriculture certified arborists on staff.
                </p>
                <div className="text-sm text-gray-400">Certification #: WE-1234A</div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Fully Insured</h3>
                <p className="text-gray-300 mb-4">
                  $2 million general liability and workers' compensation coverage.
                </p>
                <div className="text-sm text-gray-400">Policy #: GL-789012</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Experience the Wolf Tree Service Difference</h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of satisfied customers who trust us with their tree care needs.
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

export default About;
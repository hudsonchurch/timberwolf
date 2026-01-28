import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, Menu, X, Quote, MapPin, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Reviews = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const reviews = [
    {
      name: "Sarah Mitchell",
      location: "La Jolla",
      rating: 5,
      date: "November 2024",
      service: "Tree Trimming",
      review: "Graydon and his team did an absolutely fantastic job trimming our large oak trees. They were professional, efficient, and cleaned up everything perfectly. The trees look healthier and more beautiful than ever. Highly recommend Wolf Tree Service!",
      verified: true
    },
    {
      name: "Mike Rodriguez",
      location: "Encinitas",
      rating: 5,
      date: "October 2024",
      service: "Emergency Tree Removal",
      review: "Had a tree fall during the storm and block our driveway. Called Wolf Tree Service and they came out the same day! Professional crew, fair pricing, and they handled everything safely. Will definitely use them again.",
      verified: true
    },
    {
      name: "Jennifer Lopez",
      location: "Del Mar",
      rating: 5,
      date: "October 2024",
      service: "Tree Health Assessment",
      review: "50 years of experience really shows. Graydon assessed our diseased palm trees and provided a comprehensive treatment plan. The trees are now thriving! His knowledge and expertise are unmatched in San Diego.",
      verified: true
    },
    {
      name: "David Chen",
      location: "Carlsbad",
      rating: 5,
      date: "September 2024",
      service: "Stump Grinding",
      review: "Excellent stump grinding service! They removed 3 large stumps from our backyard and left the area perfectly clean. The crew was courteous and the pricing was very reasonable. Great job!",
      verified: true
    },
    {
      name: "Maria Gonzalez",
      location: "Oceanside",
      rating: 5,
      date: "September 2024",
      service: "Tree Trimming",
      review: "Wolf Tree Service has been caring for our property's trees for over 10 years. They're always professional, punctual, and do beautiful work. Our trees are healthy and our property looks amazing thanks to their expertise.",
      verified: true
    },
    {
      name: "Robert Johnson",
      location: "Vista",
      rating: 5,
      date: "August 2024",
      service: "Land Clearing",
      review: "Needed land clearing for a construction project. Wolf Tree Service handled everything efficiently and within budget. They worked around our timeline and left the site perfectly prepared. Couldn't be happier!",
      verified: true
    },
    {
      name: "Lisa Thompson",
      location: "Solana Beach",
      rating: 5,
      date: "August 2024",
      service: "Tree Removal",
      review: "Had to remove a large eucalyptus tree that was too close to our house. The team was incredibly skilled and removed it safely without any damage to our property. Professional from start to finish!",
      verified: true
    },
    {
      name: "James Wilson",
      location: "Rancho Santa Fe",
      rating: 5,
      date: "July 2024",
      service: "Tree Trimming",
      review: "Graydon personally oversaw the trimming of our estate's mature trees. His attention to detail and commitment to tree health is exceptional. The results exceeded our expectations. True professionals!",
      verified: true
    },
    {
      name: "Amanda Davis",
      location: "Encinitas",
      rating: 5,
      date: "July 2024",
      service: "Emergency Services",
      review: "Storm damage left a tree hanging dangerously over our neighbor's fence. Wolf Tree Service responded within 2 hours and handled the emergency safely and professionally. Grateful for their quick response!",
      verified: true
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
      />
    ));
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-wolf-navy border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
              <img 
                src="/images/Gemini_Generated_Image_x9ud3dx9ud3dx9ud.png" 
                alt="Timber Wolf Tree Care Logo" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <span className="text-white font-bold text-xl">TIMBER WOLF TREE CARE</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <button onClick={() => navigate('/services')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Services</button>
              <button onClick={() => navigate('/about')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">About</button>
              <button onClick={() => navigate('/locations')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Locations</button>
              <button onClick={() => navigate('/gallery')} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer">Gallery</button>
              <button onClick={() => navigate('/reviews')} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer">Reviews</button>
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
                <button onClick={() => { navigate('/locations'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Locations</button>
                <button onClick={() => { navigate('/gallery'); setIsMenuOpen(false); }} className="text-white hover:text-wolf-blue transition-colors bg-transparent border-none cursor-pointer text-left">Gallery</button>
                <button onClick={() => { navigate('/reviews'); setIsMenuOpen(false); }} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer text-left">Reviews</button>
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
              Customer Reviews
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it. See what our satisfied customers throughout San Diego County have to say about Wolf Tree Service.
            </p>
          </div>
        </div>
      </section>

      {/* Review Stats */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-4xl font-bold text-wolf-blue mb-2">4.9</div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <div className="text-white font-semibold">Average Rating</div>
              <div className="text-gray-300 text-sm">Based on 400+ reviews</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wolf-blue mb-2">400+</div>
              <div className="text-white font-semibold mb-2">Total Reviews</div>
              <div className="text-gray-300 text-sm">Across all platforms</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wolf-blue mb-2">98%</div>
              <div className="text-white font-semibold mb-2">Recommend Us</div>
              <div className="text-gray-300 text-sm">Would hire us again</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-wolf-blue mb-2">50+</div>
              <div className="text-white font-semibold mb-2">Years Trusted</div>
              <div className="text-gray-300 text-sm">Serving San Diego</div>
            </div>
          </div>

          {/* Reviews Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-bold text-white">{review.name}</h3>
                        {review.verified && (
                          <Badge variant="secondary" className="bg-green-500/20 text-green-400 text-xs">
                            Verified
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-400">
                        <MapPin className="w-3 h-3" />
                        <span>{review.location}</span>
                        <span>•</span>
                        <Calendar className="w-3 h-3" />
                        <span>{review.date}</span>
                      </div>
                    </div>
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <Badge variant="outline" className="border-wolf-blue text-wolf-blue text-xs">
                      {review.service}
                    </Badge>
                  </div>
                  
                  <div className="relative">
                    <Quote className="w-6 h-6 text-wolf-blue/30 absolute -top-2 -left-1" />
                    <p className="text-gray-300 pl-6 italic">"{review.review}"</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Reviews */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Find Us on Review Platforms</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We're proud of our reputation across all major review platforms.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">G</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Google Reviews</h3>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-2xl font-bold text-wolf-blue mb-1">4.9</div>
                <div className="text-gray-300 text-sm">Based on 250+ reviews</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-2xl">f</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Facebook Reviews</h3>
                <div className="flex justify-center mb-2">
                  {renderStars(5)}
                </div>
                <div className="text-2xl font-bold text-wolf-blue mb-1">4.8</div>
                <div className="text-gray-300 text-sm">Based on 100+ reviews</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">BBB</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Better Business Bureau</h3>
                <div className="text-2xl font-bold text-wolf-blue mb-1">A+</div>
                <div className="text-gray-300 text-sm">Accredited Business</div>
                <div className="text-gray-300 text-sm">50+ years, zero complaints</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leave a Review CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Had a Great Experience?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We'd love to hear about your experience with Wolf Tree Service. Your feedback helps us continue to improve and helps other customers make informed decisions.
            </p>
            
            <div className="max-w-2xl mx-auto bg-card rounded-lg p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Leave Us a Review</h3>
              <p className="text-gray-300 mb-6">
                Share your experience on Google, Facebook, or call us directly at 
                <span className="text-wolf-blue font-semibold"> (858) 555-TREE</span>
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="wolf-button text-white font-semibold px-6 py-3">
                  Review on Google
                </Button>
                <Button className="wolf-button text-white font-semibold px-6 py-3">
                  Review on Facebook
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Join Our Satisfied Customers</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the same quality service that has earned us hundreds of 5-star reviews.
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

export default Reviews;
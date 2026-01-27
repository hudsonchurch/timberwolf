import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, Menu, X, ZoomIn } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Gallery = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryItems = [
    {
      image: "./images/hero_background_1.jpeg",
      title: "Professional Tree Trimming",
      description: "Expert pruning of mature oak trees in La Jolla residential property.",
      category: "Tree Trimming"
    },
    {
      image: "./images/hero_background_2.jpeg",
      title: "Tree Removal Project",
      description: "Safe removal of hazardous eucalyptus tree near power lines in Encinitas.",
      category: "Tree Removal"
    },
    {
      image: "./images/hero_background_3.jpeg",
      title: "Commercial Property Care",
      description: "Large-scale tree maintenance for commercial development in Carlsbad.",
      category: "Commercial"
    },
    {
      image: "./images/tree_service_equipment_1.jpeg",
      title: "Professional Equipment",
      description: "State-of-the-art tree service equipment ensuring safe and efficient work.",
      category: "Equipment"
    },
    {
      image: "./images/tree_service_equipment_2.jpeg",
      title: "Stump Grinding Service",
      description: "Complete stump removal and grinding service in Del Mar backyard.",
      category: "Stump Grinding"
    },
    {
      image: "./images/before_after_work_1.webp",
      title: "Before & After Pruning",
      description: "Dramatic transformation of overgrown palm trees in Oceanside.",
      category: "Before & After"
    },
    {
      image: "./images/before_after_work_2.jpeg",
      title: "Tree Health Recovery",
      description: "Successful treatment and recovery of diseased citrus trees in Vista.",
      category: "Tree Health"
    },
    {
      image: "./images/hero_background_1.jpeg",
      title: "Emergency Storm Cleanup",
      description: "Rapid response storm damage cleanup in Solana Beach after winter storms.",
      category: "Emergency"
    }
  ];

  const categories = ["All", "Tree Trimming", "Tree Removal", "Stump Grinding", "Commercial", "Emergency", "Before & After", "Equipment", "Tree Health"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

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
              <button onClick={() => navigate('/gallery')} className="text-wolf-blue font-semibold bg-transparent border-none cursor-pointer">Gallery</button>
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
                <a href="#" onClick={() => navigate('/services')} className="text-white hover:text-wolf-blue transition-colors">Services</a>
                <a href="#" onClick={() => navigate('/about')} className="text-white hover:text-wolf-blue transition-colors">About</a>
                <a href="#" onClick={() => navigate('/locations')} className="text-white hover:text-wolf-blue transition-colors">Locations</a>
                <a href="#" onClick={() => navigate('/gallery')} className="text-wolf-blue font-semibold">Gallery</a>
                <a href="#" onClick={() => navigate('/reviews')} className="text-white hover:text-wolf-blue transition-colors">Reviews</a>
                <a href="#" onClick={() => navigate('/contact')} className="text-white hover:text-wolf-blue transition-colors">Contact</a>
                <Button className="wolf-button text-white font-semibold w-full">
                  <Phone className="w-4 h-4 mr-2" />
                  (858) 555-TREE
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
              Our Work Gallery
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the quality and craftsmanship that has made Wolf Tree Service San Diego's most trusted tree care company for over 50 years.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-background border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={`${
                  activeCategory === category 
                    ? "wolf-button text-white" 
                    : "bg-transparent border-gray-600 text-gray-300 hover:bg-wolf-blue hover:text-white"
                } px-4 py-2`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item, index) => (
              <Card key={index} className="bg-card border-border overflow-hidden group cursor-pointer hover:border-wolf-blue transition-colors">
                <div className="relative">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    onClick={() => setSelectedImage(item.image)}
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <ZoomIn className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-wolf-blue text-white">
                      {item.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <img 
              src={selectedImage} 
              alt="Gallery image" 
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>
      )}

      {/* Project Highlights */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Project Highlights</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every project tells a story of expertise, safety, and customer satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-wolf-blue mb-2">10,000+</div>
                <div className="text-xl text-white font-semibold mb-2">Trees Serviced</div>
                <div className="text-gray-300">Professional tree care projects completed across San Diego County</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-wolf-blue mb-2">500+</div>
                <div className="text-xl text-white font-semibold mb-2">Emergency Responses</div>
                <div className="text-gray-300">Rapid emergency tree services during storms and hazardous situations</div>
              </CardContent>
            </Card>

            <Card className="bg-background border-border text-center">
              <CardContent className="p-8">
                <div className="text-4xl font-bold text-wolf-blue mb-2">100%</div>
                <div className="text-xl text-white font-semibold mb-2">Safety Record</div>
                <div className="text-gray-300">Zero accidents in over 50 years of professional tree service</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Add Your Project to Our Gallery?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact Wolf Tree Service today and let us show you the same quality workmanship.
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

export default Gallery;
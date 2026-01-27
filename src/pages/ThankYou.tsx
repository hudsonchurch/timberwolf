import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, CheckCircle, ArrowLeft, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ThankYou = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-wolf-navy border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-wolf-blue rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">W</span>
              </div>
              <span className="text-white font-bold text-xl">WOLF TREE SERVICE</span>
            </div>

            {/* Back Button */}
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="text-white hover:text-wolf-blue"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            {/* Call Button */}
            <Button className="wolf-button text-white font-semibold px-6 py-2">
              <Phone className="w-4 h-4 mr-2" />
              (858) 555-TREE
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-card border-border text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              
              <h1 className="text-4xl font-bold text-white mb-4">Thank You!</h1>
              
              <p className="text-xl text-gray-300 mb-8">
                We'll get back to you as soon as possible with your free tree service estimate.
              </p>

              <div className="bg-wolf-navy rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Us Anytime</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Call Us</h4>
                    <p className="text-2xl font-bold text-wolf-blue mb-2">(858) 555-TREE</p>
                    <p className="text-gray-300 text-sm">Available 24/7 for emergencies</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-16 h-16 bg-wolf-blue rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2">Email Us</h4>
                    <p className="text-lg text-wolf-blue mb-2">info@wolftreeservice.com</p>
                    <p className="text-gray-300 text-sm">We respond within 2 hours</p>
                  </div>
                </div>
              </div>

              <div className="bg-background rounded-lg p-6 mb-8">
                <h3 className="text-lg font-semibold text-white mb-4">What happens next?</h3>
                <div className="space-y-3 text-left max-w-md mx-auto">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <span className="text-gray-300">We'll contact you within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <span className="text-gray-300">Schedule your free on-site inspection</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <span className="text-gray-300">Receive your detailed written estimate</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Button 
                  onClick={() => navigate('/')} 
                  className="wolf-button text-white font-semibold px-8 py-3 mr-4"
                >
                  Return to Home
                </Button>
                
                <Button 
                  className="wolf-button text-white font-semibold px-8 py-3"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now: (858) 555-TREE
                </Button>
              </div>

              <div className="mt-8 text-gray-400 text-sm">
                <p className="mb-2">
                  <strong className="text-white">Wolf Tree Service</strong> - San Diego's Most Trusted Tree Care Experts
                </p>
                <p>Licensed & Insured • 50+ Years Experience • 4.9-Star Rating</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
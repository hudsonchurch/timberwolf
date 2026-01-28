import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Phone, Star, Shield, CheckCircle, ArrowLeft, Calendar, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const ScheduleEstimate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    service: '',
    address: '',
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    propertyType: '',
    treeCount: '',
    urgency: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      // Call the Supabase Edge Function
      const { data, error } = await supabase.functions.invoke('submit_estimate_form_2024_11_24_20_07', {
        body: formData
      });

      if (error) {
        throw new Error(error.message || 'Failed to submit form');
      }

      console.log('Form submitted successfully:', data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setSubmitError(error.message || 'Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className="bg-card border-border text-center">
            <CardContent className="p-12">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-white mb-4">Thank You!</h1>
              <p className="text-xl text-gray-300 mb-6">
                Your free estimate request has been submitted successfully.
              </p>
              <div className="bg-wolf-navy rounded-lg p-6 mb-6">
                <h3 className="text-lg font-semibold text-white mb-2">What happens next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold">1</div>
                    <span className="text-gray-300">We'll review your request within 2 hours</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold">2</div>
                    <span className="text-gray-300">Our certified arborist will call you to schedule</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold">3</div>
                    <span className="text-gray-300">Free on-site inspection and detailed estimate</span>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <Button 
                  onClick={() => navigate('/')} 
                  className="wolf-button text-white font-semibold px-8 py-3"
                >
                  Return to Home
                </Button>
                <div className="text-gray-400">
                  <p>Need immediate assistance?</p>
                  <p className="font-semibold text-wolf-blue">(858) 555-TREE</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

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
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Schedule Your Free Tree Service Estimate
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Get a professional assessment from San Diego's most trusted tree service experts
            </p>
            
            {/* Trust Badges */}
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
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl text-white">Tell Us About Your Tree Service Needs</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Service Type */}
                    <div>
                      <label className="block text-white font-medium mb-2">Service Needed *</label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900">
                          <SelectValue placeholder="Choose the service you need" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="tree-trimming">Tree Trimming & Pruning</SelectItem>
                          <SelectItem value="tree-removal">Tree Removal</SelectItem>
                          <SelectItem value="stump-grinding">Stump Grinding</SelectItem>
                          <SelectItem value="emergency">Emergency Tree Service</SelectItem>
                          <SelectItem value="consultation">Tree Health Consultation</SelectItem>
                          <SelectItem value="land-clearing">Land Clearing</SelectItem>
                          <SelectItem value="multiple">Multiple Services</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Contact Information */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Full Name *</label>
                        <Input
                          type="text"
                          value={formData.name}
                          onChange={(e) => handleInputChange('name', e.target.value)}
                          className="bg-white border-gray-300 text-black"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Phone Number *</label>
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
                      <label className="block text-white font-medium mb-2">Email Address</label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="bg-white border-gray-300 text-black"
                      />
                    </div>

                    {/* Property Information */}
                    <div>
                      <label className="block text-white font-medium mb-2">Property Address *</label>
                      <Input
                        type="text"
                        placeholder="Street address, City, ZIP"
                        value={formData.address}
                        onChange={(e) => handleInputChange('address', e.target.value)}
                        className="bg-white border-gray-300 text-black"
                        required
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Property Type</label>
                        <Select value={formData.propertyType} onValueChange={(value) => handleInputChange('propertyType', value)}>
                          <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900">
                            <SelectValue placeholder="Select property type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="residential">Residential</SelectItem>
                            <SelectItem value="commercial">Commercial</SelectItem>
                            <SelectItem value="hoa">HOA/Community</SelectItem>
                            <SelectItem value="municipal">Municipal</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Number of Trees</label>
                        <Select value={formData.treeCount} onValueChange={(value) => handleInputChange('treeCount', value)}>
                          <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900">
                            <SelectValue placeholder="Approximate count" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1 Tree</SelectItem>
                            <SelectItem value="2-3">2-3 Trees</SelectItem>
                            <SelectItem value="4-6">4-6 Trees</SelectItem>
                            <SelectItem value="7-10">7-10 Trees</SelectItem>
                            <SelectItem value="10+">More than 10 Trees</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    {/* Scheduling */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-white font-medium mb-2">Preferred Date</label>
                        <Input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                          className="bg-white border-gray-300 text-black"
                        />
                      </div>
                      <div>
                        <label className="block text-white font-medium mb-2">Preferred Time</label>
                        <Select value={formData.preferredTime} onValueChange={(value) => handleInputChange('preferredTime', value)}>
                          <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900">
                            <SelectValue placeholder="Select time preference" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="morning">Morning (8AM - 12PM)</SelectItem>
                            <SelectItem value="afternoon">Afternoon (12PM - 5PM)</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-white font-medium mb-2">Urgency Level</label>
                      <Select value={formData.urgency} onValueChange={(value) => handleInputChange('urgency', value)}>
                        <SelectTrigger className="bg-gray-100 border-gray-300 text-gray-900">
                          <SelectValue placeholder="How urgent is this project?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="emergency">Emergency (Same day)</SelectItem>
                          <SelectItem value="urgent">Urgent (Within a week)</SelectItem>
                          <SelectItem value="soon">Soon (Within a month)</SelectItem>
                          <SelectItem value="planning">Planning ahead</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Description */}
                    <div>
                      <label className="block text-white font-medium mb-2">Project Description</label>
                      <Textarea
                        placeholder="Please describe your tree service needs, any concerns, or specific requirements..."
                        value={formData.description}
                        onChange={(e) => handleInputChange('description', e.target.value)}
                        className="bg-white border-gray-300 text-black min-h-[100px]"
                      />
                    </div>

                    {/* Terms */}
                    <div className="text-xs text-gray-300">
                      By submitting this form, you consent to receive marketing communications from Wolf Tree Service. 
                      Message and data rates may apply. You can opt out at any time.
                    </div>

                    {/* Error Display */}
                    {submitError && (
                      <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4">
                        <p className="text-red-400 text-sm">{submitError}</p>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="wolf-button w-full text-white font-semibold py-4 text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? 'SUBMITTING...' : 'SCHEDULE MY FREE ESTIMATE'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Card */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Need Immediate Help?</h3>
                  <div className="space-y-4">
                    <Button className="wolf-button w-full text-white font-semibold">
                      <Phone className="w-4 h-4 mr-2" />
                      Call {String.fromCharCode(40)}858{String.fromCharCode(41)} 705-8119
                    </Button>
                    <div className="text-gray-300 text-sm">
                      <p className="flex items-center mb-2">
                        <Clock className="w-4 h-4 mr-2" />
                        Available 24/7 for emergencies
                      </p>
                      <p className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        Serving all of San Diego County
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* What to Expect */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">What to Expect</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">1</div>
                      <div>
                        <h4 className="text-white font-medium">Quick Response</h4>
                        <p className="text-gray-300 text-sm">We'll contact you within 2 hours</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">2</div>
                      <div>
                        <h4 className="text-white font-medium">Free Inspection</h4>
                        <p className="text-gray-300 text-sm">On-site evaluation by certified arborist</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-wolf-blue rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">3</div>
                      <div>
                        <h4 className="text-white font-medium">Detailed Estimate</h4>
                        <p className="text-gray-300 text-sm">Written quote with no hidden fees</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Trust Indicators */}
              <Card className="bg-card border-border">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Why Choose Wolf Tree Service?</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">Licensed & Insured</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">50+ Years Experience</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">Certified Arborists</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-300 text-sm">4.9-Star Rating</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScheduleEstimate;
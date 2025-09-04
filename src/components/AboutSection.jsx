import React from "react";
import { Card, CardContent } from "./ui/card";
import { Star, Award, Shield, Clock } from "lucide-react";
import { testimonials, companyStats } from "../mock/mockData";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>About Dell Property Management</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Your Trusted Property Partner
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  With over 11 years of experience in the real estate industry, Dell Property Management 
                  has established itself as a leading provider of comprehensive property solutions in Atlanta.
                </p>
                <p>
                  We understand that your property is more than just an investment—it's your future. 
                  That's why we're committed to providing personalized service, transparent communication, 
                  and results that exceed expectations.
                </p>
                <p>
                  From individual property owners to large-scale investors, we tailor our services 
                  to meet your unique needs and help you achieve your real estate goals.
                </p>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Licensed & Insured</h4>
                  <p className="text-sm text-slate-600">Fully licensed real estate professionals with comprehensive insurance coverage</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">24/7 Support</h4>
                  <p className="text-sm text-slate-600">Round-the-clock emergency support for tenants and property owners</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Award Winning</h4>
                  <p className="text-sm text-slate-600">Recognized for excellence in property management and customer service</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Star className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Top Rated</h4>
                  <p className="text-sm text-slate-600">Consistently rated 5 stars by clients and industry peers</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-6">
            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-emerald-600 mb-2">{companyStats.propertiesManaged}+</div>
                <div className="text-slate-700 font-medium">Properties Managed</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">{companyStats.clientSatisfaction}%</div>
                <div className="text-slate-700 font-medium">Client Satisfaction</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-orange-50 to-orange-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">{companyStats.yearsExperience}+</div>
                <div className="text-slate-700 font-medium">Years Experience</div>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-lg bg-gradient-to-br from-purple-50 to-purple-100">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">{companyStats.totalClients}+</div>
                <div className="text-slate-700 font-medium">Happy Clients</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div className="space-y-12">
          <div className="text-center">
            <h3 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              What Our Clients Say
            </h3>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Don't just take our word for it. Here's what property owners, investors, and tenants say about our services.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.id} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-700 mb-6 leading-relaxed italic">
                    "{testimonial.content}"
                  </p>
                  <div>
                    <div className="font-semibold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

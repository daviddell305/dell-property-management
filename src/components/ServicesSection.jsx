import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Building2, Home, Users, TrendingUp, Check } from "lucide-react";
import { services } from "../mock/mockData";

const iconMap = {
  building: Building2,
  home: Home,
  users: Users,
  "trending-up": TrendingUp
};

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Comprehensive Property Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            From property management to real estate sales, we provide end-to-end solutions 
            for property owners, investors, and tenants.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <Card 
                key={service.id} 
                className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 bg-white"
              >
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-100 to-emerald-200 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-emerald-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-slate-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-emerald-600" />
                        </div>
                        <span className="text-sm text-slate-700 font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-emerald-100 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today for a free consultation and discover how we can help you maximize your property investment.
              </p>
              <button
                onClick={() => document.getElementById("contact").scrollIntoView({ behavior: "smooth" })}
                className="bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-50 transition-all duration-200 hover:shadow-lg hover:scale-105"
              >
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

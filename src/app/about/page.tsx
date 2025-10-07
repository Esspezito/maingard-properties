"use client";

import { useState, useEffect } from 'react';
import Navigation from '@/components/Navigation';
import InteractiveFeatures from '@/components/InteractiveFeatures';
import { agentProfile } from '@/lib/mockData';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Award, Building, Target, Users, Star, Quote } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 bg-gradient-to-b from-primary/10 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="relative w-32 h-32 mx-auto mb-6">
              <Image
                src="/michael.png"
                alt={agentProfile.name}
                fill
                className="object-contain rounded-full border-4 border-primary/20 shadow-2xl"
                priority
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/20 to-transparent" />
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">{agentProfile.name}</h1>
            <p className="text-xl text-muted-foreground mb-2">{agentProfile.title}</p>
            <p className="text-lg text-muted-foreground mb-6">{agentProfile.company}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={`tel:${agentProfile.phone}`}>
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`mailto:${agentProfile.email}`}>
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              {agentProfile.instagram && (
                <Button size="lg" variant="outline" asChild>
                  <a href={`https://instagram.com/${agentProfile.instagram.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
                    <svg className="mr-2 h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    Instagram
                  </a>
                </Button>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-4">About Michael</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {agentProfile.bio}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Target className="h-5 w-5 mr-2 text-primary" />
                      Specializations
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {agentProfile.specializations.map((spec, index) => (
                        <Badge key={index} variant="secondary">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Service Areas
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {agentProfile.areas.map((area, index) => (
                        <Badge key={index} variant="outline">
                          {area}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <Separator className="my-6" />

                {/* Achievements */}
                {agentProfile.achievements && (
                  <div>
                    <h3 className="font-semibold mb-3 flex items-center">
                      <Award className="h-5 w-5 mr-2 text-primary" />
                      Achievements & Credentials
                    </h3>
                    <ul className="space-y-2">
                      {agentProfile.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Get In Touch</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardContent className="p-6">
                  <Phone className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Phone</h3>
                  <p className="text-muted-foreground">{agentProfile.phone}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Mail className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Email</h3>
                  <p className="text-muted-foreground">{agentProfile.email}</p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-6">
                  <Building className="h-8 w-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Office</h3>
                  <p className="text-muted-foreground text-sm">
                    {agentProfile.address?.split(',').slice(0, 2).join(',')}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {agentProfile.address?.split(',').slice(2).join(',')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Michael */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-8">Why Choose Michael Maingard?</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Global Network</h3>
                <p className="text-muted-foreground text-sm">
                  Access to Christie's International Real Estate's exclusive global buyer network
                </p>
              </div>
              
              <div>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Local Expertise</h3>
                <p className="text-muted-foreground text-sm">
                  Deep knowledge of Cape Town's Atlantic Seaboard property market
                </p>
              </div>
              
              <div>
                <div className="h-16 w-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Premium Service</h3>
                <p className="text-muted-foreground text-sm">
                  Sophisticated marketing and personalized attention for every client
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-12 text-center">What Our Clients Say</h2>
            
            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
              {/* Testimonial 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Michael made our property sale seamless from start to finish. His deep knowledge of the Sea Point market helped us achieve a price well above our expectations. The marketing materials were exceptional and attracted serious buyers immediately."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">SJ</span>
                      </div>
                      <div>
                        <p className="font-semibold">Sarah Johnson</p>
                        <p className="text-sm text-muted-foreground">Sea Point Property Owner</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonial 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "As first-time buyers in Cape Town, Michael's patience and expertise were invaluable. He guided us through every step, from property selection to final transfer. We found our dream home in Green Point thanks to his dedication and market insight."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">DM</span>
                      </div>
                      <div>
                        <p className="font-semibold">David & Maria Chen</p>
                        <p className="text-sm text-muted-foreground">Green Point Homeowners</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonial 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Michael's professionalism and attention to detail are outstanding. He arranged private viewings that worked with our busy schedule and provided honest market insights that helped us make informed decisions. Highly recommend!"
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">RT</span>
                      </div>
                      <div>
                        <p className="font-semibold">Robert Thompson</p>
                        <p className="text-sm text-muted-foreground">Investment Property Buyer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonial 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Working with Michael was a pleasure from day one. His connections with Christie's International Real Estate brought international exposure to our luxury listing in Bantry Bay. We received multiple offers within weeks!"
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">LP</span>
                      </div>
                      <div>
                        <p className="font-semibold">Linda Patel</p>
                        <p className="text-sm text-muted-foreground">Bantry Bay Seller</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonial 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Michael's market knowledge of the Atlantic Seaboard is unparalleled. He helped us navigate a competitive market and secure our ideal apartment in Mouille Point. His negotiation skills saved us both time and money."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">JK</span>
                      </div>
                      <div>
                        <p className="font-semibold">James & Kate Wilson</p>
                        <p className="text-sm text-muted-foreground">Mouille Point Buyers</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonial 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <Quote className="h-8 w-8 text-primary/20 mb-4" />
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      "Relocating from London, we needed an agent who understood international clients. Michael's communication was excellent, providing virtual tours and detailed market reports. He made our move to Cape Town stress-free."
                    </p>
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-gradient-to-br from-primary to-primary/60 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold text-sm">AS</span>
                      </div>
                      <div>
                        <p className="font-semibold">Andrew Sterling</p>
                        <p className="text-sm text-muted-foreground">International Relocator</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-lg mb-8 opacity-90">
              Let Michael guide you through Cape Town's luxury property market
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/">View Properties</a>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-primary" asChild>
                <a href={`tel:${agentProfile.phone}`}>Schedule Consultation</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card py-8 border-t">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-muted-foreground">
              © Michael Maingard properties - particle.is
            </p>
          </div>
        </div>
      </footer>

      {/* Interactive Features */}
      <InteractiveFeatures />
    </main>
  );
}
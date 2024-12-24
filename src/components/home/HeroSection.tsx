'use client';

import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/form';
import { Section } from '@/components/ui/layout';
import { Heading, Text } from '@/components/ui/typography';
import { Search, MapPin } from 'lucide-react';

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);

  return (
    <div className="relative min-h-[80vh]">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          className="absolute min-w-full min-h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/garage-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <Section spacing="xl" className="relative z-10">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Heading 
              level={1} 
              className="text-white mb-6 text-4xl md:text-5xl lg:text-6xl font-bold animate-fade-in"
            >
              Find Expert Auto Repair Services
            </Heading>
            <Text className="text-white/90 text-xl md:text-2xl animate-fade-in-delay">
              Connect with trusted mechanics and auto repair shops in your area
            </Text>
          </div>

          <div className="bg-white/95 backdrop-blur-sm rounded-xl shadow-2xl p-6 max-w-2xl mx-auto transform hover:scale-[1.02] transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative group">
                <Input
                  icon={<Search className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />}
                  placeholder="Service or repair type..."
                  className="w-full transition-shadow hover:shadow-md focus:shadow-lg"
                />
              </div>
              <div className="relative group">
                <Input
                  icon={<MapPin className="h-5 w-5 text-gray-400 group-hover:text-blue-500 transition-colors" />}
                  placeholder="Location..."
                  className="w-full transition-shadow hover:shadow-md focus:shadow-lg"
                />
              </div>
              <div className="md:col-span-2">
                <Button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Find Garages
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-6 text-base md:text-lg">
            <div className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              <span className="bg-blue-500 p-1 rounded-full mr-2">✓</span>
              <span className="text-white">Verified Mechanics</span>
            </div>
            <div className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              <span className="bg-blue-500 p-1 rounded-full mr-2">✓</span>
              <span className="text-white">Expert Service</span>
            </div>
            <div className="flex items-center backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full hover:bg-white/20 transition-colors">
              <span className="bg-blue-500 p-1 rounded-full mr-2">✓</span>
              <span className="text-white">Fair Pricing</span>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
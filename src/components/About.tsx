import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Zap, Lightbulb, Brain, Rocket } from 'lucide-react';

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
              About Us
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p className="leading-relaxed">
                At EZ Tech, we simplify innovation. From digital transformation to AI-powered solutions, we 
                empower businesses to work smarter, adapt faster, make data-driven decisions and achieve more. 
								Our expert team delivers seamless cloud migrations, actionable data analytics, and custom machine 
                learning models tailored to your goals.
              </p>
              <p className="leading-relaxed">
                With innovative products like EZChat for intelligent communication, EZ Dash for insightful analytics, and 
								EZ Note for efficient workflow management, we help businesses visualize insights and enhance productivity. 
								At EZ Tech, technology isn't just a tool — it's the key to unlocking your potential.
              </p>
              <p className="font-semibold text-gray-900">
                Let's transform the future, together.
              </p>
            </div>
          </div>

          {/* Right Column - Feature Grid */}
          <div className="grid grid-cols-2 gap-6">
            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <Zap className="h-6 w-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                Simplify Innovation
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                Making complex technology accessible and effective
              </p>
            </div>

            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-green-100 rounded-xl flex items-center justify-center group-hover:bg-green-500 transition-colors duration-300">
                <Lightbulb className="h-6 w-6 text-green-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                Smart Solutions
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                Empowering businesses with intelligent technology
              </p>
            </div>

            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                <Brain className="h-6 w-6 text-purple-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                AI Excellence
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                Cutting-edge AI solutions for real-world challenges
              </p>
            </div>

            <div className="group p-6 bg-gray-50 rounded-2xl hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 transition-all duration-300">
              <div className="h-12 w-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                <Rocket className="h-6 w-6 text-orange-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-gray-900 group-hover:text-white transition-colors duration-300">
                Future Ready
              </h3>
              <p className="mt-2 text-sm text-gray-600 group-hover:text-gray-300 transition-colors duration-300">
                Preparing businesses for tomorrow's challenges
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

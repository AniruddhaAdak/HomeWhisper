import React from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Brain, 
  Zap, 
  Shield, 
  Users, 
  Award,
  Target,
  Lightbulb,
  Heart,
  Globe,
  Code,
  Smartphone
} from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We leverage cutting-edge AI technology to create intelligent solutions that anticipate your needs.'
    },
    {
      icon: Shield,
      title: 'Privacy & Security',
      description: 'Your data stays secure with end-to-end encryption and privacy-first design principles.'
    },
    {
      icon: Users,
      title: 'User-Centric',
      description: 'Every feature is designed with the user experience in mind, making smart homes accessible to everyone.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Our energy optimization features help reduce environmental impact while saving costs.'
    }
  ];

  const stats = [
    { number: '10,000+', label: 'Happy Homes' },
    { number: '50+', label: 'Device Types' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'AI Monitoring' }
  ];

  const team = [
    {
      name: 'Aniruddha Adak',
      role: 'Founder & Lead Developer',
      description: 'Full-stack developer passionate about AI and IoT technologies',
      gradient: 'from-purple-500 to-cyan-500'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Project Genesis',
      description: 'HomeWhisper concept born from the vision of truly intelligent home automation'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Advanced Gemini AI integration for natural language processing and smart automation'
    },
    {
      year: '2024',
      title: 'Beta Launch',
      description: 'First beta version with voice control and gesture recognition capabilities'
    },
    {
      year: 'Future',
      title: 'Global Expansion',
      description: 'Planning worldwide deployment with support for multiple languages and regions'
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-cyan-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                <Home className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
                <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  About HomeWhisper
                </span>
              </h1>
            </div>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              HomeWhisper represents the future of smart home automation - where artificial intelligence 
              meets intuitive design to create living spaces that truly understand and adapt to your needs. 
              Our mission is to make every home smarter, more efficient, and more responsive to its inhabitants.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/30 backdrop-blur">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Target className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white font-orbitron">Our Mission</h2>
              </div>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We believe that technology should enhance human life, not complicate it. HomeWhisper was 
                created to bridge the gap between advanced smart home capabilities and everyday usability.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                By leveraging the power of artificial intelligence, we're building a platform that learns, 
                adapts, and anticipates your needs - creating a truly intelligent living environment that 
                works seamlessly in the background of your daily life.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <Lightbulb className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Smart Automation</h3>
                    <p className="text-gray-400 text-sm">Intelligent routines that adapt to your lifestyle</p>
                  </div>
                  <div className="text-center">
                    <Brain className="w-12 h-12 text-purple-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">AI-Powered</h3>
                    <p className="text-gray-400 text-sm">Advanced machine learning for predictive control</p>
                  </div>
                  <div className="text-center">
                    <Shield className="w-12 h-12 text-green-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Secure</h3>
                    <p className="text-gray-400 text-sm">Enterprise-grade security and privacy protection</p>
                  </div>
                  <div className="text-center">
                    <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold">Efficient</h3>
                    <p className="text-gray-400 text-sm">Optimized energy usage and cost savings</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">{value.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Our Journey</h2>
            <p className="text-xl text-gray-400">From concept to the future of smart homes</p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex items-center space-x-8 ${index % 2 === 1 ? 'flex-row-reverse space-x-reverse' : ''}`}
              >
                <div className="flex-1">
                  <div className={`p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 ${index % 2 === 1 ? 'text-right' : ''}`}>
                    <div className="text-2xl font-bold text-purple-400 mb-2 font-orbitron">{item.year}</div>
                    <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
                
                <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full flex-shrink-0"></div>
                
                <div className="flex-1"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4 font-orbitron">Meet the Creator</h2>
            <p className="text-xl text-gray-400">The mind behind HomeWhisper</p>
          </motion.div>

          <div className="flex justify-center">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-md"
              >
                <div className="p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 text-center">
                  <div className={`w-24 h-24 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-6`}>
                    <Code className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2 font-orbitron">{member.name}</h3>
                  <p className="text-purple-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-400 leading-relaxed">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-cyan-900/50"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-red-400 fill-current" />
              <h2 className="text-4xl font-bold text-white font-orbitron">Join Our Journey</h2>
            </div>
            
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              HomeWhisper is more than just a smart home platform - it's a vision of the future where 
              technology seamlessly integrates with daily life to create better living experiences.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold text-lg flex items-center space-x-2 hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Smartphone className="w-5 h-5" />
                <span>Get Started Today</span>
              </motion.button>
              
              <motion.button
                className="px-8 py-4 bg-white/10 backdrop-blur text-white rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-200 border border-white/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
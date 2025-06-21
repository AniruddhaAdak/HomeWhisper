import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  Hand, 
  Shield, 
  Zap, 
  BarChart3, 
  Brain,
  Eye,
  Cpu,
  Cloud,
  Thermometer,
  Lock,
  Camera,
  Lightbulb,
  Wifi,
  Smartphone,
  MessageSquare,
  Calendar,
  Home,
  AlertTriangle,
  TrendingUp
} from 'lucide-react';

const Features = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Features', icon: Eye },
    { id: 'ai', name: 'AI Powered', icon: Brain },
    { id: 'control', name: 'Control', icon: Smartphone },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'energy', name: 'Energy', icon: Zap },
    { id: 'automation', name: 'Automation', icon: Cpu }
  ];

  const features = [
    {
      id: 1,
      title: 'Natural Language Voice Control',
      description: 'Control any smart device using natural speech patterns. Our Gemini AI understands context and intent.',
      icon: Mic,
      category: 'ai',
      gradient: 'from-blue-500 to-cyan-500',
      details: 'Powered by Gemini 2.0 Flash for instant voice recognition and command processing'
    },
    {
      id: 2,
      title: 'Advanced Gesture Recognition',
      description: 'Control lights, temperature, and devices with intuitive hand gestures captured by your camera.',
      icon: Hand,
      category: 'control',
      gradient: 'from-purple-500 to-pink-500',
      details: 'Computer vision AI processes hand movements in real-time'
    },
    {
      id: 3,
      title: 'Intelligent Security Monitoring',
      description: 'AI-powered threat detection analyzes patterns and alerts you to suspicious activities.',
      icon: Shield,
      category: 'security',
      gradient: 'from-green-500 to-emerald-500',
      details: 'Machine learning algorithms detect anomalies and potential security breaches'
    },
    {
      id: 4,
      title: 'Smart Energy Optimization',
      description: 'Automatically optimize energy usage based on your habits and utility rates.',
      icon: Zap,
      category: 'energy',
      gradient: 'from-yellow-500 to-orange-500',
      details: 'Reduces energy costs by up to 30% through intelligent scheduling'
    },
    {
      id: 5,
      title: 'Predictive Analytics Dashboard',
      description: 'Gain insights into usage patterns, energy consumption, and device performance.',
      icon: BarChart3,
      category: 'ai',
      gradient: 'from-indigo-500 to-purple-500',
      details: 'Advanced charts and predictions powered by historical data analysis'
    },
    {
      id: 6,
      title: 'Automated Scene Creation',
      description: 'AI learns your preferences and automatically creates perfect lighting and climate scenes.',
      icon: Brain,
      category: 'automation',
      gradient: 'from-teal-500 to-cyan-500',
      details: 'Self-learning algorithms adapt to your daily routines'
    },
    {
      id: 7,
      title: 'Visual Scene Understanding',
      description: 'Camera-based AI understands room context and adjusts settings accordingly.',
      icon: Eye,
      category: 'ai',
      gradient: 'from-rose-500 to-pink-500',
      details: 'Computer vision recognizes objects, people, and activities'
    },
    {
      id: 8,
      title: 'Weather-Based Automation',
      description: 'Automatically adjust temperature, lighting, and blinds based on weather forecasts.',
      icon: Cloud,
      category: 'automation',
      gradient: 'from-sky-500 to-blue-500',
      details: 'Integrates with weather APIs for proactive home adjustments'
    },
    {
      id: 9,
      title: 'Smart Climate Control',
      description: 'AI-optimized HVAC control that learns your preferences and saves energy.',
      icon: Thermometer,
      category: 'energy',
      gradient: 'from-red-500 to-orange-500',
      details: 'Maintains perfect comfort while minimizing energy consumption'
    },
    {
      id: 10,
      title: 'Advanced Device Security',
      description: 'Monitor and secure all IoT devices with AI-powered vulnerability detection.',
      icon: Lock,
      category: 'security',
      gradient: 'from-gray-600 to-gray-800',
      details: 'Continuous security scanning and automatic patch management'
    },
    {
      id: 11,
      title: 'Smart Camera Analytics',
      description: 'AI-powered video analysis for person detection, package monitoring, and more.',
      icon: Camera,
      category: 'security',
      gradient: 'from-violet-500 to-purple-500',
      details: 'Real-time video processing with privacy-first design'
    },
    {
      id: 12,
      title: 'Intelligent Lighting System',
      description: 'Adaptive lighting that adjusts to time of day, activity, and mood preferences.',
      icon: Lightbulb,
      category: 'automation',
      gradient: 'from-yellow-400 to-yellow-600',
      details: 'Circadian rhythm optimization and energy-efficient scheduling'
    },
    {
      id: 13,
      title: 'Network Health Monitoring',
      description: 'Monitor WiFi performance and automatically optimize device connections.',
      icon: Wifi,
      category: 'control',
      gradient: 'from-emerald-500 to-teal-500',
      details: 'Real-time network diagnostics and performance optimization'
    },
    {
      id: 14,
      title: 'Conversational AI Assistant',
      description: 'Natural conversation with your home - ask questions, get insights, and control everything.',
      icon: MessageSquare,
      category: 'ai',
      gradient: 'from-blue-600 to-indigo-600',
      details: 'Context-aware conversations powered by advanced language models'
    },
    {
      id: 15,
      title: 'Smart Scheduling Engine',
      description: 'AI creates and manages schedules for all your devices based on your lifestyle.',
      icon: Calendar,
      category: 'automation',
      gradient: 'from-purple-600 to-pink-600',
      details: 'Learning algorithms optimize schedules for maximum efficiency'
    },
    {
      id: 16,
      title: 'Home Health Diagnostics',
      description: 'Comprehensive system health checks with AI-powered recommendations.',
      icon: Home,
      category: 'ai',
      gradient: 'from-green-600 to-emerald-600',
      details: 'Proactive maintenance alerts and performance optimization'
    },
    {
      id: 17,
      title: 'Anomaly Detection System',
      description: 'AI monitors all devices and alerts you to unusual patterns or potential issues.',
      icon: AlertTriangle,
      category: 'security',
      gradient: 'from-red-600 to-rose-600',
      details: 'Machine learning detects patterns that indicate potential problems'
    },
    {
      id: 18,
      title: 'Predictive Maintenance',
      description: 'Forecast device maintenance needs before problems occur.',
      icon: TrendingUp,
      category: 'ai',
      gradient: 'from-cyan-600 to-blue-600',
      details: 'Extends device lifespan and prevents unexpected failures'
    }
  ];

  const filteredFeatures = activeCategory === 'all' 
    ? features 
    : features.filter(feature => feature.category === activeCategory);

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative py-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-cyan-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                18+ AI-Powered Features
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the complete range of intelligent features that make HomeWhisper 
              the most advanced smart home command center available today.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-200 ${
                    activeCategory === category.id
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-lg'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{category.name}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group p-8 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 font-orbitron">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <div className="pt-4 border-t border-white/10">
                    <p className="text-sm text-purple-300 font-medium">
                      {feature.details}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* AI Integration Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-cyan-900/30"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <Brain className="w-12 h-12 text-purple-400" />
              <h2 className="text-4xl font-bold text-white font-orbitron">
                Powered by Gemini AI
              </h2>
            </div>
            
            <p className="text-xl text-gray-300 leading-relaxed">
              Every feature in HomeWhisper is enhanced by Google's advanced Gemini 2.0 Flash model, 
              providing intelligent decision-making, natural language understanding, and predictive 
              capabilities that make your smart home truly intelligent.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                <div className="text-gray-400">Accuracy Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">&lt;100ms</div>
                <div className="text-gray-400">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                <div className="text-gray-400">AI Monitoring</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;
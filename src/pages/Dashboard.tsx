import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Thermometer, 
  Lightbulb, 
  Shield, 
  Zap, 
  Wifi,
  Camera,
  Lock,
  Speaker,
  Tv,
  Wind,
  Droplets,
  Sun,
  Moon,
  Activity,
  AlertTriangle,
  CheckCircle
} from 'lucide-react';
import { geminiService } from '../lib/gemini';

const Dashboard = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room Lights', type: 'light', status: 'on', value: 75, icon: Lightbulb },
    { id: 2, name: 'Thermostat', type: 'climate', status: 'auto', value: 72, icon: Thermometer },
    { id: 3, name: 'Security System', type: 'security', status: 'armed', value: 100, icon: Shield },
    { id: 4, name: 'Front Door Camera', type: 'camera', status: 'recording', value: 100, icon: Camera },
    { id: 5, name: 'Smart Lock', type: 'lock', status: 'locked', value: 100, icon: Lock },
    { id: 6, name: 'Sound System', type: 'audio', status: 'off', value: 0, icon: Speaker },
    { id: 7, name: 'Smart TV', type: 'entertainment', status: 'on', value: 45, icon: Tv },
    { id: 8, name: 'Air Purifier', type: 'air', status: 'auto', value: 80, icon: Wind }
  ]);

  const [aiInsights, setAiInsights] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [homeStats, setHomeStats] = useState({
    temperature: 72,
    humidity: 45,
    energyUsage: 2.4,
    securityStatus: 'secure'
  });

  const loadAIInsights = async () => {
    setIsLoading(true);
    try {
      const insights = await geminiService.analyzeDeviceUsage(devices);
      setAiInsights(insights);
    } catch (error) {
      console.error('Failed to load AI insights:', error);
      setAiInsights('AI insights temporarily unavailable. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAIInsights();
  }, []);

  const toggleDevice = (deviceId: number) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        const newStatus = device.status === 'on' ? 'off' : 'on';
        return { ...device, status: newStatus, value: newStatus === 'on' ? 100 : 0 };
      }
      return device;
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on': case 'armed': case 'locked': case 'recording': return 'text-green-400';
      case 'off': return 'text-gray-400';
      case 'auto': return 'text-blue-400';
      default: return 'text-yellow-400';
    }
  };

  const getDeviceGradient = (type: string) => {
    const gradients: { [key: string]: string } = {
      light: 'from-yellow-500 to-orange-500',
      climate: 'from-blue-500 to-cyan-500',
      security: 'from-green-500 to-emerald-500',
      camera: 'from-purple-500 to-pink-500',
      lock: 'from-gray-600 to-gray-800',
      audio: 'from-indigo-500 to-purple-500',
      entertainment: 'from-red-500 to-rose-500',
      air: 'from-teal-500 to-cyan-500'
    };
    return gradients[type] || 'from-gray-500 to-gray-700';
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl font-bold text-white mb-4 font-orbitron">
              Smart Home Dashboard
            </h1>
            <p className="text-xl text-gray-400">
              Monitor and control all your connected devices from one central hub
            </p>
          </motion.div>
        </div>
      </section>

      {/* Home Stats */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Temperature</p>
                  <p className="text-2xl font-bold text-white">{homeStats.temperature}°F</p>
                </div>
                <Thermometer className="w-8 h-8 text-blue-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Humidity</p>
                  <p className="text-2xl font-bold text-white">{homeStats.humidity}%</p>
                </div>
                <Droplets className="w-8 h-8 text-cyan-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Energy Usage</p>
                  <p className="text-2xl font-bold text-white">{homeStats.energyUsage} kW</p>
                </div>
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-400 text-sm">Security</p>
                  <p className="text-2xl font-bold text-green-400 capitalize">{homeStats.securityStatus}</p>
                </div>
                <CheckCircle className="w-8 h-8 text-green-400" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Device Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-8 font-orbitron">Connected Devices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {devices.map((device, index) => {
              const Icon = device.icon;
              return (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => toggleDevice(device.id)}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${getDeviceGradient(device.type)} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)} bg-white/10`}>
                      {device.status.toUpperCase()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{device.name}</h3>
                  
                  {device.value > 0 && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-400">Level</span>
                        <span className="text-white">{device.value}%</span>
                      </div>
                      <div className="w-full bg-white/10 rounded-full h-2">
                        <div 
                          className={`h-2 bg-gradient-to-r ${getDeviceGradient(device.type)} rounded-full transition-all duration-300`}
                          style={{ width: `${device.value}%` }}
                        />
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Insights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900/30 to-cyan-900/30 rounded-2xl p-8 border border-white/10"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white font-orbitron flex items-center space-x-2">
                <Activity className="w-6 h-6 text-purple-400" />
                <span>AI Insights</span>
              </h2>
              <motion.button
                onClick={loadAIInsights}
                disabled={isLoading}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-50 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {isLoading ? 'Analyzing...' : 'Refresh'}
              </motion.button>
            </div>
            
            <div className="bg-black/20 rounded-xl p-6">
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-purple-400"></div>
                  <span className="text-gray-400">AI is analyzing your smart home data...</span>
                </div>
              ) : (
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">
                  {aiInsights || 'Click "Refresh" to get AI-powered insights about your smart home usage and optimization recommendations.'}
                </p>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
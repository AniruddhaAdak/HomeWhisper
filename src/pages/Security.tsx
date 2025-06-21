import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Camera, 
  Lock, 
  AlertTriangle, 
  CheckCircle,
  Eye,
  Bell,
  Smartphone,
  Wifi,
  Activity,
  MapPin,
  Clock,
  Users
} from 'lucide-react';

const Security = () => {
  const [securityStatus, setSecurityStatus] = useState('armed');
  const [alerts, setAlerts] = useState([
    { id: 1, type: 'info', message: 'Front door camera detected motion', time: '2 minutes ago', severity: 'low' },
    { id: 2, type: 'warning', message: 'Unusual network activity detected', time: '15 minutes ago', severity: 'medium' },
    { id: 3, type: 'success', message: 'Security system armed successfully', time: '1 hour ago', severity: 'low' }
  ]);

  const securityDevices = [
    { id: 1, name: 'Front Door Camera', status: 'online', location: 'Front Entrance', icon: Camera, color: 'from-blue-500 to-cyan-500' },
    { id: 2, name: 'Smart Door Lock', status: 'locked', location: 'Front Door', icon: Lock, color: 'from-green-500 to-emerald-500' },
    { id: 3, name: 'Motion Sensor', status: 'active', location: 'Living Room', icon: Activity, color: 'from-purple-500 to-pink-500' },
    { id: 4, name: 'Window Sensor', status: 'closed', location: 'Bedroom', icon: Shield, color: 'from-orange-500 to-red-500' },
    { id: 5, name: 'Security Panel', status: 'armed', location: 'Hallway', icon: Shield, color: 'from-red-500 to-pink-500' },
    { id: 6, name: 'Smoke Detector', status: 'normal', location: 'Kitchen', icon: AlertTriangle, color: 'from-yellow-500 to-orange-500' }
  ];

  const toggleSecuritySystem = () => {
    setSecurityStatus(securityStatus === 'armed' ? 'disarmed' : 'armed');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'online': case 'locked': case 'active': case 'armed': case 'normal': return 'text-green-400';
      case 'offline': case 'unlocked': return 'text-red-400';
      case 'closed': return 'text-blue-400';
      default: return 'text-yellow-400';
    }
  };

  const getAlertIcon = (type: string) => {
    switch (type) {
      case 'warning': return AlertTriangle;
      case 'success': return CheckCircle;
      default: return Bell;
    }
  };

  const getAlertColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      default: return 'border-blue-500 bg-blue-500/10';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-orange-900/30 to-yellow-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-red-400 to-yellow-400 bg-clip-text text-transparent">
                Security Center
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor and protect your home with AI-powered security systems and real-time threat detection
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Status */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className={`text-center p-12 rounded-3xl border-2 transition-all duration-300 ${
              securityStatus === 'armed' 
                ? 'bg-green-500/10 border-green-500' 
                : 'bg-red-500/10 border-red-500'
            }`}
          >
            <div className={`w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center ${
              securityStatus === 'armed' 
                ? 'bg-gradient-to-r from-green-500 to-emerald-500' 
                : 'bg-gradient-to-r from-red-500 to-rose-500'
            }`}>
              <Shield className="w-12 h-12 text-white" />
            </div>
            
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">
              Security System {securityStatus === 'armed' ? 'Armed' : 'Disarmed'}
            </h2>
            
            <p className="text-gray-300 mb-8">
              {securityStatus === 'armed' 
                ? 'Your home is protected. All sensors are active and monitoring.' 
                : 'Security system is disarmed. Click below to activate protection.'
              }
            </p>
            
            <motion.button
              onClick={toggleSecuritySystem}
              className={`px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 ${
                securityStatus === 'armed'
                  ? 'bg-red-600 hover:bg-red-700 text-white'
                  : 'bg-green-600 hover:bg-green-700 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {securityStatus === 'armed' ? 'Disarm System' : 'Arm System'}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Security Devices */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Security Devices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {securityDevices.map((device, index) => {
              const Icon = device.icon;
              return (
                <motion.div
                  key={device.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${device.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)} bg-white/10`}>
                      {device.status.toUpperCase()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-2">{device.name}</h3>
                  <div className="flex items-center space-x-2 text-gray-400 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{device.location}</span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Alerts */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Recent Alerts</h2>
          
          <div className="space-y-4">
            {alerts.map((alert, index) => {
              const AlertIcon = getAlertIcon(alert.type);
              return (
                <motion.div
                  key={alert.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className={`p-6 rounded-xl border ${getAlertColor(alert.severity)} backdrop-blur`}
                >
                  <div className="flex items-start space-x-4">
                    <AlertIcon className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <p className="text-white font-medium mb-1">{alert.message}</p>
                      <div className="flex items-center space-x-2 text-gray-400 text-sm">
                        <Clock className="w-4 h-4" />
                        <span>{alert.time}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl border border-white/10"
            >
              <Eye className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">24/7 Monitoring</h3>
              <p className="text-gray-400">Continuous surveillance with AI-powered threat detection</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-green-900/30 to-emerald-900/30 rounded-2xl border border-white/10"
            >
              <Smartphone className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Mobile Alerts</h3>
              <p className="text-gray-400">Instant notifications sent directly to your phone</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-white/10"
            >
              <Wifi className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Network Security</h3>
              <p className="text-gray-400">Protect your smart home network from cyber threats</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center p-8 bg-gradient-to-br from-red-900/30 to-rose-900/30 rounded-2xl border border-white/10"
            >
              <Users className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Family Safety</h3>
              <p className="text-gray-400">Keep your loved ones safe with intelligent monitoring</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Security;
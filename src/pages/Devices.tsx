import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Lightbulb, 
  Thermometer, 
  Shield, 
  Camera, 
  Lock, 
  Speaker, 
  Tv, 
  Wind,
  Wifi,
  Smartphone,
  Power,
  Settings,
  Plus,
  Search,
  Filter
} from 'lucide-react';

const Devices = () => {
  const [devices, setDevices] = useState([
    { id: 1, name: 'Living Room Lights', type: 'lighting', status: 'on', battery: 100, room: 'Living Room', icon: Lightbulb, color: 'from-yellow-500 to-orange-500' },
    { id: 2, name: 'Smart Thermostat', type: 'climate', status: 'auto', battery: 85, room: 'Hallway', icon: Thermometer, color: 'from-blue-500 to-cyan-500' },
    { id: 3, name: 'Security Camera', type: 'security', status: 'recording', battery: 92, room: 'Front Door', icon: Camera, color: 'from-purple-500 to-pink-500' },
    { id: 4, name: 'Smart Lock', type: 'security', status: 'locked', battery: 78, room: 'Front Door', icon: Lock, color: 'from-gray-600 to-gray-800' },
    { id: 5, name: 'Sound System', type: 'entertainment', status: 'off', battery: 100, room: 'Living Room', icon: Speaker, color: 'from-indigo-500 to-purple-500' },
    { id: 6, name: 'Smart TV', type: 'entertainment', status: 'on', battery: 100, room: 'Living Room', icon: Tv, color: 'from-red-500 to-rose-500' },
    { id: 7, name: 'Air Purifier', type: 'climate', status: 'auto', battery: 67, room: 'Bedroom', icon: Wind, color: 'from-teal-500 to-cyan-500' },
    { id: 8, name: 'WiFi Router', type: 'network', status: 'online', battery: 100, room: 'Office', icon: Wifi, color: 'from-green-500 to-emerald-500' }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterType, setFilterType] = useState('all');

  const deviceTypes = ['all', 'lighting', 'climate', 'security', 'entertainment', 'network'];

  const filteredDevices = devices.filter(device => {
    const matchesSearch = device.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterType === 'all' || device.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const toggleDevice = (deviceId: number) => {
    setDevices(devices.map(device => {
      if (device.id === deviceId) {
        const newStatus = device.status === 'on' ? 'off' : 'on';
        return { ...device, status: newStatus };
      }
      return device;
    }));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'on': case 'recording': case 'locked': case 'online': return 'text-green-400';
      case 'off': return 'text-gray-400';
      case 'auto': return 'text-blue-400';
      default: return 'text-yellow-400';
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
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
                Smart Devices
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor, control, and manage all your connected smart home devices from one central hub
            </p>
          </motion.div>
        </div>
      </section>

      {/* Controls */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search devices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            {/* Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={filterType}
                onChange={(e) => setFilterType(e.target.value)}
                className="pl-10 pr-8 py-3 bg-white/10 backdrop-blur rounded-xl border border-white/20 text-white focus:outline-none focus:border-purple-500 appearance-none"
              >
                {deviceTypes.map(type => (
                  <option key={type} value={type} className="bg-gray-800">
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Add Device Button */}
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-xl font-semibold flex items-center space-x-2 hover:from-purple-700 hover:to-cyan-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              <span>Add Device</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Device Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredDevices.map((device, index) => {
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
                    <div className={`w-12 h-12 bg-gradient-to-r ${device.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(device.status)} bg-white/10`}>
                      {device.status.toUpperCase()}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-semibold text-white mb-1">{device.name}</h3>
                  <p className="text-gray-400 text-sm mb-4">{device.room}</p>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Battery</span>
                      <span className="text-white">{device.battery}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div 
                        className={`h-2 bg-gradient-to-r ${device.color} rounded-full transition-all duration-300`}
                        style={{ width: `${device.battery}%` }}
                      />
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                    <motion.button
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Settings className="w-4 h-4 text-gray-400" />
                    </motion.button>
                    <motion.button
                      className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Power className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Devices;
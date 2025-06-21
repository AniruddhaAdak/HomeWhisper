import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Home, 
  Moon, 
  Sun, 
  Coffee, 
  Tv, 
  Shield,
  Music,
  Bed,
  Car,
  Users,
  Plus,
  Play,
  Edit,
  Trash2
} from 'lucide-react';

const Scenes = () => {
  const [scenes, setScenes] = useState([
    {
      id: 1,
      name: 'Good Morning',
      description: 'Start your day with perfect lighting and temperature',
      icon: Sun,
      color: 'from-yellow-500 to-orange-500',
      devices: ['Living Room Lights', 'Thermostat', 'Coffee Maker'],
      isActive: false,
      schedule: '7:00 AM'
    },
    {
      id: 2,
      name: 'Movie Night',
      description: 'Dim lights and optimize entertainment settings',
      icon: Tv,
      color: 'from-purple-500 to-pink-500',
      devices: ['TV', 'Sound System', 'Living Room Lights'],
      isActive: true,
      schedule: 'Manual'
    },
    {
      id: 3,
      name: 'Bedtime',
      description: 'Wind down with relaxing ambiance',
      icon: Moon,
      color: 'from-blue-500 to-indigo-500',
      devices: ['Bedroom Lights', 'Thermostat', 'Security System'],
      isActive: false,
      schedule: '10:30 PM'
    },
    {
      id: 4,
      name: 'Away Mode',
      description: 'Secure your home when you leave',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
      devices: ['Security System', 'All Lights', 'Thermostat'],
      isActive: false,
      schedule: 'Geofence'
    },
    {
      id: 5,
      name: 'Party Mode',
      description: 'Energetic lighting and music for entertaining',
      icon: Music,
      color: 'from-pink-500 to-rose-500',
      devices: ['All Lights', 'Sound System', 'Smart Speakers'],
      isActive: false,
      schedule: 'Manual'
    },
    {
      id: 6,
      name: 'Work Focus',
      description: 'Optimal lighting and temperature for productivity',
      icon: Coffee,
      color: 'from-teal-500 to-cyan-500',
      devices: ['Office Lights', 'Thermostat', 'Air Purifier'],
      isActive: false,
      schedule: '9:00 AM'
    }
  ]);

  const activateScene = (sceneId: number) => {
    setScenes(scenes.map(scene => ({
      ...scene,
      isActive: scene.id === sceneId ? !scene.isActive : false
    })));
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/50 via-purple-900/30 to-pink-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                Smart Scenes
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Create and manage automated scenes that control multiple devices with a single command
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            <motion.button
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold flex items-center space-x-2 hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Plus className="w-5 h-5" />
              <span>Create Scene</span>
            </motion.button>
            
            <motion.button
              className="px-6 py-3 bg-white/10 backdrop-blur text-white rounded-xl font-semibold hover:bg-white/20 transition-all duration-200 border border-white/20"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Import Scenes
            </motion.button>
          </div>
        </div>
      </section>

      {/* Scenes Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scenes.map((scene, index) => {
              const Icon = scene.icon;
              return (
                <motion.div
                  key={scene.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`relative p-8 bg-white/5 backdrop-blur rounded-2xl border transition-all duration-300 ${
                    scene.isActive ? 'border-purple-500 bg-purple-500/10' : 'border-white/10 hover:border-white/20'
                  }`}
                >
                  {scene.isActive && (
                    <div className="absolute top-4 right-4">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    </div>
                  )}

                  <div className={`w-16 h-16 bg-gradient-to-r ${scene.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 font-orbitron">{scene.name}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{scene.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="text-sm text-gray-400 mb-2">Devices ({scene.devices.length})</p>
                      <div className="flex flex-wrap gap-2">
                        {scene.devices.map((device, idx) => (
                          <span key={idx} className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300">
                            {device}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-400">Schedule: <span className="text-white">{scene.schedule}</span></p>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <motion.button
                      onClick={() => activateScene(scene.id)}
                      className={`flex-1 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 ${
                        scene.isActive 
                          ? 'bg-red-600 hover:bg-red-700 text-white' 
                          : 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-4 h-4" />
                      <span>{scene.isActive ? 'Stop' : 'Activate'}</span>
                    </motion.button>
                    
                    <motion.button
                      className="p-3 bg-white/10 rounded-xl hover:bg-white/20 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Edit className="w-4 h-4 text-gray-400" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Scene Builder */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white mb-6 font-orbitron text-center">Scene Builder</h2>
            <p className="text-gray-300 text-center mb-8">
              Create custom scenes by combining multiple devices and settings into one-touch automation
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <Home className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Select Devices</h3>
                <p className="text-gray-400 text-sm">Choose which devices to include in your scene</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <Users className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Set Conditions</h3>
                <p className="text-gray-400 text-sm">Define triggers and automation rules</p>
              </div>
              
              <div className="text-center p-6 bg-white/5 rounded-xl">
                <Play className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2">Activate Scene</h3>
                <p className="text-gray-400 text-sm">Test and deploy your custom scene</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Scenes;
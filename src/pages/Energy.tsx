import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  TrendingDown, 
  TrendingUp, 
  Battery, 
  Sun,
  Leaf,
  DollarSign,
  Calendar,
  Clock,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart as RechartsPieChart, Cell } from 'recharts';

const Energy = () => {
  const [timeRange, setTimeRange] = useState('week');

  const energyData = [
    { name: 'Mon', usage: 24, cost: 3.2 },
    { name: 'Tue', usage: 28, cost: 3.7 },
    { name: 'Wed', usage: 22, cost: 2.9 },
    { name: 'Thu', usage: 26, cost: 3.4 },
    { name: 'Fri', usage: 30, cost: 4.0 },
    { name: 'Sat', usage: 35, cost: 4.6 },
    { name: 'Sun', usage: 32, cost: 4.2 }
  ];

  const deviceUsage = [
    { name: 'HVAC', value: 45, color: '#8B5CF6' },
    { name: 'Lighting', value: 20, color: '#06B6D4' },
    { name: 'Electronics', value: 15, color: '#10B981' },
    { name: 'Appliances', value: 12, color: '#F59E0B' },
    { name: 'Other', value: 8, color: '#EF4444' }
  ];

  const stats = [
    { 
      title: 'Current Usage', 
      value: '2.4 kW', 
      change: '-12%', 
      trend: 'down', 
      icon: Zap, 
      color: 'from-blue-500 to-cyan-500' 
    },
    { 
      title: 'Monthly Cost', 
      value: '$127', 
      change: '-8%', 
      trend: 'down', 
      icon: DollarSign, 
      color: 'from-green-500 to-emerald-500' 
    },
    { 
      title: 'Solar Generated', 
      value: '18.2 kWh', 
      change: '+15%', 
      trend: 'up', 
      icon: Sun, 
      color: 'from-yellow-500 to-orange-500' 
    },
    { 
      title: 'Carbon Saved', 
      value: '45 lbs', 
      change: '+22%', 
      trend: 'up', 
      icon: Leaf, 
      color: 'from-green-600 to-teal-600' 
    }
  ];

  const recommendations = [
    {
      title: 'Optimize HVAC Schedule',
      description: 'Adjust thermostat settings during peak hours to save $23/month',
      savings: '$23',
      impact: 'High',
      icon: TrendingDown
    },
    {
      title: 'Smart Lighting Automation',
      description: 'Enable motion sensors and daylight harvesting for 15% reduction',
      savings: '$12',
      impact: 'Medium',
      icon: Zap
    },
    {
      title: 'Appliance Scheduling',
      description: 'Run dishwasher and laundry during off-peak hours',
      savings: '$8',
      impact: 'Low',
      icon: Clock
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-green-900/50 via-teal-900/30 to-cyan-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Energy Management
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Monitor, optimize, and reduce your home's energy consumption with AI-powered insights and automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              const TrendIcon = stat.trend === 'up' ? TrendingUp : TrendingDown;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${
                      stat.trend === 'up' ? 'text-green-400 bg-green-400/20' : 'text-red-400 bg-red-400/20'
                    }`}>
                      <TrendIcon className="w-3 h-3" />
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-sm">{stat.title}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Usage Chart */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white font-orbitron">Energy Usage</h2>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm border border-white/20 focus:outline-none focus:border-cyan-500"
                >
                  <option value="week" className="bg-gray-800">This Week</option>
                  <option value="month" className="bg-gray-800">This Month</option>
                  <option value="year" className="bg-gray-800">This Year</option>
                </select>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={energyData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px'
                      }}
                    />
                    <Line 
                      type="monotone" 
                      dataKey="usage" 
                      stroke="#06B6D4" 
                      strokeWidth={3}
                      dot={{ fill: '#06B6D4', strokeWidth: 2, r: 4 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Device Usage Pie Chart */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">Usage by Device</h2>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={deviceUsage}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceUsage.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                        border: '1px solid rgba(255, 255, 255, 0.1)',
                        borderRadius: '8px'
                      }}
                    />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {deviceUsage.map((device, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: device.color }}
                    ></div>
                    <span className="text-gray-300 text-sm">{device.name}</span>
                    <span className="text-white text-sm font-medium">{device.value}%</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Recommendations */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">AI Optimization Recommendations</h2>
            <p className="text-gray-400">Personalized suggestions to reduce your energy consumption and costs</p>
          </motion.div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => {
              const Icon = rec.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-semibold text-white">{rec.title}</h3>
                        <div className="flex items-center space-x-3">
                          <span className="text-green-400 font-bold text-lg">{rec.savings}/mo</span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            rec.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                            rec.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                            'bg-blue-500/20 text-blue-400'
                          }`}>
                            {rec.impact} Impact
                          </span>
                        </div>
                      </div>
                      <p className="text-gray-400 mb-4">{rec.description}</p>
                      
                      <motion.button
                        className="px-4 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-lg font-medium hover:from-green-700 hover:to-teal-700 transition-all duration-200"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Apply Recommendation
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Energy Goals */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-2xl p-8 border border-white/10 text-center"
          >
            <Battery className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Monthly Energy Goal</h2>
            <p className="text-gray-300 mb-8">You're on track to save 15% more energy this month compared to last month!</p>
            
            <div className="max-w-md mx-auto">
              <div className="flex justify-between text-sm text-gray-400 mb-2">
                <span>Progress</span>
                <span>78% Complete</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-4 mb-6">
                <div className="h-4 bg-gradient-to-r from-green-500 to-teal-500 rounded-full" style={{ width: '78%' }}></div>
              </div>
              
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-400">$43</div>
                  <div className="text-gray-400 text-sm">Saved This Month</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-teal-400">127 lbs</div>
                  <div className="text-gray-400 text-sm">CO₂ Reduced</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Energy;
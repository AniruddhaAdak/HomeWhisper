import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  BarChart3, 
  TrendingUp, 
  TrendingDown, 
  Activity,
  Clock,
  Calendar,
  Users,
  Home,
  Zap,
  Shield,
  Thermometer,
  Eye
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from 'recharts';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('week');

  const usageData = [
    { name: 'Mon', devices: 12, energy: 24, security: 8 },
    { name: 'Tue', devices: 15, energy: 28, security: 6 },
    { name: 'Wed', devices: 10, energy: 22, security: 12 },
    { name: 'Thu', devices: 18, energy: 26, security: 4 },
    { name: 'Fri', devices: 22, energy: 30, security: 9 },
    { name: 'Sat', devices: 25, energy: 35, security: 7 },
    { name: 'Sun', devices: 20, energy: 32, security: 5 }
  ];

  const deviceActivity = [
    { name: 'Lights', value: 35, color: '#F59E0B' },
    { name: 'HVAC', value: 25, color: '#3B82F6' },
    { name: 'Security', value: 20, color: '#10B981' },
    { name: 'Entertainment', value: 15, color: '#8B5CF6' },
    { name: 'Other', value: 5, color: '#EF4444' }
  ];

  const hourlyUsage = [
    { hour: '00', usage: 5 }, { hour: '01', usage: 3 }, { hour: '02', usage: 2 },
    { hour: '03', usage: 2 }, { hour: '04', usage: 3 }, { hour: '05', usage: 4 },
    { hour: '06', usage: 8 }, { hour: '07', usage: 15 }, { hour: '08', usage: 12 },
    { hour: '09', usage: 10 }, { hour: '10', usage: 8 }, { hour: '11', usage: 9 },
    { hour: '12', usage: 11 }, { hour: '13', usage: 10 }, { hour: '14', usage: 8 },
    { hour: '15', usage: 9 }, { hour: '16', usage: 12 }, { hour: '17', usage: 18 },
    { hour: '18', usage: 22 }, { hour: '19', usage: 25 }, { hour: '20', usage: 20 },
    { hour: '21', usage: 15 }, { hour: '22', usage: 12 }, { hour: '23', usage: 8 }
  ];

  const insights = [
    {
      title: 'Peak Usage Hours',
      value: '6-9 PM',
      description: 'Highest device activity during evening hours',
      trend: 'up',
      icon: Clock,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Energy Efficiency',
      value: '87%',
      description: 'Above average efficiency this month',
      trend: 'up',
      icon: Zap,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Security Events',
      value: '23',
      description: 'Total security alerts this week',
      trend: 'down',
      icon: Shield,
      color: 'from-red-500 to-rose-500'
    },
    {
      title: 'Average Temperature',
      value: '72°F',
      description: 'Optimal comfort maintained',
      trend: 'stable',
      icon: Thermometer,
      color: 'from-orange-500 to-yellow-500'
    }
  ];

  const recommendations = [
    {
      title: 'Optimize Evening Usage',
      description: 'Consider scheduling non-essential devices to run during off-peak hours',
      impact: 'High',
      savings: '$15/month'
    },
    {
      title: 'Update Security Settings',
      description: 'Recent activity suggests adjusting motion sensor sensitivity',
      impact: 'Medium',
      savings: 'Better Security'
    },
    {
      title: 'HVAC Schedule Adjustment',
      description: 'Temperature patterns show opportunity for automated scheduling',
      impact: 'High',
      savings: '$22/month'
    }
  ];

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
                Smart Analytics
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Deep insights into your smart home usage patterns, energy consumption, and optimization opportunities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Key Insights */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => {
              const Icon = insight.icon;
              const TrendIcon = insight.trend === 'up' ? TrendingUp : insight.trend === 'down' ? TrendingDown : Activity;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${insight.color} rounded-xl flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <TrendIcon className={`w-5 h-5 ${
                      insight.trend === 'up' ? 'text-green-400' : 
                      insight.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                    }`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-1">{insight.value}</h3>
                  <p className="text-gray-400 text-sm mb-2">{insight.title}</p>
                  <p className="text-gray-500 text-xs">{insight.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Charts Section */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* Usage Trends */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white font-orbitron">Usage Trends</h2>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value)}
                  className="px-3 py-2 bg-white/10 rounded-lg text-white text-sm border border-white/20 focus:outline-none focus:border-purple-500"
                >
                  <option value="week" className="bg-gray-800">This Week</option>
                  <option value="month" className="bg-gray-800">This Month</option>
                  <option value="year" className="bg-gray-800">This Year</option>
                </select>
              </div>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={usageData}>
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
                    <Line type="monotone" dataKey="devices" stroke="#8B5CF6" strokeWidth={2} />
                    <Line type="monotone" dataKey="energy" stroke="#06B6D4" strokeWidth={2} />
                    <Line type="monotone" dataKey="security" stroke="#10B981" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Device Activity */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
            >
              <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">Device Activity</h2>
              
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceActivity}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={100}
                      paddingAngle={5}
                      dataKey="value"
                    >
                      {deviceActivity.map((entry, index) => (
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
                  </PieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                {deviceActivity.map((device, index) => (
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

          {/* Hourly Usage Pattern */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-2xl font-bold text-white mb-6 font-orbitron">24-Hour Usage Pattern</h2>
            
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyUsage}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="hour" stroke="#9CA3AF" />
                  <YAxis stroke="#9CA3AF" />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(0, 0, 0, 0.8)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '8px'
                    }}
                  />
                  <Bar dataKey="usage" fill="url(#colorGradient)" />
                  <defs>
                    <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#06B6D4" stopOpacity={0.8}/>
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>
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
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">AI-Powered Recommendations</h2>
            <p className="text-gray-400">Personalized insights to optimize your smart home performance</p>
          </motion.div>

          <div className="space-y-6">
            {recommendations.map((rec, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-xl font-semibold text-white">{rec.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        rec.impact === 'High' ? 'bg-red-500/20 text-red-400' :
                        rec.impact === 'Medium' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-blue-500/20 text-blue-400'
                      }`}>
                        {rec.impact} Impact
                      </span>
                    </div>
                    <p className="text-gray-400 mb-4">{rec.description}</p>
                    
                    <motion.button
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Recommendation
                    </motion.button>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-400">{rec.savings}</div>
                    <div className="text-gray-400 text-sm">Potential Savings</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-indigo-900/30 to-pink-900/30 rounded-2xl p-8 border border-white/10 text-center"
          >
            <Eye className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Smart Home Performance</h2>
            <p className="text-gray-300 mb-8">Your smart home is performing exceptionally well with optimized energy usage and enhanced security.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">94%</div>
                <div className="text-gray-400">Overall Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-400 mb-2">$156</div>
                <div className="text-gray-400">Monthly Savings</div>
              </div>
              <div>
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

export default Analytics;
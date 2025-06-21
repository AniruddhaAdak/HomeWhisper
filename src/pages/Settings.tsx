import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Settings as SettingsIcon, 
  User, 
  Bell, 
  Shield, 
  Palette,
  Wifi,
  Battery,
  Moon,
  Sun,
  Volume2,
  Smartphone,
  Globe,
  Lock,
  Eye,
  Save,
  RefreshCw
} from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: true,
    voiceControl: true,
    gestureControl: true,
    autoUpdates: true,
    energySaving: false,
    securityAlerts: true,
    temperature: 72,
    volume: 65,
    language: 'en',
    timezone: 'America/New_York'
  });

  const tabs = [
    { id: 'general', name: 'General', icon: SettingsIcon },
    { id: 'account', name: 'Account', icon: User },
    { id: 'notifications', name: 'Notifications', icon: Bell },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'appearance', name: 'Appearance', icon: Palette },
    { id: 'devices', name: 'Devices', icon: Wifi }
  ];

  const updateSetting = (key: string, value: any) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const renderGeneralSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Volume2 className="w-5 h-5 text-blue-400" />
          <div>
            <h3 className="text-white font-medium">Master Volume</h3>
            <p className="text-gray-400 text-sm">Control overall system volume</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <input
            type="range"
            min="0"
            max="100"
            value={settings.volume}
            onChange={(e) => updateSetting('volume', parseInt(e.target.value))}
            className="w-24"
          />
          <span className="text-white text-sm w-8">{settings.volume}%</span>
        </div>
      </div>

      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Globe className="w-5 h-5 text-green-400" />
          <div>
            <h3 className="text-white font-medium">Language</h3>
            <p className="text-gray-400 text-sm">Select your preferred language</p>
          </div>
        </div>
        <select
          value={settings.language}
          onChange={(e) => updateSetting('language', e.target.value)}
          className="px-3 py-2 bg-white/10 rounded-lg text-white border border-white/20 focus:outline-none focus:border-purple-500"
        >
          <option value="en" className="bg-gray-800">English</option>
          <option value="es" className="bg-gray-800">Spanish</option>
          <option value="fr" className="bg-gray-800">French</option>
          <option value="de" className="bg-gray-800">German</option>
        </select>
      </div>

      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Battery className="w-5 h-5 text-yellow-400" />
          <div>
            <h3 className="text-white font-medium">Energy Saving Mode</h3>
            <p className="text-gray-400 text-sm">Optimize power consumption</p>
          </div>
        </div>
        <button
          onClick={() => updateSetting('energySaving', !settings.energySaving)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.energySaving ? 'bg-green-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.energySaving ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>
    </div>
  );

  const renderNotificationSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Bell className="w-5 h-5 text-blue-400" />
          <div>
            <h3 className="text-white font-medium">Push Notifications</h3>
            <p className="text-gray-400 text-sm">Receive alerts on your devices</p>
          </div>
        </div>
        <button
          onClick={() => updateSetting('notifications', !settings.notifications)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.notifications ? 'bg-green-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.notifications ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Shield className="w-5 h-5 text-red-400" />
          <div>
            <h3 className="text-white font-medium">Security Alerts</h3>
            <p className="text-gray-400 text-sm">Important security notifications</p>
          </div>
        </div>
        <button
          onClick={() => updateSetting('securityAlerts', !settings.securityAlerts)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.securityAlerts ? 'bg-green-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.securityAlerts ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Smartphone className="w-5 h-5 text-purple-400" />
          <div>
            <h3 className="text-white font-medium">Mobile Notifications</h3>
            <p className="text-gray-400 text-sm">Send alerts to your phone</p>
          </div>
        </div>
        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-green-600">
          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-6" />
        </button>
      </div>
    </div>
  );

  const renderAppearanceSettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          {settings.darkMode ? <Moon className="w-5 h-5 text-blue-400" /> : <Sun className="w-5 h-5 text-yellow-400" />}
          <div>
            <h3 className="text-white font-medium">Dark Mode</h3>
            <p className="text-gray-400 text-sm">Toggle between light and dark themes</p>
          </div>
        </div>
        <button
          onClick={() => updateSetting('darkMode', !settings.darkMode)}
          className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
            settings.darkMode ? 'bg-blue-600' : 'bg-gray-600'
          }`}
        >
          <span
            className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
              settings.darkMode ? 'translate-x-6' : 'translate-x-1'
            }`}
          />
        </button>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-medium mb-4">Theme Colors</h3>
        <div className="grid grid-cols-4 gap-3">
          {[
            { name: 'Purple', color: 'bg-purple-500' },
            { name: 'Blue', color: 'bg-blue-500' },
            { name: 'Green', color: 'bg-green-500' },
            { name: 'Orange', color: 'bg-orange-500' }
          ].map((theme) => (
            <button
              key={theme.name}
              className={`w-12 h-12 rounded-xl ${theme.color} hover:scale-110 transition-transform`}
              title={theme.name}
            />
          ))}
        </div>
      </div>
    </div>
  );

  const renderSecuritySettings = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Lock className="w-5 h-5 text-green-400" />
          <div>
            <h3 className="text-white font-medium">Two-Factor Authentication</h3>
            <p className="text-gray-400 text-sm">Add extra security to your account</p>
          </div>
        </div>
        <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          Enable
        </button>
      </div>

      <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl">
        <div className="flex items-center space-x-3">
          <Eye className="w-5 h-5 text-blue-400" />
          <div>
            <h3 className="text-white font-medium">Privacy Mode</h3>
            <p className="text-gray-400 text-sm">Limit data collection and sharing</p>
          </div>
        </div>
        <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-gray-600">
          <span className="inline-block h-4 w-4 transform rounded-full bg-white translate-x-1" />
        </button>
      </div>

      <div className="p-4 bg-white/5 rounded-xl">
        <h3 className="text-white font-medium mb-4">Change Password</h3>
        <div className="space-y-3">
          <input
            type="password"
            placeholder="Current Password"
            className="w-full px-3 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500"
          />
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-3 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500"
          />
          <input
            type="password"
            placeholder="Confirm New Password"
            className="w-full px-3 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500"
          />
          <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
            Update Password
          </button>
        </div>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'general': return renderGeneralSettings();
      case 'notifications': return renderNotificationSettings();
      case 'appearance': return renderAppearanceSettings();
      case 'security': return renderSecuritySettings();
      case 'account':
        return (
          <div className="space-y-6">
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="text-white font-medium mb-4">Profile Information</h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Full Name"
                  defaultValue="John Doe"
                  className="w-full px-3 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  defaultValue="john@example.com"
                  className="w-full px-3 py-2 bg-white/10 rounded-lg text-white placeholder-gray-400 border border-white/20 focus:outline-none focus:border-purple-500"
                />
              </div>
            </div>
          </div>
        );
      case 'devices':
        return (
          <div className="space-y-6">
            <div className="p-4 bg-white/5 rounded-xl">
              <h3 className="text-white font-medium mb-4">Connected Devices</h3>
              <div className="space-y-3">
                {['Smart Phone', 'Tablet', 'Smart Watch'].map((device, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-white">{device}</span>
                    <span className="text-green-400 text-sm">Connected</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      default: return renderGeneralSettings();
    }
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/50 via-slate-900/30 to-zinc-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-gray-400 to-zinc-400 bg-clip-text text-transparent">
                Settings
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Customize your HomeWhisper experience with personalized settings and preferences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Settings Interface */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 sticky top-24">
                <nav className="space-y-2">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-left transition-all duration-200 ${
                          activeTab === tab.id
                            ? 'bg-purple-600 text-white'
                            : 'text-gray-400 hover:text-white hover:bg-white/10'
                        }`}
                      >
                        <Icon className="w-5 h-5" />
                        <span>{tab.name}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-3">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white/5 backdrop-blur rounded-2xl p-8 border border-white/10"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-white font-orbitron capitalize">
                    {activeTab} Settings
                  </h2>
                  <div className="flex space-x-3">
                    <motion.button
                      className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <RefreshCw className="w-4 h-4" />
                      <span>Reset</span>
                    </motion.button>
                    <motion.button
                      className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200 flex items-center space-x-2"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Save className="w-4 h-4" />
                      <span>Save Changes</span>
                    </motion.button>
                  </div>
                </div>

                {renderTabContent()}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Settings;
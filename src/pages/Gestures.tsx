import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Hand, 
  Camera, 
  Play, 
  Square, 
  Eye,
  Settings,
  Lightbulb,
  Volume2,
  Thermometer,
  Tv,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

const Gestures = () => {
  const [isActive, setIsActive] = useState(false);
  const [detectedGesture, setDetectedGesture] = useState('');
  const [cameraPermission, setCameraPermission] = useState('prompt');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [gestureHistory, setGestureHistory] = useState([
    { gesture: 'Point Up', action: 'Increased living room brightness', time: '2 minutes ago' },
    { gesture: 'Swipe Right', action: 'Changed TV channel', time: '5 minutes ago' },
    { gesture: 'Thumbs Up', action: 'Confirmed security arm', time: '1 hour ago' }
  ]);

  const gestureCommands = [
    {
      gesture: 'Point Up',
      description: 'Increase brightness or volume',
      icon: '👆',
      devices: ['Lights', 'Sound System']
    },
    {
      gesture: 'Point Down',
      description: 'Decrease brightness or volume',
      icon: '👇',
      devices: ['Lights', 'Sound System']
    },
    {
      gesture: 'Swipe Right',
      description: 'Next channel or track',
      icon: '👉',
      devices: ['TV', 'Music Player']
    },
    {
      gesture: 'Swipe Left',
      description: 'Previous channel or track',
      icon: '👈',
      devices: ['TV', 'Music Player']
    },
    {
      gesture: 'Open Palm',
      description: 'Turn on devices',
      icon: '✋',
      devices: ['All Devices']
    },
    {
      gesture: 'Closed Fist',
      description: 'Turn off devices',
      icon: '✊',
      devices: ['All Devices']
    },
    {
      gesture: 'Thumbs Up',
      description: 'Confirm action',
      icon: '👍',
      devices: ['System Commands']
    },
    {
      gesture: 'Peace Sign',
      description: 'Activate scene mode',
      icon: '✌️',
      devices: ['Scene Control']
    }
  ];

  useEffect(() => {
    if (isActive) {
      startCamera();
    } else {
      stopCamera();
    }
  }, [isActive]);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { width: 640, height: 480 } 
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }
      setCameraPermission('granted');
      
      // Simulate gesture detection
      const gestures = ['Point Up', 'Swipe Right', 'Open Palm', 'Thumbs Up', 'Peace Sign'];
      const interval = setInterval(() => {
        if (Math.random() > 0.7) {
          const randomGesture = gestures[Math.floor(Math.random() * gestures.length)];
          setDetectedGesture(randomGesture);
          setTimeout(() => setDetectedGesture(''), 2000);
        }
      }, 3000);
      
      return () => clearInterval(interval);
    } catch (error) {
      console.error('Camera access denied:', error);
      setCameraPermission('denied');
    }
  };

  const stopCamera = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = (videoRef.current.srcObject as MediaStream).getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
  };

  const toggleGestureControl = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Header */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-900/50 via-purple-900/30 to-indigo-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-pink-400 to-indigo-400 bg-clip-text text-transparent">
                Gesture Control
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Control your smart home devices using intuitive hand gestures captured by your camera with AI-powered recognition
            </p>
          </motion.div>
        </div>
      </section>

      {/* Camera Interface */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 text-center"
          >
            <div className="relative mb-8">
              {isActive ? (
                <div className="relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted
                    className="w-full max-w-2xl mx-auto rounded-2xl bg-black"
                    style={{ aspectRatio: '4/3' }}
                  />
                  
                  {detectedGesture && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      className="absolute top-4 left-4 px-4 py-2 bg-green-500 text-white rounded-lg font-semibold"
                    >
                      Detected: {detectedGesture}
                    </motion.div>
                  )}
                  
                  <div className="absolute bottom-4 right-4 flex items-center space-x-2 px-3 py-2 bg-black/50 rounded-lg">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white text-sm">Recording</span>
                  </div>
                </div>
              ) : (
                <div className="w-full max-w-2xl mx-auto bg-gray-800 rounded-2xl flex items-center justify-center" style={{ aspectRatio: '4/3' }}>
                  <div className="text-center">
                    <Camera className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-400">Camera feed will appear here</p>
                  </div>
                </div>
              )}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-orbitron">
                {isActive ? 'Gesture Recognition Active' : 'Start Gesture Control'}
              </h2>
              
              <p className="text-gray-400">
                {isActive 
                  ? 'Make gestures in front of your camera to control devices' 
                  : 'Click the button below to enable camera and start gesture recognition'
                }
              </p>
              
              {cameraPermission === 'denied' && (
                <div className="flex items-center justify-center space-x-2 text-red-400">
                  <AlertCircle className="w-5 h-5" />
                  <span>Camera permission denied. Please enable camera access in your browser settings.</span>
                </div>
              )}
            </div>

            <motion.button
              onClick={toggleGestureControl}
              className={`mt-8 px-8 py-4 rounded-xl font-semibold text-lg flex items-center space-x-2 mx-auto transition-all duration-200 ${
                isActive 
                  ? 'bg-red-600 hover:bg-red-700 text-white' 
                  : 'bg-gradient-to-r from-pink-600 to-indigo-600 hover:from-pink-700 hover:to-indigo-700 text-white'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isActive ? <Square className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              <span>{isActive ? 'Stop Recognition' : 'Start Recognition'}</span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Gesture Commands */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Available Gestures</h2>
            <p className="text-gray-400">Learn these gestures to control your smart home devices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {gestureCommands.map((command, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-white/5 backdrop-blur rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
              >
                <div className="text-4xl mb-4">{command.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2 font-orbitron">{command.gesture}</h3>
                <p className="text-gray-400 text-sm mb-4">{command.description}</p>
                
                <div className="space-y-2">
                  <p className="text-xs text-gray-500">Controls:</p>
                  <div className="flex flex-wrap gap-1 justify-center">
                    {command.devices.map((device, idx) => (
                      <span key={idx} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {device}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Activity */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Recent Gesture Activity</h2>
            
            <div className="space-y-4">
              {gestureHistory.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10 flex items-center space-x-4"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-xl flex items-center justify-center">
                    <Hand className="w-6 h-6 text-white" />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-white font-medium">{activity.gesture}</span>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                    </div>
                    <p className="text-gray-400">{activity.action}</p>
                  </div>
                  
                  <span className="text-gray-400 text-sm">{activity.time}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-gradient-to-br from-pink-900/30 to-purple-900/30 rounded-2xl border border-white/10"
            >
              <Eye className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Computer Vision</h3>
              <p className="text-gray-400">Advanced AI processes hand movements in real-time with high accuracy</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-2xl border border-white/10"
            >
              <Settings className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Customizable</h3>
              <p className="text-gray-400">Create custom gestures and assign them to specific device actions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-2xl border border-white/10"
            >
              <Hand className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Intuitive Control</h3>
              <p className="text-gray-400">Natural hand movements make device control effortless and accessible</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gestures;
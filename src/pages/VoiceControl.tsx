import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Mic, 
  MicOff, 
  Volume2, 
  MessageSquare, 
  Zap, 
  Brain,
  PlayCircle,
  StopCircle,
  Settings
} from 'lucide-react';
import { geminiService } from '../lib/gemini';

const VoiceControl = () => {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [voiceCommands, setVoiceCommands] = useState([
    { command: "Turn on living room lights", response: "✓ Living room lights turned on", timestamp: "2 minutes ago" },
    { command: "Set temperature to 72 degrees", response: "✓ Thermostat set to 72°F", timestamp: "5 minutes ago" },
    { command: "Arm security system", response: "✓ Security system armed", timestamp: "1 hour ago" }
  ]);

  const recognitionRef = useRef<any>(null);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: any) => {
        const command = event.results[0][0].transcript;
        setTranscript(command);
        processVoiceCommand(command);
      };

      recognitionRef.current.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
  }, []);

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true);
      setTranscript('');
      setResponse('');
      recognitionRef.current.start();
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  };

  const processVoiceCommand = async (command: string) => {
    setIsProcessing(true);
    try {
      const aiResponse = await geminiService.processVoiceCommand(command);
      const parsedResponse = JSON.parse(aiResponse);
      
      const responseText = parsedResponse.confirmation || `Processed command: ${command}`;
      setResponse(responseText);
      
      // Add to command history
      const newCommand = {
        command: command,
        response: responseText,
        timestamp: "Just now"
      };
      setVoiceCommands([newCommand, ...voiceCommands.slice(0, 9)]);
      
    } catch (error) {
      console.error('Error processing voice command:', error);
      setResponse('Sorry, I had trouble processing that command. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const exampleCommands = [
    "Turn on the living room lights",
    "Set temperature to 72 degrees",
    "Lock all doors",
    "Play relaxing music",
    "Arm the security system",
    "Dim bedroom lights to 50%",
    "Turn off all devices",
    "What's the current temperature?",
    "Show me the security cameras",
    "Start movie mode"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/50 via-purple-900/30 to-cyan-900/50"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h1 className="text-4xl sm:text-6xl font-bold font-orbitron">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Voice Control
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Control your entire smart home using natural voice commands powered by advanced AI. 
              Simply speak, and HomeWhisper will understand and execute your requests.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Voice Interface */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 backdrop-blur rounded-3xl p-12 border border-white/10 text-center"
          >
            {/* Microphone Button */}
            <div className="relative mb-8">
              <motion.button
                onClick={isListening ? stopListening : startListening}
                className={`w-32 h-32 rounded-full flex items-center justify-center text-white text-4xl transition-all duration-300 ${
                  isListening 
                    ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-2xl shadow-red-500/50' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:shadow-2xl hover:shadow-blue-500/50'
                }`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={isListening ? { scale: [1, 1.1, 1] } : {}}
                transition={isListening ? { duration: 1, repeat: Infinity } : {}}
              >
                {isListening ? <MicOff className="w-12 h-12" /> : <Mic className="w-12 h-12" />}
              </motion.button>
              
              {isListening && (
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-red-400"
                  animate={{ scale: [1, 1.5], opacity: [1, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white font-orbitron">
                {isListening ? 'Listening...' : 'Tap to Speak'}
              </h2>
              
              <p className="text-gray-400">
                {isListening 
                  ? 'Say your command clearly' 
                  : 'Click the microphone and speak your smart home command'
                }
              </p>
            </div>

            {/* Transcript Display */}
            {transcript && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-blue-500/20 rounded-xl border border-blue-500/30"
              >
                <p className="text-blue-300 font-medium">You said:</p>
                <p className="text-white text-lg">"{transcript}"</p>
              </motion.div>
            )}

            {/* Processing Indicator */}
            {isProcessing && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 flex items-center justify-center space-x-2"
              >
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-cyan-400"></div>
                <span className="text-cyan-400">Processing command...</span>
              </motion.div>
            )}

            {/* Response Display */}
            {response && !isProcessing && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-8 p-4 bg-green-500/20 rounded-xl border border-green-500/30"
              >
                <p className="text-green-300 font-medium">HomeWhisper:</p>
                <p className="text-white text-lg">{response}</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* Example Commands */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4 font-orbitron">Example Commands</h2>
            <p className="text-gray-400">Try these voice commands to control your smart home</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exampleCommands.map((command, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="p-4 bg-white/5 backdrop-blur rounded-xl border border-white/10 hover:border-cyan-500/30 transition-all duration-200 cursor-pointer"
                onClick={() => {
                  setTranscript(command);
                  processVoiceCommand(command);
                }}
              >
                <div className="flex items-center space-x-3">
                  <MessageSquare className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <p className="text-white text-sm">{command}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Command History */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">Recent Commands</h2>
            
            <div className="space-y-4">
              {voiceCommands.map((cmd, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <Mic className="w-4 h-4 text-blue-400" />
                        <p className="text-white font-medium">"{cmd.command}"</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Volume2 className="w-4 h-4 text-green-400" />
                        <p className="text-green-300">{cmd.response}</p>
                      </div>
                    </div>
                    <span className="text-gray-400 text-sm">{cmd.timestamp}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AI Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl border border-white/10"
            >
              <Brain className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Natural Language</h3>
              <p className="text-gray-400">Speak naturally - no need to memorize specific commands or phrases</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl border border-white/10"
            >
              <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Instant Response</h3>
              <p className="text-gray-400">Commands are processed and executed in milliseconds with AI precision</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-gradient-to-br from-cyan-900/30 to-teal-900/30 rounded-2xl border border-white/10"
            >
              <Settings className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">Context Aware</h3>
              <p className="text-gray-400">AI understands context and can handle complex, multi-step commands</p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VoiceControl;
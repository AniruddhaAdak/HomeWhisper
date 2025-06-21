import React from 'react';
import { motion } from 'framer-motion';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail, 
  Send, 
  ExternalLink,
  Heart,
  Zap
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aniruddha-adak',
      icon: Linkedin,
      color: 'hover:text-blue-400'
    },
    {
      name: 'GitHub',
      href: 'https://github.com/AniruddhaAdak',
      icon: Github,
      color: 'hover:text-gray-300'
    },
    {
      name: 'Twitter',
      href: 'https://x.com/aniruddhadak',
      icon: Twitter,
      color: 'hover:text-blue-400'
    },
    {
      name: 'Email',
      href: 'mailto:aniruddhaadak80@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400'
    },
    {
      name: 'Telegram',
      href: 'https://t.me/aniruddhaadak',
      icon: Send,
      color: 'hover:text-blue-400'
    }
  ];

  const projectLinks = [
    {
      name: 'Dev Profile',
      href: 'https://dev.to/aniruddhaadak'
    },
    {
      name: 'CodePen',
      href: 'https://codepen.io/aniruddhaadak'
    },
    {
      name: 'Portfolio',
      href: 'https://aniruddha-adak.vercel.app'
    },
    {
      name: 'Linktree',
      href: 'https://linktr.ee/aniruddha.adak'
    }
  ];

  return (
    <footer className="relative bg-black/30 backdrop-blur-sm border-t border-white/10 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-3"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Zap className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent font-orbitron">
                  HomeWhisper
                </h3>
                <p className="text-sm text-gray-400">Smart Home Command Center</p>
              </div>
            </motion.div>
            
            <p className="text-gray-300 text-sm leading-relaxed">
              Revolutionary smart home control with AI-powered voice commands, gesture recognition, 
              and intelligent automation for the modern connected home.
            </p>
            
            {/* Made with Bolt Badge */}
            <motion.a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full text-white text-sm font-medium hover:from-orange-600 hover:to-yellow-600 transition-all duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Zap className="w-4 h-4" />
              <span>Made with Bolt</span>
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>

          {/* Creator Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-orbitron">Created By</h4>
            <div className="space-y-3">
              <div>
                <h5 className="text-purple-400 font-medium">Aniruddha Adak</h5>
                <p className="text-gray-400 text-sm">Full Stack Developer & AI Enthusiast</p>
              </div>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 bg-white/10 rounded-lg text-gray-400 ${link.color} transition-all duration-200 hover:bg-white/20`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      title={link.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white font-orbitron">Connect & Explore</h4>
            <div className="space-y-2">
              {projectLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 hover:text-purple-400 transition-colors duration-200 text-sm"
                  whileHover={{ x: 4 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© {new Date().getFullYear()} Aniruddha Adak. Made with</span>
            <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
            <span>for the smart home community</span>
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>Powered by Gemini AI</span>
            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
            <span>Built with React & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
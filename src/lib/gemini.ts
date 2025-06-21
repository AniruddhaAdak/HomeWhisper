import { GoogleGenerativeAI } from '@google/generative-ai';

// CRITICAL: Store API key securely - DO NOT commit to version control
// API key must be provided via environment variable (VITE_GEMINI_API_KEY) in a gitignored .env file
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    this.genAI = new GoogleGenerativeAI(API_KEY);
    this.model = this.genAI.getGenerativeModel({ model: 'gemini-2.0-flash-exp' });
  }

  async generateResponse(prompt: string): Promise<string> {
    try {
      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Gemini API error:', error);
      throw new Error('Failed to get AI response');
    }
  }

  async analyzeDeviceUsage(devices: any[]): Promise<string> {
    const prompt = `Analyze this smart home device usage data and provide insights: ${JSON.stringify(devices)}. Focus on energy efficiency, usage patterns, and optimization recommendations.`;
    return this.generateResponse(prompt);
  }

  async suggestAutomation(context: string): Promise<string> {
    const prompt = `Based on this smart home context: "${context}", suggest 3 practical automation routines that would improve convenience, energy efficiency, or security. Format as JSON with title, description, and steps.`;
    return this.generateResponse(prompt);
  }

  async processVoiceCommand(command: string): Promise<string> {
    const prompt = `Process this smart home voice command: "${command}". Return a JSON response with: action (the device action to perform), device (target device), parameters (any settings), and confirmation (user-friendly response).`;
    return this.generateResponse(prompt);
  }

  async analyzeSecurityEvents(events: any[]): Promise<string> {
    const prompt = `Analyze these smart home security events for potential threats or anomalies: ${JSON.stringify(events)}. Provide risk assessment and recommendations.`;
    return this.generateResponse(prompt);
  }

  async optimizeEnergyUsage(data: any): Promise<string> {
    const prompt = `Analyze this energy usage data: ${JSON.stringify(data)}. Provide specific recommendations to reduce energy consumption while maintaining comfort and functionality.`;
    return this.generateResponse(prompt);
  }

  async generateHealthCheck(): Promise<string> {
    const prompt = `Generate a comprehensive smart home health check report. Include system status, device connectivity, security status, energy efficiency, and maintenance recommendations. Format as structured data.`;
    return this.generateResponse(prompt);
  }

  async predictWeatherAutomation(weather: any): Promise<string> {
    const prompt = `Based on this weather data: ${JSON.stringify(weather)}, suggest smart home automation adjustments for optimal comfort and energy efficiency. Include temperature, lighting, and security considerations.`;
    return this.generateResponse(prompt);
  }

  async troubleshootDevice(deviceName: string, issue: string): Promise<string> {
    const prompt = `Help troubleshoot this smart home device issue: Device: ${deviceName}, Issue: ${issue}. Provide step-by-step troubleshooting guide and potential solutions.`;
    return this.generateResponse(prompt);
  }

  async personalizeRecommendations(userPreferences: any): Promise<string> {
    const prompt = `Based on these user preferences: ${JSON.stringify(userPreferences)}, provide personalized smart home recommendations for devices, automations, and settings that would enhance their experience.`;
    return this.generateResponse(prompt);
  }

  async forecastEnergyConsumption(historicalData: any): Promise<string> {
    const prompt = `Using this historical energy data: ${JSON.stringify(historicalData)}, forecast next month's energy consumption and provide cost-saving recommendations.`;
    return this.generateResponse(prompt);
  }
}

export const geminiService = new GeminiService();
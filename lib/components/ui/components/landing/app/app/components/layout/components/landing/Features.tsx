'use client'

import { motion } from 'framer-motion'
import { 
  Brain, 
  FileText, 
  Compass, 
  Target, 
  TrendingUp, 
  Shield,
  Zap,
  Users
} from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'AI Career Assistant',
    description: 'Get personalized career advice, skill recommendations, and roadmap planning powered by advanced AI.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: FileText,
    title: 'Smart CV Builder',
    description: 'Build professional CVs with AI suggestions, templates, and real-time feedback to stand out.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Compass,
    title: 'Opportunity Finder',
    description: 'Discover internships, scholarships, hackathons, and jobs matched to your skills and interests.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Target,
    title: 'Goal Tracking',
    description: 'Set SMART goals, track progress with visual dashboards, and celebrate milestones.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: TrendingUp,
    title: 'Skill Analytics',
    description: 'Visualize your skill growth over time with detailed analytics and improvement suggestions.',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    icon: Shield,
    title: 'Progress Protection',
    description: 'Never lose your progress. Cloud-synced data with enterprise-grade security.',
    color: 'from-indigo-500 to-violet-500',
  },
]

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-32 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Powerful Features</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            Everything you need to <span className="text-gradient">succeed</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A complete toolkit designed specifically for ambitious students and young professionals.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              <div className="relative h-full glass-dark rounded-2xl p-8 hover:bg-white/[0.03] transition-colors overflow-hidden">
                {/* Gradient glow on hover */}
                <div className={`absolute -inset-px bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity`} />
                
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { motion } from 'framer-motion'
import { UserPlus, Sparkles, Rocket, BarChart3 } from 'lucide-react'

const steps = [
  { number: '01', icon: UserPlus, title: 'Create Your Profile', description: 'Sign up and tell us about your goals, skills, and interests. Our AI learns what matters to you.' },
  { number: '02', icon: Sparkles, title: 'Get AI Insights', description: 'Receive personalized recommendations for opportunities, skills to learn, and career paths.' },
  { number: '03', icon: Rocket, title: 'Take Action', description: 'Apply to opportunities, build your CV, set goals, and track your progress daily.' },
  { number: '04', icon: BarChart3, title: 'Grow & Succeed', description: 'Watch your skills and opportunities multiply as you level up with gamified achievements.' },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 text-primary-400 text-sm font-medium mb-6">
            <Rocket className="w-4 h-4" />
            <span>Simple Process</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
            How <span className="text-gradient">FutureForge</span> works
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">Four simple steps to transform your future. No complexity, just results.</p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-500/30 to-transparent" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div key={step.number} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: index * 0.15 }} className="relative text-center">
                <div className="relative inline-flex mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center shadow-lg shadow-primary-600/25">
                    <step.icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-dark-bg border border-primary-500/30 text-primary-400 text-sm font-bold flex items-center justify-center">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                <p className="text-slate-400 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

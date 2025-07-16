"use client"

import { motion } from "framer-motion"
import { 
  Github, 
  Slack, 
  Chrome, 
  Figma, 
  Trello, 
  Zap,
  Database,
  Mail,
  MessageSquare,
  Cloud,
  Code,
  Users
} from "lucide-react"

const integrationIcons = [
  { Icon: Github, name: "GitHub" },
  { Icon: Slack, name: "Slack" },
  { Icon: Chrome, name: "Chrome" },
  { Icon: Figma, name: "Figma" },
  { Icon: Trello, name: "Trello" },
  { Icon: Zap, name: "Zapier" },
  { Icon: Database, name: "Database" },
  { Icon: Mail, name: "Email" },
  { Icon: MessageSquare, name: "Chat" },
  { Icon: Cloud, name: "Cloud" },
  { Icon: Code, name: "API" },
  { Icon: Users, name: "Teams" },
]

export default function IntegrationsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Seamless Integrations</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Connect with your favorite tools and services effortlessly.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center justify-center">
          {integrationIcons.map(({ Icon, name }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="flex flex-col items-center justify-center p-4 rounded-lg hover:bg-background/50 transition-colors group"
            >
              <Icon 
                size={48} 
                className="text-muted-foreground group-hover:text-foreground transition-colors mb-2" 
              />
              <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                {name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
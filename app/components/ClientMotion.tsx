'use client'

import { motion, MotionProps } from 'framer-motion'
import { ReactNode } from 'react'

export function ClientMotionDiv({ children, ...props }: { children: ReactNode } & MotionProps) {
  return (
    <motion.div {...props}>
      {children}
    </motion.div>
  )
}

export function ClientMotionButton({ children, ...props }: { children: ReactNode } & MotionProps) {
  return (
    <motion.button {...props}>
      {children}
    </motion.button>
  )
}

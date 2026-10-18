import type { HowItWorksStep } from '@/types'
import StepCard from './StepCard'

interface HowItWorksProps {
  heading: string
  steps: HowItWorksStep[]
}

export default function HowItWorks({ heading, steps }: HowItWorksProps) {
  if (!steps || steps.length === 0) {
    return null
  }

  return (
    <section className="relative px-6 py-24 sm:px-10" id="how-it-works">
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/10 to-transparent"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-6xl">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {heading}
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
import type { HowItWorksStep } from '@/types'
import { getMetafieldValue } from '@/lib/cosmic'

interface StepCardProps {
  step: HowItWorksStep
  index: number
}

export default function StepCard({ step, index }: StepCardProps) {
  if (!step) {
    return null
  }

  const title = getMetafieldValue(step.title) || `Step ${index + 1}`
  const description = getMetafieldValue(step.metadata?.description)
  const icon = getMetafieldValue(step.metadata?.icon) || '✨'
  const stepNumber =
    typeof step.metadata?.step_number === 'number' ? step.metadata.step_number : index + 1

  return (
    <div className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur transition-all duration-300 hover:border-purple-400/40 hover:bg-white/[0.06]">
      <div className="absolute -top-4 left-8 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-fuchsia-600 to-indigo-600 text-sm font-bold text-white shadow-lg">
        {stepNumber}
      </div>
      <div className="mb-6 text-4xl" aria-hidden="true">
        {icon}
      </div>
      <h3 className="mb-3 text-xl font-semibold text-white">{title}</h3>
      <p className="leading-relaxed text-gray-400">{description}</p>
    </div>
  )
}
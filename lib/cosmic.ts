import { createBucketClient } from '@cosmicjs/sdk'
import type { HomePage, HowItWorksStep } from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string,
})

export type CosmicClient = typeof cosmic

// Helper to safely check for a status property on unknown errors (Cosmic SDK)
export function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

// Helper to safely render metadata values that could be legacy objects
export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

export async function getHomePage(
  cosmicClient: CosmicClient,
  preview: boolean
): Promise<HomePage | null> {
  try {
    const query = cosmicClient.objects
      .findOne({ type: 'home-page' })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1)

    const { object } = preview ? await query.status('any') : await query

    if (!object) {
      return null
    }

    return object as HomePage
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch home page')
  }
}

export async function getHowItWorksSteps(
  cosmicClient: CosmicClient,
  preview: boolean
): Promise<HowItWorksStep[]> {
  try {
    const query = cosmicClient.objects
      .find({ type: 'how-it-works-steps' })
      .props(['id', 'slug', 'title', 'metadata', 'type'])
      .depth(1)

    const { objects } = preview ? await query.status('any') : await query

    const steps = (objects || []) as HowItWorksStep[]

    return steps.sort((a, b) => {
      const stepA = typeof a.metadata?.step_number === 'number' ? a.metadata.step_number : 0
      const stepB = typeof b.metadata?.step_number === 'number' ? b.metadata.step_number : 0
      return stepA - stepB
    })
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch how it works steps')
  }
}
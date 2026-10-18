import type { Metadata } from 'next'
import { getCosmic } from '@/lib/cosmic-preview'
import { getHomePage, getHowItWorksSteps, getMetafieldValue } from '@/lib/cosmic'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Footer from '@/components/Footer'
import CosmicBadge from '@/components/CosmicBadge'

export async function generateMetadata(): Promise<Metadata> {
  const { cosmic, previewToken } = await getCosmic()
  const homePage = await getHomePage(cosmic, !!previewToken)

  const siteName = getMetafieldValue(homePage?.metadata?.site_name) || 'Nereo'
  const heroDescription =
    getMetafieldValue(homePage?.metadata?.hero_description) ||
    'Describe a video and the Nereo Agent writes the shots, generates them, and edits them together.'

  return {
    title: `${siteName} — AI Video Generator for Creators and Marketers`,
    description: heroDescription,
    other: homePage
      ? { 'cosmic-context': JSON.stringify({ object_id: homePage.id, object_type: homePage.type }) }
      : undefined,
  }
}

export default async function Page() {
  const { cosmic, previewToken } = await getCosmic()

  const [homePage, steps] = await Promise.all([
    getHomePage(cosmic, !!previewToken),
    getHowItWorksSteps(cosmic, !!previewToken),
  ])

  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  const siteName = getMetafieldValue(homePage?.metadata?.site_name) || 'Nereo'
  const heroDescription =
    getMetafieldValue(homePage?.metadata?.hero_description) ||
    'Describe a video. The Nereo Agent writes the shots, generates them, and edits them together.'
  const buttonLabel = getMetafieldValue(homePage?.metadata?.button_label) || 'Try Nereo'
  const buttonUrl = getMetafieldValue(homePage?.metadata?.button_url) || 'https://www.nereo.io/'
  const howItWorksHeading = getMetafieldValue(homePage?.metadata?.how_it_works_heading) || 'How it works'
  const footerLinkLabel = getMetafieldValue(homePage?.metadata?.footer_link_label) || 'nereo.io'
  const footerLinkUrl = getMetafieldValue(homePage?.metadata?.footer_link_url) || 'https://www.nereo.io/'

  return (
    <>
      <main className="relative overflow-hidden">
        <Hero
          siteName={siteName}
          heroDescription={heroDescription}
          buttonLabel={buttonLabel}
          buttonUrl={buttonUrl}
        />
        <HowItWorks heading={howItWorksHeading} steps={steps} />
        <Footer footerLinkLabel={footerLinkLabel} footerLinkUrl={footerLinkUrl} />
      </main>
      <CosmicBadge bucketSlug={bucketSlug} />
    </>
  )
}
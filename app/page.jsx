import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      {/*<Hero />
         <PrimaryFeatures />
      <SecondaryFeatures /> */}
      <CallToAction />
      {/*   <Testimonials />
        <Pricing />
        <Faqs /> */}
    </>
  )
}

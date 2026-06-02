import SiteNav from '@/components/layout/SiteNav'
import Footer from '@/components/layout/Footer'
import ScrollReveal from '@/components/animations/ScrollReveal'

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteNav />
      <main className="flex-1">{children}</main>
      <Footer />
      <ScrollReveal />
    </>
  )
}

import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Terms and <span className="gradient-text">Conditions</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: December 22, 2024</p>

            <div className="glass p-8 md:p-12 rounded-3xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using BymzTech's services, you agree to be bound by these Terms and Conditions. If
                  you disagree with any part of these terms, you may not use our services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. Services</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BymzTech provides digital marketing, e-commerce management, web development, and related services. The
                  specific scope of services will be outlined in individual service agreements or proposals.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">Payment terms vary by service type:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Monthly services: Payment due at the beginning of each billing cycle</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Project-based: As per milestone agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Late payments may incur additional fees</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Upon full payment, clients own the final deliverables. BymzTech retains the right to showcase work in
                  our portfolio unless otherwise agreed. Pre-existing materials and frameworks remain our property.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality regarding all client information and business data. We will not
                  disclose any confidential information to third parties without explicit permission.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  BymzTech shall not be liable for any indirect, incidental, or consequential damages arising from the
                  use of our services. Our total liability is limited to the amount paid for services in the preceding
                  12 months.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with 30 days written notice for monthly services. Project-based
                  agreements follow terms specified in individual contracts.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Contact</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms and Conditions, please contact us at bymztech@gmail.com or
                  +1 (440) 490-7685.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  )
}

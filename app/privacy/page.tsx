import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import ScrollToTop from "@/components/scroll-to-top"

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-6">
              Privacy <span className="gradient-text">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: December 22, 2024</p>

            <div className="glass p-8 md:p-12 rounded-3xl space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Name, email address, phone number, and company information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Business requirements and project details</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Payment and billing information</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">We use the information we collect to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Provide, maintain, and improve our services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Process payments and send transaction confirmations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Communicate with you about services, updates, and offers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Analyze usage and improve user experience</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell or rent your personal information to third parties. We may share your information with
                  service providers who help us operate our business, but only to the extent necessary to provide
                  services.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information against unauthorized
                  access, alteration, disclosure, or destruction. However, no method of transmission over the internet
                  is 100% secure.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">5. Cookies and Tracking</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance user experience, analyze site traffic, and
                  understand user behavior. You can control cookie preferences through your browser settings.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">6. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">You have the right to:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Access and receive a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Request correction of inaccurate information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Request deletion of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Opt-out of marketing communications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">7. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the
                  new policy on this page and updating the "Last updated" date.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at bymztech@gmail.com or
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

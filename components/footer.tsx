import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <img 
                src="/logo/logo.png" 
                alt="BYZ AMAN E-COMMERCE AGENCY" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Building your empire digitally with premium e-commerce and digital services worldwide.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-primary/20 transition-colors"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/3pl" className="text-muted-foreground hover:text-primary transition-colors">
                  3PL Services
                </Link>
              </li>
              <li>
                <Link href="/services/seo" className="text-muted-foreground hover:text-primary transition-colors">
                  SEO
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Website Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services/social-media"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>

          {/* Help Center */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Help Center</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get Connected</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail size={18} className="text-primary" />
                <a href="mailto:ecombyzaman@gmail.com" className="hover:text-primary transition-colors">
                  info@ecombyzaman.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone size={18} className="text-primary" />
                <a href="https://wa.me/14404907685
" className="hover:text-primary transition-colors">
                  +1 (440) 490-7685
                </a>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin size={18} className="text-primary" />
                <span>(830) 203-5261
900 Robertson #APT 48
Gonzales, Texas(TX), 78629</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-border/50 text-center text-muted-foreground">
          <p>© 2025 digitly by Ecombyzaman. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

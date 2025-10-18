import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Shield, Eye, Cookie, Lock } from "lucide-react"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0D0F12] text-[#EAEAEA] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back Button */}
        <Link href="/">
          <Button variant="ghost" className="mb-8 text-[#00F0A0] hover:text-[#00F0A0]/80 hover:bg-[#00F0A0]/10">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>

        {/* Header */}
        <div className="text-center mb-12">
          <Shield className="h-16 w-16 mx-auto mb-6 text-[#00F0A0]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-[#EAEAEA]/70">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <Eye className="h-6 w-6 text-[#00F0A0] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
                  At TinyEbikePro, we collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
                  <li>Email addresses when you subscribe to our newsletter</li>
                  <li>Contact information when you reach out to us</li>
                  <li>Usage data and analytics to improve our service</li>
                  <li>Cookie data for site functionality and preferences</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <Lock className="h-6 w-6 text-[#00F0A0] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
                  <li>Send you newsletters and promotional content (with your consent)</li>
                  <li>Respond to your inquiries and provide customer support</li>
                  <li>Improve our website and user experience</li>
                  <li>Analyze site traffic and usage patterns</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <Cookie className="h-6 w-6 text-[#00F0A0] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Cookies and Tracking</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
                  We use cookies and similar tracking technologies to enhance your browsing experience. These include:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to understand user behavior</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>Marketing cookies for personalized content</li>
                </ul>
                <p className="text-[#EAEAEA]/80 leading-relaxed mt-4">
                  You can control cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Amazon Affiliate Disclosure</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
              TinyEbikePro.com is a participant in the Amazon Services LLC Associates Program, an affiliate advertising
              program designed to provide a means for sites to earn advertising fees by advertising and linking to
              Amazon.com.
            </p>
            <p className="text-[#EAEAEA]/80 leading-relaxed">
              When you click on product links and make a purchase, we may earn a commission at no additional cost to
              you. This helps us maintain and improve our content.
            </p>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">You have the right to:</p>
            <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal data</li>
              <li>Opt-out of marketing communications</li>
              <li>Object to processing of your personal data</li>
            </ul>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your data, please contact us through
              our{" "}
              <Link href="/contact" className="text-[#00F0A0] hover:underline">
                contact page
              </Link>
              .
            </p>
          </Card>
        </div>
      </div>
    </div>
  )
}

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, FileText, AlertCircle, Scale, ShoppingCart } from "lucide-react"

export default function TermsPage() {
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
          <FileText className="h-16 w-16 mx-auto mb-6 text-[#00F0A0]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
          <p className="text-[#EAEAEA]/70">Last updated: January 2025</p>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <Scale className="h-6 w-6 text-[#00F0A0] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed">
                  By accessing and using TinyEbikePro.com, you accept and agree to be bound by the terms and provision
                  of this agreement. If you do not agree to these terms, please do not use our website.
                </p>
              </div>
            </div>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <ShoppingCart className="h-6 w-6 text-[#00F0A0] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Affiliate Relationships</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
                  TinyEbikePro.com participates in affiliate marketing programs, including the Amazon Services LLC
                  Associates Program. This means:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
                  <li>We may earn commissions from qualifying purchases made through our links</li>
                  <li>Product prices are not affected by our affiliate relationships</li>
                  <li>We only recommend products we believe will provide value to our users</li>
                  <li>All opinions and reviews are our own and unbiased</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Use of Website</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of
              others. Prohibited activities include:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
              <li>Attempting to gain unauthorized access to our systems</li>
              <li>Transmitting malicious code or viruses</li>
              <li>Scraping or harvesting data without permission</li>
              <li>Impersonating others or providing false information</li>
              <li>Using the site for any illegal or fraudulent purpose</li>
            </ul>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
              All content on TinyEbikePro.com, including text, graphics, logos, images, and software, is the property of
              TinyEbikePro or its content suppliers and is protected by copyright laws.
            </p>
            <p className="text-[#EAEAEA]/80 leading-relaxed">
              You may not reproduce, distribute, or create derivative works from our content without explicit written
              permission.
            </p>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Product Information</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
              We strive to provide accurate product information and reviews. However:
            </p>
            <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
              <li>Product specifications may change without notice</li>
              <li>Prices and availability are subject to change</li>
              <li>We are not responsible for errors in product descriptions</li>
              <li>Always verify information with the retailer before purchasing</li>
            </ul>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4 mb-4">
              <AlertCircle className="h-6 w-6 text-[#00F0A0] mt-1 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Disclaimer of Warranties</h2>
                <p className="text-[#EAEAEA]/80 leading-relaxed mb-4">
                  This website is provided "as is" without any warranties, express or implied. We do not guarantee:
                </p>
                <ul className="list-disc list-inside space-y-2 text-[#EAEAEA]/80">
                  <li>The accuracy or completeness of information</li>
                  <li>Uninterrupted or error-free service</li>
                  <li>That defects will be corrected</li>
                  <li>The suitability of products for your specific needs</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Limitation of Liability</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed">
              TinyEbikePro shall not be liable for any indirect, incidental, special, consequential, or punitive damages
              resulting from your use of or inability to use the website, even if we have been advised of the
              possibility of such damages.
            </p>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Changes to Terms</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting
              to the website. Your continued use of the site after changes constitutes acceptance of the new terms.
            </p>
          </Card>

          <Card className="bg-[#3A3D45]/30 border-[#3A3D45] p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-[#EAEAEA]/80 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us through our{" "}
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

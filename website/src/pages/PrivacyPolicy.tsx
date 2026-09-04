import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.tsx'
import { BASE_URL, getWhatsAppUrl, PHONE_DISPLAY, siteConfig } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'

export default function PrivacyPolicy() {
  return (
    <div>
      <SEOHead
        meta={{
          title: 'Privacy Policy | Dubai Pet Relocation',
          description: 'Privacy policy for Dubai Pet Relocation pet relocation coordination services. Learn how we collect, use, and protect your personal data.',
          canonical: `${BASE_URL}/privacy-policy/`,
          noindex: true,
        }}
      />

      <Breadcrumb items={[{ label: 'Privacy Policy' }]} />

      <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-tight text-[#2A2A2A] mb-8">
          Privacy Policy
        </h1>
        <div className="text-sm text-[#8A8A8A] mb-12">
          Last updated: June 2026
        </div>

        <div className="space-y-10 text-[#5A5A5A] text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">1. Introduction</h2>
            <p>
              Dubai Pet Relocation ("Dubai Pet Relocation," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your personal information when you use our pet relocation coordination services, visit our website, or communicate with us via WhatsApp, email, or other channels.
            </p>
            <p className="mt-3">
              By using our services, you consent to the practices described in this policy. If you do not agree, please do not use our services or provide personal information to us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">2. What Data We Collect</h2>
            <p className="mb-3">We collect the following types of personal information:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact information:</strong> Your name, email address, phone number, and WhatsApp number.</li>
              <li><strong>Pet information:</strong> Your pet's name, species, breed, age, weight, microchip number, vaccination history, and health status.</li>
              <li><strong>Relocation details:</strong> Origin and destination countries, planned travel dates, airline preferences, and accommodation details.</li>
              <li><strong>Communication records:</strong> Messages, emails, and notes from our WhatsApp, email, and phone conversations.</li>
              <li><strong>Technical data:</strong> IP address, browser type, device information, and cookies when you visit our website.</li>
              <li><strong>Payment information:</strong> Billing details and transaction records (processed securely by our payment partners).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">3. How We Use Your Data</h2>
            <p className="mb-3">We use your personal information for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>To coordinate and manage your pet relocation process.</li>
              <li>To communicate with you about your relocation status, requirements, and updates.</li>
              <li>To share necessary information with our trusted partners (veterinarians, airlines, transport providers) to facilitate your relocation.</li>
              <li>To comply with legal and regulatory requirements, including MOCCAE and UAE government regulations.</li>
              <li>To improve our services, website, and customer experience through analytics and feedback.</li>
              <li>To send you service-related communications and, with your consent, occasional updates about our services.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">4. Data Sharing with Partners</h2>
            <p>
              Dubai Pet Relocation operates as a coordination service that coordinates with third-party specialists to complete your pet relocation. We share your personal and pet information only with:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Veterinary partners</strong> to arrange health checks, vaccinations, and certificates.</li>
              <li><strong>Airlines and cargo agents</strong> to book and manage pet travel.</li>
              <li><strong>Ground transport providers</strong> for airport pickup and delivery services.</li>
              <li><strong>Government authorities</strong> such as MOCCAE, customs, and immigration where required by law.</li>
              <li><strong>Insurance providers</strong> if you purchase travel insurance through us.</li>
            </ul>
            <p className="mt-3">
              We only share the minimum information necessary for each partner to perform their specific role. We require all partners to maintain appropriate confidentiality and data protection measures. We never sell your personal data to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">5. Legal Basis for Processing</h2>
            <p>
              Under the UAE Personal Data Protection Law (PDPL) and GDPR (for EU residents), we process your data based on:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li><strong>Contractual necessity:</strong> Processing is necessary to fulfill our service agreement with you.</li>
              <li><strong>Legal obligation:</strong> We must process certain data to comply with UAE import/export regulations.</li>
              <li><strong>Legitimate interests:</strong> We process data to improve our services and prevent fraud, provided this does not override your rights.</li>
              <li><strong>Consent:</strong> For marketing communications and optional analytics, we rely on your explicit consent.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">6. Cookies and Analytics</h2>
            <p>
              Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyze website traffic, and understand user behavior. We use Google Analytics and similar tools to collect anonymous usage data.
            </p>
            <p className="mt-3">
              You can control cookies through your browser settings. Disabling cookies may affect some website functionality.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">7. Data Retention</h2>
            <p>
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, or as required by law. Typically, we keep relocation records for 7 years to comply with UAE regulatory requirements and in case of future disputes or repeat relocations.
            </p>
            <p className="mt-3">
              After the retention period, your data is securely deleted or anonymized.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">8. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. This includes encrypted communications, access controls, secure data storage, and regular security reviews.
            </p>
            <p className="mt-3">
              However, no internet transmission is completely secure. While we strive to protect your data, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">9. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the following rights:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Access:</strong> Request a copy of the personal data we hold about you.</li>
              <li><strong>Correction:</strong> Ask us to correct inaccurate or incomplete data.</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data, subject to legal retention requirements.</li>
              <li><strong>Restriction:</strong> Ask us to limit how we use your data.</li>
              <li><strong>Portability:</strong> Receive your data in a structured, machine-readable format.</li>
              <li><strong>Objection:</strong> Object to processing based on legitimate interests or direct marketing.</li>
              <li><strong>Withdraw consent:</strong> Withdraw consent at any time for processing based on consent.</li>
            </ul>
            <p className="mt-3">
              To exercise your rights, please contact us using the details below. We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">10. International Data Transfers</h2>
            <p>
              As a pet relocation service, we may transfer your data to partners in other countries (e.g., destination country veterinarians, airlines, transport providers). We ensure appropriate safeguards are in place for such transfers, including contractual protections and compliance with applicable data protection laws.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">11. Children's Privacy</h2>
            <p>
              Our services are not directed to children under 13. We do not knowingly collect personal information from children. If you believe we have inadvertently collected data from a child, please contact us immediately and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the updated policy on our website and updating the "Last updated" date. Please review this policy periodically.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">13. Contact Us</h2>
            <p className="mb-3">
              If you have questions about this Privacy Policy, want to exercise your rights, or have concerns about how we handle your data, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href={`mailto:${siteConfig.email}`} className="text-[#4F5BD5] hover:underline">{siteConfig.email}</a></p>
              <p><strong>Address:</strong> Al Quoz Industrial Area 4, Al Quoz Industrial Area, Al Quoz, Dubai</p>
              <p><strong>WhatsApp:</strong> <a href={getWhatsAppUrl('Hi, I have a question about the Privacy Policy.')} target="_blank" rel="noopener noreferrer" className="text-[#4F5BD5] hover:underline">{PHONE_DISPLAY}</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E2E5F6]">
          <Link to="/" className="text-sm font-semibold text-[#4F5BD5] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

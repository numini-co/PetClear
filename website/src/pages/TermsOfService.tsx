import { Link } from 'react-router-dom'
import SEOHead from '../components/SEOHead.tsx'
import { BASE_URL } from '../lib/seo.ts'
import Breadcrumb from '../components/Breadcrumb.tsx'

export default function TermsOfService() {
  return (
    <div>
      <SEOHead
        meta={{
          title: 'Terms of Service | Dubai Pet Relocation',
          description: 'Terms of Service for Dubai Pet Relocation pet relocation coordination services. Please read these terms carefully before using our services.',
          canonical: `${BASE_URL}/terms-of-service/`,
          noindex: true,
        }}
      />

      <Breadcrumb items={[{ label: 'Terms of Service' }]} />

      <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 py-16">
        <h1 className="text-[28px] sm:text-[36px] lg:text-[44px] font-bold leading-tight text-[#2A2A2A] mb-8">
          Terms of Service
        </h1>
        <div className="text-sm text-[#8A8A8A] mb-12">
          Last updated: June 2026
        </div>

        <div className="space-y-10 text-[#5A5A5A] text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing or using the services of Dubai Pet Relocation ("Dubai Pet Relocation," "we," "us," or "our"), you agree to be bound by these Terms of Service. If you do not agree to all of these terms, you may not use our services. These terms apply to all users, including clients, partners, and visitors of our website.
            </p>
            <p className="mt-3">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services following the posting of revised terms constitutes your acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">2. Description of Services</h2>
            <p>
              Dubai Pet Relocation is a pet relocation coordination service. We help pet owners understand the requirements for relocating pets to and from Dubai, check and prepare documents, and connect clients with trusted third-party partners including veterinarians, airlines, cargo agents, and ground transport providers.
            </p>
            <p className="mt-3 font-semibold text-[#2A2A2A]">
              Important: Dubai Pet Relocation is not a licensed carrier, airline, veterinary clinic, or government agency. We do not physically transport pets, provide veterinary care, or issue government permits. We are a coordination and advisory service that connects you with specialists who perform these functions.
            </p>
            <p className="mt-3">
              We make reasonable efforts to ensure the accuracy of information provided on our website and through our communications, but we do not guarantee that all information is complete, accurate, or current. Government regulations, airline policies, and veterinary requirements change frequently, and you are ultimately responsible for verifying requirements with the relevant authorities.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">3. Service Agreement and Scope</h2>
            <p>
              When you engage Dubai Pet Relocation for services, we will provide a Service Agreement or engagement confirmation that specifies the scope of work, service tier, estimated costs, timeline, and any specific conditions for your relocation. This agreement supplements these Terms of Service and, in case of conflict, the Service Agreement prevails.
            </p>
            <p className="mt-3">
              Our services are provided on a best-effort basis. While we strive for excellence in every relocation, we cannot guarantee outcomes that depend on third-party actions (e.g., airline schedules, government processing times, veterinary findings) or circumstances beyond our control.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">4. Client Responsibilities</h2>
            <p className="mb-3">As a client, you are responsible for:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Providing accurate, complete, and truthful information about your pet, your relocation, and your circumstances.</li>
              <li>Obtaining and maintaining valid vaccinations, microchips, and health records as required by the destination country.</li>
              <li>Complying with all applicable laws, regulations, and airline policies related to your pet's relocation.</li>
              <li>Attending veterinary appointments and providing timely responses to our requests for documents or decisions.</li>
              <li>Ensuring your pet is fit to travel and does not have any health conditions that make air travel inadvisable, as determined by a licensed veterinarian.</li>
              <li>Paying all fees as agreed in the Service Agreement and these Terms.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">5. Payment Terms</h2>
            <p>
              Payment terms are outlined in your Service Agreement. Generally, we require a non-refundable deposit to begin work, with the balance due before final travel arrangements are confirmed. Specific payment schedules may vary based on the service tier and complexity of the relocation.
            </p>
            <p className="mt-3">
              All quoted prices are estimates based on information available at the time of quoting. Actual costs may vary due to changes in airline rates, government fees, veterinary charges, currency fluctuations, or unforeseen circumstances. We will communicate any significant cost changes as soon as they become known.
            </p>
            <p className="mt-3">
              Government fees, airline cargo fees, and veterinary charges are typically paid directly to the relevant provider or passed through to you at cost. Our service fee is separate and covers our coordination, advisory, and management work.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">6. Cancellation and Refunds</h2>
            <p>
              Cancellation policies are specified in your Service Agreement. Generally, the initial deposit is non-refundable once work has commenced, as it covers the time spent on document review, route analysis, and partner coordination. If a relocation is cancelled due to circumstances beyond your control (e.g., airline cancellation, government policy change), we will work with you to recover costs from partners where possible and apply any recovered amounts as a credit toward future services.
            </p>
            <p className="mt-3">
              Refunds for services not yet rendered may be considered on a case-by-case basis. No refunds are provided for completed services or for third-party fees that have already been paid to airlines, veterinarians, or government agencies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">7. Liability and Limitations</h2>
            <p>
              To the maximum extent permitted by law, Dubai Pet Relocation's liability is limited to the amount of fees paid by you for our services in connection with the specific relocation giving rise to the claim. We are not liable for any indirect, incidental, consequential, or punitive damages, including loss of profits, emotional distress, or harm to your pet, arising from the use of our services or third-party services.
            </p>
            <p className="mt-3">
              Dubai Pet Relocation is not liable for:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3">
              <li>Actions, omissions, or negligence of third-party partners (airlines, veterinarians, transport providers, government agencies).</li>
              <li>Delays, cancellations, or changes caused by weather, mechanical issues, labor disputes, or airline operational decisions.</li>
              <li>Health issues, injury, or loss of life occurring during transport, boarding, or veterinary care, which are the responsibility of the performing provider.</li>
              <li>Claims arising from inaccurate or incomplete information provided by you or your representatives.</li>
              <li>Changes in government regulations or airline policies that occur after booking but before travel.</li>
            </ul>
            <p className="mt-3">
              We strongly recommend purchasing travel insurance for your pet to cover risks associated with international relocation. We can assist you in obtaining such insurance through our partners.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">8. Force Majeure</h2>
            <p>
              Neither Dubai Pet Relocation nor our partners shall be liable for failure to perform obligations under these Terms if such failure is due to circumstances beyond our reasonable control, including but not limited to: natural disasters, wars, terrorist acts, pandemics, government actions or changes in regulations, flight cancellations, extreme weather, strikes, labor disputes, or mechanical failures.
            </p>
            <p className="mt-3">
              In the event of force majeure, we will use reasonable efforts to mitigate the impact, find alternative solutions, and communicate updates to you as promptly as possible. Additional costs arising from force majeure events (e.g., extended boarding, rebooking fees) are generally your responsibility unless otherwise agreed.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">9. Indemnification</h2>
            <p>
              You agree to indemnify, defend, and hold harmless Dubai Pet Relocation, its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable legal fees) arising from your use of our services, your breach of these Terms, or your violation of any applicable law or regulation.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">10. Intellectual Property</h2>
            <p>
              All content on the Dubai Pet Relocation website, including text, graphics, logos, images, and software, is the property of Dubai Pet Relocation or its licensors and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works from our content without our prior written consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">11. Dispute Resolution</h2>
            <p>
              Any dispute arising from these Terms or our services shall first be attempted to be resolved through good-faith negotiation between the parties. If negotiation fails, the dispute shall be submitted to mediation in Dubai, UAE. If mediation is unsuccessful, the dispute shall be resolved exclusively in the courts of Dubai, UAE, and both parties submit to the jurisdiction of those courts.
            </p>
            <p className="mt-3">
              These Terms shall be governed by and construed in accordance with the laws of the United Arab Emirates, without regard to conflict of law principles.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">12. Severability</h2>
            <p>
              If any provision of these Terms is found to be invalid, illegal, or unenforceable by a court of competent jurisdiction, the remaining provisions shall continue in full force and effect. The invalid provision shall be modified to the minimum extent necessary to make it valid and enforceable while preserving the original intent as closely as possible.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">13. Entire Agreement</h2>
            <p>
              These Terms of Service, together with any Service Agreement, privacy policy, and other written agreements between you and Dubai Pet Relocation, constitute the entire agreement between you and us regarding the subject matter hereof and supersede all prior or contemporaneous agreements, understandings, negotiations, and discussions, whether oral or written.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[#2A2A2A] mb-3">14. Contact Information</h2>
            <p className="mb-3">
              If you have questions about these Terms of Service, please contact us:
            </p>
            <div className="space-y-2">
              <p><strong>Email:</strong> <a href="mailto:hello@dubai-pet-relocation.ae" className="text-[#4F5BD5] hover:underline">hello@dubai-pet-relocation.ae</a></p>
              <p><strong>Address:</strong> Al Quoz Industrial Area 4, Al Quoz Industrial Area, Al Quoz, Dubai</p>
              <p><strong>WhatsApp:</strong> <a href="https://wa.me/971551744849" target="_blank" rel="noopener noreferrer" className="text-[#4F5BD5] hover:underline">+971 55 174 4849</a></p>
            </div>
          </section>
        </div>

        <div className="mt-12 pt-8 border-t border-[#E2E5F6] flex gap-6">
          <Link to="/privacy-policy/" className="text-sm font-semibold text-[#4F5BD5] hover:underline">
            Privacy Policy
          </Link>
          <Link to="/" className="text-sm font-semibold text-[#4F5BD5] hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

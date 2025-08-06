import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <section className="w-full flex items-center justify-center py-5 px-5 lg:px-10">
      <div className="w-full  max-w-screen-xl  px-6 py-12 text-gray-800 dark:text-white">
        <h1 className="text-3xl font-bold mb-4 text-center">
          Privacy Policy for AnonymizeCare
        </h1>
        <p className="text-sm text-center text-gray-500 dark:text-gray-200 mb-8">
          Effective Date: 6th August, 2025
        </p>
        <section className="space-y-6">
          <p>
            At AnonymizeCare, we are committed to protecting your privacy. This
            Privacy Policy outlines how we collect, use, and protect your data
            across all services.
          </p>

          <h2 className="text-xl font-semibold">1. Scope of this Policy</h2>
          <ul className="list-disc pl-6">
            <li>
              Users booking anonymous consultations with healthcare consultants
            </li>
            <li>Users requesting medication price quotes from vendors</li>
            <li>
              Vendors and consultants using the platform to respond to requests
            </li>
            <li>All users accessing our web or mobile applications</li>
          </ul>

          <h2 className="text-xl font-semibold">
            2. What Information We Collect
          </h2>
          <h3 className="font-medium">a. Anonymous Consultations:</h3>
          <ul className="list-disc pl-6">
            <li>No name, email, phone number, or ID is required.</li>
            <li>
              Only temporary session data (e.g., session token or chat ID) is
              used to support the session.
            </li>
            <li>
              Optional details may include age range, gender, or symptoms (not
              linked to identity).
            </li>
          </ul>

          <h3 className="font-medium">b. Vendor Services:</h3>
          <ul className="list-disc pl-6">
            <li>Name (only for normal delivery)</li>
            <li>Delivery address</li>
            <li>Contact phone/email (if provided)</li>
            <li>Prescription details</li>
            <li>Payment data (handled securely by third-party processors)</li>
          </ul>

          <h3 className="font-medium">c. System & Device Data:</h3>
          <ul className="list-disc pl-6">
            <li>IP address (temporarily logged)</li>
            <li>Device and browser type</li>
            <li>Operating system</li>
            <li>App usage logs</li>
            <li>Anonymous error or crash reports</li>
          </ul>

          <h2 className="text-xl font-semibold">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>Enable anonymous or normal consultations</li>
            <li>Process medication price requests and facilitate deliveries</li>
            <li>Monitor and improve the platform</li>
            <li>Respond to your inquiries and support requests</li>
            <li>Fulfill legal and regulatory obligations</li>
          </ul>

          <h2 className="text-xl font-semibold">4. Your Privacy Choices</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Anonymous Use:</strong> You may use AnonymizeCare without
              revealing any personal information during consultations.
            </li>
            <li>
              <strong>Normal Use:</strong> For delivery or vendor-related
              services, some details (e.g., name, phone, address) are required.
            </li>
            <li>
              <strong>Data Minimization:</strong> We collect only what is
              necessary for each service.
            </li>
            <li>
              <strong>Auto-Deletion:</strong> Anonymous session data is deleted
              automatically after a short retention period.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">5. Data Sharing</h2>
          <p>
            We do not sell or rent your personal data. We only share information
            when required to operate our services:
          </p>
          <ul className="list-disc pl-6">
            <li>Consultants (only see symptom details; no user ID)</li>
            <li>Vendors (receive delivery details for processing orders)</li>
            <li>Logistics partners (delivery address only)</li>
            <li>Payment providers (secure, tokenized processing)</li>
            <li>Regulatory authorities (only if legally required)</li>
          </ul>

          <h2 className="text-xl font-semibold">
            6. Anonymous Consultations – Extra Safeguards
          </h2>
          <ul className="list-disc pl-6">
            <li>All chats and video sessions are end-to-end encrypted.</li>
            <li>No personal profile or identifiable information is shown.</li>
            <li>Unique session identifiers expire after the consultation.</li>
            <li>Users may end or delete their session anytime.</li>
            <li>
              Session data is not stored beyond what&apos;s necessary to prevent
              misuse.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">7. Security Measures</h2>
          <ul className="list-disc pl-6">
            <li>SSL encryption for all communications</li>
            <li>Secure, access-controlled databases</li>
            <li>Role-based access permissions for vendors and consultants</li>
            <li>Anonymization of sensitive data where applicable</li>
          </ul>

          <h2 className="text-xl font-semibold">8. Cookies and Tracking</h2>
          <ul className="list-disc pl-6">
            <li>Keep you signed in securely</li>
            <li>Improve overall service performance</li>
            <li>Collect basic, non-identifiable usage data</li>
          </ul>
          <p>We do not track personal behavior or browsing history.</p>

          <h2 className="text-xl font-semibold">9. Data Retention</h2>
          <ul className="list-disc pl-6">
            <li>
              <strong>Anonymous sessions:</strong> Deleted automatically within
              a short time after completion.
            </li>
            <li>
              <strong>Vendor transactions:</strong> Stored as long as required
              for delivery, legal, and payment records.
            </li>
            <li>
              <strong>Usage logs:</strong> Kept temporarily for performance
              monitoring and security.
            </li>
          </ul>

          <h2 className="text-xl font-semibold">10. Your Rights</h2>
          <ul className="list-disc pl-6">
            <li>Remain anonymous during consultations</li>
            <li>Access any personal information you&apos;ve provided</li>
            <li>Request correction or deletion of data</li>
            <li>Withdraw consent or opt-out of data use</li>
          </ul>
          <p>
            To exercise any of these rights, please contact us at:{" "}
            <Link
              href="mailto:info@7thcare.com"
              className="text-blue-600 underline"
            >
              info@7thcare.com
            </Link>
          </p>
        </section>
      </div>
    </section>
  );
};

export default PrivacyPolicy;

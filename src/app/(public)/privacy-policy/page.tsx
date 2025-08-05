const PrivacyPolicy = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-white">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-8">
        Effective Date: 05/08/2025
      </p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">1. Introduction</h2>
        <p>
          At AnonymizeCare, we are deeply committed to safeguarding the privacy
          and anonymity of our users. This Privacy Policy explains how we
          collect, use, disclose, and protect your personal information when you
          access our healthcare platform and services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          2. Information We Collect
        </h2>
        <p>
          We may collect minimal personal data that you voluntarily provide to
          us when using our platform, including:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Personal Identification Information:</strong> Name, email
            address, phone number (only if necessary for service delivery).
          </li>
          <li>
            <strong>Healthcare Information:</strong> Appointment history,
            anonymized health records, symptom tracking.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, device type, operating
            system, usage patterns.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          3. How We Use Your Information
        </h2>
        <ul className="list-disc list-inside space-y-1">
          <li>Deliver and manage healthcare services securely.</li>
          <li>Ensure user anonymity while providing personalized care.</li>
          <li>Communicate essential updates or support information.</li>
          <li>Enhance platform functionality and user experience.</li>
          <li>Fulfill legal and regulatory obligations.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">4. Location</h2>
        <p>
          The AnonymizeCare app may use your location data (with consent) to
          suggest nearby healthcare providers or emergency services. Location
          tracking is strictly optional and anonymized to protect your identity.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          5. Sharing Your Information
        </h2>
        <p>
          We do not sell or rent your personal information. We may share data
          only under the following circumstances:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>
            <strong>Service Providers:</strong> Trusted third-party partners who
            help us deliver healthcare services securely.
          </li>
          <li>
            <strong>Legal Requirements:</strong> When required by law or
            regulatory authorities.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">6. Data Security</h2>
        <p>
          We employ advanced encryption, anonymization protocols, and strict
          access controls to protect your personal and health-related
          information from unauthorized access or misuse.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          7. Your Data Protection Rights
        </h2>
        <p>
          Depending on your jurisdiction, you may have the following rights:
        </p>
        <ul className="list-disc list-inside mt-2 space-y-1">
          <li>Access to your anonymized health data.</li>
          <li>Correction of inaccurate or incomplete records.</li>
          <li>Request deletion of your personal data.</li>
          <li>Restrict or object to data processing.</li>
          <li>Data portability in a secure format.</li>
        </ul>
        <p className="mt-2">
          To exercise these rights, please contact us at{" "}
          <a
            href="mailto:info@7thcare.com"
            className="text-blue-600 hover:underline"
          >
            info@7thcare.com
          </a>
          .
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          8. Children&apos;s Privacy
        </h2>
        <p>
          We do not knowingly collect personal information from children under
          the age of 13 without verified parental or guardian consent. If you
          believe such data has been collected, please notify us immediately.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">
          9. Changes to This Privacy Policy
        </h2>
        <p>
          We may revise this Privacy Policy periodically. Any updates will be
          posted on this page with a revised effective date. Continued use of
          our services implies acceptance of the updated terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy,
          please reach out to us:
        </p>
        <address className="not- mt-2">
          AnonymizeCare Privacy Office
          <br />
          Unit 302, 2221 Yonge Street, Toronto ON, M4S 0B8.
          <br />
          Email:{" "}
          <a
            href="mailto:info@7thcare.com"
            className="text-blue-600 hover:underline"
          >
            info@7thcare.com
          </a>
        </address>
      </section>
    </div>
  );
};

export default PrivacyPolicy;

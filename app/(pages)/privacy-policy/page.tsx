export default function PrivacyPolicy() {
  return (
    <div className='my-10 space-y-10 px-12 lg:px-24'>
      <h1 className='text-center text-xl font-bold lg:text-3xl'>
        Privacy Policy for Zoomin Productions Company
      </h1>

      <p>
        Welcome to Zoomin Productions Companys&apos; Privacy Policy. At Zoomin
        Productions, we are committed to protecting your privacy and ensuring
        the security of your personal information. This Privacy Policy outlines
        how we collect, use, disclose, and protect your information when you
        visit our website or use our production services.
      </p>

      <h2>1. Information We Collect</h2>
      <p>
        We may collect the following types of information:
        <ul>
          <li>
            <strong>Personal Information:</strong> Name, Contact information
            (email address, phone number), Address
          </li>
          <li>
            <strong>Business Information:</strong> Company name, Position/title,
            Business contact information
          </li>
          <li>
            <strong>Technical Information:</strong> IP address, Browser type,
            Device information
          </li>
          <li>
            <strong>Usage Information:</strong> Pages visited on our website,
            Time spent on our website, Actions taken on our website
          </li>
        </ul>
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>
        We use the collected information for the following purposes:
        <ul>
          <li>
            <strong>Providing Services:</strong> To fulfill your production
            requests, including shooting videos, capturing images, editing, and
            post-production services.
          </li>
          <li>
            <strong>Communication:</strong> To respond to your inquiries and
            provide updates on the progress of your projects.
          </li>
          <li>
            <strong>Marketing:</strong> To inform you about our latest services,
            promotions, and events. You can opt-out of these communications at
            any time.
          </li>
          <li>
            <strong>Analytics:</strong> To analyze website usage, improve our
            services, and enhance user experience.
          </li>
        </ul>
      </p>

      {/* Add other sections of the privacy policy here */}

      <h2>8. Contact Us</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please
        contact us at{' '}
        <a
          className='text-pastel-green underline'
          href='mailto:contactus@zoominproductions.in'
        >
          contactus@zoominproductions.in
        </a>
      </p>

      <p>Thank you for choosing Zoomin Productions Company!</p>
    </div>
  );
}

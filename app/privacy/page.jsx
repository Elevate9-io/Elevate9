import React from "react";
import PrivacyIntro from "./PrivacyIntro";

const sectionStyle = {
  margin: "2rem 0 1.5rem 0",
  padding: "0 0 0.5rem 0",
  borderBottom: "1px solid #eee"
};
const headingStyle = {
  fontSize: "1.3rem",
  fontWeight: "bold",
  margin: "1.5rem 0 0.5rem 0",
  color: "#fff"
};
const subheadingStyle = {
  fontSize: "1.1rem",
  fontWeight: "bold",
  margin: "1rem 0 0.5rem 0",
  color: "#fff"
};
const textStyle = {
  margin: "0.5rem 0",
  color: "#fff"
};

const PrivacyPolicy = () => (
  <div style={{ maxWidth: 800, margin: "0 auto", padding: "2rem 1rem", color: "#fff" }}>
    <h1 style={{ ...headingStyle, textAlign: "center" }}>Privacy Policy</h1>
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <em>Last updated March 21, 2025</em>
    </div>
    {/* 1. Introduction */}
    <PrivacyIntro />
    {/* 2. Summary of Key Points */}
    <div style={sectionStyle}>
      <div style={headingStyle}>Summary of Key Points</div>
      <ul>
        <li>
          We may process personal information depending on how you interact with
          us and the Services, the choices you make, and the products and
          features you use.
        </li>
        <li>We do not process sensitive personal information.</li>
        <li>We do not collect any information from third parties.</li>
        <li>
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent.
        </li>
        <li>
          We may share information in specific situations and with specific
          categories of third parties.
        </li>
        <li>
          We have adequate organizational and technical processes and procedures
          in place to protect your personal information, but no electronic
          transmission or storage is 100% secure.
        </li>
        <li>
          Depending on where you are located, you may have certain rights
          regarding your personal information.
        </li>
        <li>
          The easiest way to exercise your rights is by submitting a{" "}
          <a
            href="https://app.termly.io/notify/8183d57a-3ebf-4544-818f-5017da72398f"
            target="_blank"
            rel="noopener noreferrer"
          >
            data subject access request
          </a>
          , or by contacting us.
        </li>
      </ul>
    </div>
    {/* 3. Table of Contents */}
    <div style={sectionStyle}>
        <div style={headingStyle}>Table of Contents</div>
        <ol>
            <li><a href="#info-we-collect" style={{ color: '#4FC3F7' }}>What information do we collect?</a></li>
            <li><a href="#how-we-process" style={{ color: '#4FC3F7' }}>How do we process your information?</a></li>
            <li><a href="#who-we-share" style={{ color: '#4FC3F7' }}>When and with whom do we share your personal information?</a></li>
            <li><a href="#third-party" style={{ color: '#4FC3F7' }}>What is our stance on third-party websites?</a></li>
            <li><a href="#cookies-tracking" style={{ color: '#4FC3F7' }}>Do we use cookies and other tracking technologies?</a></li>
            <li><a href="#retention" style={{ color: '#4FC3F7' }}>How long do we keep your information?</a></li>
            <li><a href="#safety" style={{ color: '#4FC3F7' }}>How do we keep your information safe?</a></li>
            <li><a href="#minors" style={{ color: '#4FC3F7' }}>Do we collect information from minors?</a></li>
            <li><a href="#rights" style={{ color: '#4FC3F7' }}>What are your privacy rights?</a></li>
            <li><a href="#dnt" style={{ color: '#4FC3F7' }}>Controls for do-not-track features</a></li>
            <li><a href="#us-rights" style={{ color: '#4FC3F7' }}>Do United States residents have specific privacy rights?</a></li>
            <li><a href="#updates" style={{ color: '#4FC3F7' }}>Do we make updates to this notice?</a></li>
            <li><a href="#contact" style={{ color: '#4FC3F7' }}>How can you contact us about this notice?</a></li>
            <li><a href="#review-data" style={{ color: '#4FC3F7' }}>How can you review, update, or delete the data we collect from you?</a></li>
        </ol>
    </div>
    {/* 4. WHAT INFORMATION DO WE COLLECT? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>1. What information do we collect?</div>
      <div style={subheadingStyle}>Personal information you disclose to us</div>
      <div style={textStyle}>
        <em>We collect personal information that you provide to us.</em>
      </div>
      <div style={textStyle}>
        We collect personal information that you voluntarily provide to us when
        you express an interest in obtaining information about us or our products
        and Services, when you participate in activities on the Services, or
        otherwise when you contact us.
      </div>
      <ul>
        <li>Names</li>
        <li>Phone numbers</li>
        <li>Email addresses</li>
        <li>Contact preferences</li>
      </ul>
      <div style={subheadingStyle}>Sensitive Information</div>
      <div style={textStyle}>We do not process sensitive information.</div>
      <div style={textStyle}>
        All personal information that you provide to us must be true, complete,
        and accurate, and you must notify us of any changes to such personal
        information.
      </div>
      <div style={subheadingStyle}>Information automatically collected</div>
      <div style={textStyle}>
        <em>
          Some information — such as your IP address and/or browser and device
          characteristics — is collected automatically when you visit our
          Services.
        </em>
      </div>
      <div style={textStyle}>
        We automatically collect certain information when you visit, use, or
        navigate the Services. This information does not reveal your specific
        identity (like your name or contact information) but may include device
        and usage information, such as your IP address, browser and device
        characteristics, operating system, language preferences, referring URLs,
        device name, country, location, information about how and when you use
        our Services, and other technical information. This information is
        primarily needed to maintain the security and operation of our Services,
        and for our internal analytics and reporting purposes.
      </div>
      <ul>
        <li>
          <strong>Log and Usage Data.</strong> Service-related, diagnostic,
          usage, and performance information our servers automatically collect
          when you access or use our Services and which we record in log files.
        </li>
        <li>
          <strong>Device Data.</strong> Information about your computer, phone,
          tablet, or other device you use to access the Services.
        </li>
        <li>
          <strong>Location Data.</strong> Information about your device's
          location, which can be either precise or imprecise.
        </li>
      </ul>
      <div style={subheadingStyle}>Google API</div>
      <div style={textStyle}>
        Our use of information received from Google APIs will adhere to the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google API Services User Data Policy
        </a>
        , including the{" "}
        <a
          href="https://developers.google.com/terms/api-services-user-data-policy#limited-use"
          target="_blank"
          rel="noopener noreferrer"
        >
          Limited Use requirements
        </a>
        .
      </div>
    </div>
    {/* 5. HOW DO WE PROCESS YOUR INFORMATION? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>2. How do we process your information?</div>
      <div style={textStyle}>
        <em>
          We process your information to provide, improve, and administer our
          Services, communicate with you, for security and fraud prevention, and
          to comply with law. We may also process your information for other
          purposes with your consent.
        </em>
      </div>
      <div style={textStyle}>
        <strong>
          We process your personal information for a variety of reasons,
          depending on how you interact with our Services, including:
        </strong>
      </div>
      <ul>
        <li>To respond to user inquiries/offer support to users</li>
        <li>To request feedback</li>
        <li>To send you marketing and promotional communications</li>
        <li>To deliver targeted advertising to you</li>
        <li>To post testimonials</li>
        <li>To evaluate and improve our Services, products, marketing, and your experience</li>
        <li>To identify usage trends</li>
        <li>To determine the effectiveness of our marketing and promotional campaigns</li>
      </ul>
    </div>
    {/* 6. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>3. When and with whom do we share your personal information?</div>
      <div style={textStyle}>
        <em>
          We may share information in specific situations described in this
          section and/or with the following categories of third parties.
        </em>
      </div>
      <div style={textStyle}>
        <strong>
          Vendors, Consultants, and Other Third-Party Service Providers.
        </strong>{" "}
        We may share your data with third-party vendors, service providers,
        contractors, or agents who perform services for us or on our behalf and
        require access to such information to do that work.
      </div>
      <ul>
        <li>AI Platforms</li>
        <li>Affiliate Marketing Programs</li>
        <li>Data Analytics Services</li>
        <li>Performance Monitoring Tools</li>
        <li>Product Engineering & Design Tools</li>
        <li>Sales & Marketing Tools</li>
        <li>Website Hosting Service Providers</li>
        <li>Ad Networks</li>
      </ul>
      <div style={textStyle}>
        <strong>Other situations:</strong>
      </div>
      <ul>
        <li>Business Transfers</li>
        <li>Affiliates</li>
        <li>Business Partners</li>
      </ul>
    </div>
    {/* 7. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>4. What is our stance on third-party websites?</div>
      <div style={textStyle}>
        <em>
          We are not responsible for the safety of any information that you share
          with third parties that we may link to or who advertise on our
          Services, but are not affiliated with, our Services.
        </em>
      </div>
      <div style={textStyle}>
        The Services may link to third-party websites, online services, or mobile
        applications and/or contain advertisements from third parties that are
        not affiliated with us and which may link to other websites, services, or
        applications. We do not make any guarantee regarding any such third
        parties, and we will not be liable for any loss or damage caused by the
        use of such third-party websites, services, or applications. The
        inclusion of a link towards a third-party website, service, or
        application does not imply an endorsement by us. We cannot guarantee the
        safety and privacy of data you provide to any third-party websites. Any
        data collected by third parties is not covered by this Privacy Notice.
        You should review the policies of such third parties and contact them
        directly to respond to your questions.
      </div>
    </div>
    {/* 8. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>5. Do we use cookies and other tracking technologies?</div>
      <div style={textStyle}>
        <em>We may use cookies and other tracking technologies to collect and store your information.</em>
      </div>
      <div style={textStyle}>
        We may use cookies and similar tracking technologies (like web beacons
        and pixels) to gather information when you interact with our Services.
        Some online tracking technologies help us maintain the security of our
        Services, prevent crashes, fix bugs, save your preferences, and assist
        with basic site functions. We also permit third parties and service
        providers to use online tracking technologies on our Services for
        analytics and advertising, including to help manage and display
        advertisements, to tailor advertisements to your interests, or to send
        abandoned shopping cart reminders (depending on your communication
        preferences).
      </div>
      <div style={textStyle}>
        To the extent these online tracking technologies are deemed to be a
        "sale"/"sharing" (which includes targeted advertising, as defined under
        the applicable laws) under applicable US state laws, you can opt out of
        these online tracking technologies by submitting a request as described
        in the section on US privacy rights below.
      </div>
      <div style={subheadingStyle}>Google Analytics</div>
      <div style={textStyle}>
        We may share your information with Google Analytics to track and analyze
        the use of the Services. The Google Analytics Advertising Features that we
        may use include: Google Analytics Demographics and Interests Reporting,
        Google Display Network Impressions Reporting, and Remarketing with Google
        Analytics. To opt out of being tracked by Google Analytics across the
        Services, visit{" "}
        <a
          href="https://tools.google.com/dlpage/gaoptout"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://tools.google.com/dlpage/gaoptout
        </a>
        . You can opt out of Google Analytics Advertising Features through{" "}
        <a
          href="https://adssettings.google.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ads Settings
        </a>{" "}
        and Ad Settings for mobile apps. Other opt out means include{" "}
        <a
          href="http://optout.networkadvertising.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://optout.networkadvertising.org/
        </a>{" "}
        and{" "}
        <a
          href="http://www.networkadvertising.org/mobile-choice"
          target="_blank"
          rel="noopener noreferrer"
        >
          http://www.networkadvertising.org/mobile-choice
        </a>
        . For more information on the privacy practices of Google, please visit
        the{" "}
        <a
          href="https://policies.google.com/privacy"
          target="_blank"
          rel="noopener noreferrer"
        >
          Google Privacy & Terms page
        </a>
        .
      </div>
    </div>
    {/* 9. HOW LONG DO WE KEEP YOUR INFORMATION? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>6. How long do we keep your information?</div>
      <div style={textStyle}>
        <em>
          We keep your information for as long as necessary to fulfill the
          purposes outlined in this Privacy Notice unless otherwise required by
          law.
        </em>
      </div>
      <div style={textStyle}>
        We will only keep your personal information for as long as it is
        necessary for the purposes set out in this Privacy Notice, unless a
        longer retention period is required or permitted by law (such as tax,
        accounting, or other legal requirements). When we have no ongoing
        legitimate business need to process your personal information, we will
        either delete or anonymize such information, or, if this is not possible
        (for example, because your personal information has been stored in backup
        archives), then we will securely store your personal information and
        isolate it from any further processing until deletion is possible.
      </div>
    </div>
    {/* 10. HOW DO WE KEEP YOUR INFORMATION SAFE? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>7. How do we keep your information safe?</div>
      <div style={textStyle}>
        <em>
          We aim to protect your personal information through a system of
          organizational and technical security measures.
        </em>
      </div>
      <div style={textStyle}>
        We have implemented appropriate and reasonable technical and organizational
        security measures designed to protect the security of any personal
        information we process. However, despite our safeguards and efforts to
        secure your information, no electronic transmission over the Internet or
        information storage technology can be guaranteed to be 100% secure, so we
        cannot promise or guarantee that hackers, cybercriminals, or other
        unauthorized third parties will not be able to defeat our security and
        improperly collect, access, steal, or modify your information. Although we
        will do our best to protect your personal information, transmission of
        personal information to and from our Services is at your own risk. You
        should only access the Services within a secure environment.
      </div>
    </div>
    {/* 11. DO WE COLLECT INFORMATION FROM MINORS? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>8. Do we collect information from minors?</div>
      <div style={textStyle}>
        <em>We do not knowingly collect data from or market to children under 18 years of age.</em>
      </div>
      <div style={textStyle}>
        We do not knowingly collect, solicit data from, or market to children
        under 18 years of age, nor do we knowingly sell such personal
        information. By using the Services, you represent that you are at least 18
        or that you are the parent or guardian of such a minor and consent to
        such minor dependent’s use of the Services. If we learn that personal
        information from users less than 18 years of age has been collected, we
        will deactivate the account and take reasonable measures to promptly
        delete such data from our records. If you become aware of any data we
        may have collected from children under age 18, please contact us at
        austyn.beach@elevate9.io.
      </div>
    </div>
    {/* 12. WHAT ARE YOUR PRIVACY RIGHTS? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>9. What are your privacy rights?</div>
      <div style={textStyle}>
        <em>
          You may review, change, or terminate your account at any time,
          depending on your country, province, or state of residence.
        </em>
      </div>
      <div style={subheadingStyle}>Withdrawing your consent</div>
      <div style={textStyle}>
        If we are relying on your consent to process your personal information,
        you have the right to withdraw your consent at any time. You can withdraw
        your consent at any time by contacting us by using the contact details
        provided in the section "How can you contact us about this notice?"
        below.
      </div>
      <div style={subheadingStyle}>Opting out of marketing and promotional communications</div>
      <div style={textStyle}>
        You can unsubscribe from our marketing and promotional communications at
        any time by clicking on the unsubscribe link in the emails that we send,
        replying "STOP" or "UNSUBSCRIBE" to the SMS messages that we send, or by
        contacting us using the details provided in the section "How can you
        contact us about this notice?" below. You will then be removed from the
        marketing lists. However, we may still communicate with you — for
        example, to send you service-related messages that are necessary for the
        administration and use of your account, to respond to service requests, or
        for other non-marketing purposes.
      </div>
      <div style={textStyle}>
        No mobile information will be shared with third parties or affiliates for
        marketing or promotional purposes. Information sharing to subcontractors
        in support services, such as customer service, is permitted. All other
        use case categories exclude text messaging originator opt-in data and
        consent; this information will not be shared with third parties.
      </div>
      <div style={textStyle}>
        If you have questions or comments about your privacy rights, you may
        email us at info@elevate9.io.
      </div>
    </div>
    {/* 13. CONTROLS FOR DO-NOT-TRACK FEATURES */}
    <div style={sectionStyle}>
      <div style={headingStyle}>10. Controls for do-not-track features</div>
      <div style={textStyle}>
        Most web browsers and some mobile operating systems and mobile
        applications include a Do-Not-Track ("DNT") feature or setting you can
        activate to signal your privacy preference not to have data about your
        online browsing activities monitored and collected. At this stage, no
        uniform technology standard for recognizing and implementing DNT signals
        has been finalized. As such, we do not currently respond to DNT browser
        signals or any other mechanism that automatically communicates your choice
        not to be tracked online. If a standard for online tracking is adopted
        that we must follow in the future, we will inform you about that practice
        in a revised version of this Privacy Notice.
      </div>
      <div style={textStyle}>
        California law requires us to let you know how we respond to web browser
        DNT signals. Because there currently is not an industry or legal standard
        for recognizing or honoring DNT signals, we do not respond to them at
        this time.
      </div>
    </div>
    {/* 14. DO UNITED STATES RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>11. Do United States residents have specific privacy rights?</div>
      <div style={textStyle}>
        <em>
          If you are a resident of certain US states, you may have the right to
          request access to and receive details about the personal information we
          maintain about you and how we have processed it, correct inaccuracies,
          get a copy of, or delete your personal information. You may also have
          the right to withdraw your consent to our processing of your personal
          information. These rights may be limited in some circumstances by
          applicable law.
        </em>
      </div>
      <div style={subheadingStyle}>Categories of Personal Information We Collect</div>
      <ul>
        <li>Identifiers (e.g., name, address, email, IP address)</li>
        <li>Personal information as defined in the California Customer Records statute</li>
        <li>Protected classification characteristics under state or federal law</li>
        <li>Commercial information</li>
        <li>Biometric information (not collected)</li>
        <li>Internet or other similar network activity</li>
        <li>Geolocation data (not collected)</li>
        <li>Audio, electronic, sensory, or similar information (not collected)</li>
        <li>Professional or employment-related information (not collected)</li>
        <li>Education Information (not collected)</li>
        <li>Inferences drawn from collected personal information</li>
        <li>Sensitive personal Information (not collected)</li>
      </ul>
      <div style={subheadingStyle}>Your Rights</div>
      <ul>
        <li>Right to know whether or not we are processing your personal data</li>
        <li>Right to access your personal data</li>
        <li>Right to correct inaccuracies in your personal data</li>
        <li>Right to request the deletion of your personal data</li>
        <li>Right to obtain a copy of the personal data you previously shared with us</li>
        <li>Right to non-discrimination for exercising your rights</li>
        <li>Right to opt out of the processing of your personal data if it is used for targeted advertising, the sale of personal data, or profiling in furtherance of decisions that produce legal or similarly significant effects</li>
      </ul>
      <div style={subheadingStyle}>How to Exercise Your Rights</div>
      <div style={textStyle}>
        To exercise these rights, you can contact us by submitting a{" "}
        <a
          href="https://app.termly.io/notify/8183d57a-3ebf-4544-818f-5017da72398f"
          target="_blank"
          rel="noopener noreferrer"
        >
          data subject access request
        </a>
        , by emailing us at info@elevate9.io, or by referring to the contact
        details at the bottom of this document.
      </div>
      <div style={subheadingStyle}>Request Verification</div>
      <div style={textStyle}>
        Upon receiving your request, we will need to verify your identity to
        determine you are the same person about whom we have the information in
        our system. We will only use personal information provided in your
        request to verify your identity or authority to make the request.
      </div>
      <div style={subheadingStyle}>Appeals</div>
      <div style={textStyle}>
        Under certain US state data protection laws, if we decline to take action
        regarding your request, you may appeal our decision by emailing us at
        info@elevate9.io. We will inform you in writing of any action taken or
        not taken in response to the appeal, including a written explanation of
        the reasons for the decisions. If your appeal is denied, you may submit a
        complaint to your state attorney general.
      </div>
      <div style={subheadingStyle}>California "Shine The Light" Law</div>
      <div style={textStyle}>
        California Civil Code Section 1798.83, also known as the "Shine The
        Light" law, permits our users who are California residents to request
        and obtain from us, once a year and free of charge, information about
        categories of personal information (if any) we disclosed to third parties
        for direct marketing purposes and the names and addresses of all third
        parties with which we shared personal information in the immediately
        preceding calendar year. If you are a California resident and would like
        to make such a request, please submit your request in writing to us by
        using the contact details provided in the section "How can you contact
        us about this notice?"
      </div>
    </div>
    {/* 15. DO WE MAKE UPDATES TO THIS NOTICE? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>12. Do we make updates to this notice?</div>
      <div style={textStyle}>
        <em>Yes, we will update this notice as necessary to stay compliant with relevant laws.</em>
      </div>
      <div style={textStyle}>
        We may update this Privacy Notice from time to time. The updated version
        will be indicated by an updated "Revised" date at the top of this Privacy
        Notice. If we make material changes to this Privacy Notice, we may
        notify you either by prominently posting a notice of such changes or by
        directly sending you a notification. We encourage you to review this
        Privacy Notice frequently to be informed of how we are protecting your
        information.
      </div>
    </div>
    {/* 16. HOW CAN YOU CONTACT US ABOUT THIS NOTICE? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>13. How can you contact us about this notice?</div>
      <div style={textStyle}>
        If you have questions or comments about this notice, you may email us at{" "}
        <a href="mailto:austyn.beach@elevate9.io">austyn.beach@elevate9.io</a> or contact us by post at:
      </div>
      <div style={textStyle}><strong>Elevate9</strong></div>
      <div style={textStyle}>214 E Goode St</div>
      <div style={textStyle}>Quitman, TX 75783</div>
      <div style={textStyle}>United States</div>
    </div>
    {/* 17. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU? */}
    <div style={sectionStyle}>
      <div style={headingStyle}>14. How can you review, update, or delete the data we collect from you?</div>
      <div style={textStyle}>
        Based on the applicable laws of your country or state of residence in
        the US, you may have the right to request access to the personal
        information we collect from you, details about how we have processed it,
        correct inaccuracies, or delete your personal information. You may also
        have the right to withdraw your consent to our processing of your
        personal information. These rights may be limited in some circumstances
        by applicable law. To request to review, update, or delete your personal
        information, please fill out and submit a{" "}
        <a
          href="https://app.termly.io/notify/8183d57a-3ebf-4544-818f-5017da72398f"
          target="_blank"
          rel="noopener noreferrer"
        >
          data subject access request
        </a>
        .
      </div>
    </div>
  </div>
);

export default PrivacyPolicy;
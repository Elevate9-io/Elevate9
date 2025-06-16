import React from "react";

const sectionStyle = {
  margin: "2rem 0 1.5rem 0",
  padding: "0 0 0.5rem 0",
  borderBottom: "1px solid #eee"
};
const textStyle = {
  margin: "0.5rem 0",
  color: "#fff"
};

const PrivacyIntro = () => (
  <div style={sectionStyle}>
    <div style={textStyle}>
      This Privacy Notice for Elevate9 ("we", "us", or "our") describes how and
      why we might access, collect, store, use, and/or share ("process") your
      personal information when you use our services ("Services"), including
      when you:
    </div>
    <ul>
      <li>
        Visit our website at{' '}
        <a
          href="https://elevate9.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://elevate9.io/
        </a>{' '}
        or any website of ours that links to this Privacy Notice
      </li>
      <li>Use our services, products, or features</li>
      <li>Engage with us in other related ways, including any sales, marketing, or events</li>
    </ul>
    <div style={textStyle}>
      <strong>Questions or concerns?</strong> Reading this Privacy Notice will
      help you understand your privacy rights and choices. If you do not agree
      with our policies and practices, please do not use our Services. If you
      still have any questions or concerns, please contact us at
      info@elevate9.io.
    </div>
  </div>
);

export default PrivacyIntro;

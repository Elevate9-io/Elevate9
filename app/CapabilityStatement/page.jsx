export const metadata = {
  title: 'Capability Statement',
  description: 'View the Elevate9 Capability Statement PDF.'
};

export default function CapabilityStatementPage() {
  return (
    <main style={{ minHeight: '100vh', background: '#111', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
      <h1 style={{ color: '#fff', fontSize: 32, marginBottom: 24 }}>Capability Statement</h1>
      <object
        data="/Capability%20Statement%20-%20Design.pdf"
        type="application/pdf"
        width="100%"
        height="800px"
        style={{ maxWidth: 900, width: '100%', border: '1px solid #333', background: '#fff' }}
      >
        <p style={{ color: '#fff' }}>
          This browser does not support PDFs. Please download the PDF to view it: <a href="/Capability%20Statement%20-%20Design.pdf" style={{ color: '#2bdcd2' }}>Download PDF</a>.
        </p>
      </object>
    </main>
  );
}

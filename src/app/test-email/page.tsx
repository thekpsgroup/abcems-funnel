'use client';

import { useState } from 'react';

export default function TestEmailPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const sendTestEmail = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch('/api/test-email', {
        method: 'POST',
      });

      const data = await response.json();

      if (response.ok) {
        setResult(`✅ ${data.message} (ID: ${data.messageId})`);
      } else {
        setResult(`❌ Error: ${data.error}`);
      }
    } catch (error) {
      setResult(`❌ Network error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[#8B0000] mb-6">Test Email Integration</h1>
        
        <div className="mb-6">
          <p className="text-gray-600 mb-4">
            This will send a test email using Resend to verify the email integration is working.
          </p>
          <p className="text-sm text-gray-500">
            Note: Update the email address in the API route before testing.
          </p>
        </div>

        <button
          onClick={sendTestEmail}
          disabled={loading}
          className="w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#A52A2A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? 'Sending...' : 'Send Test Email'}
        </button>

        {result && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm">{result}</p>
          </div>
        )}

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <h3 className="font-semibold text-blue-800 mb-2">Setup Instructions:</h3>
          <ol className="text-sm text-blue-700 space-y-1">
            <li>1. Update your .env file with the Resend API key</li>
            <li>2. Edit the test email address in /api/test-email/route.ts</li>
            <li>3. Verify your domain in Resend dashboard</li>
            <li>4. Test the email functionality</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

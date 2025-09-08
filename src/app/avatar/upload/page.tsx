'use client';

import type { PutBlobResult } from '@vercel/blob';
import { useState, useRef } from 'react';

export default function AvatarUploadPage() {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-[#8B0000] mb-6">Upload Your Avatar</h1>

        <form
          onSubmit={async (event) => {
            event.preventDefault();

            if (!inputFileRef.current?.files) {
              throw new Error("No file selected");
            }

            const file = inputFileRef.current.files[0];

            const response = await fetch(
              `/api/avatar/upload?filename=${file.name}`,
              {
                method: 'POST',
                body: file,
              },
            );

            const newBlob = (await response.json()) as PutBlobResult;

            setBlob(newBlob);
          }}
        >
          <div className="mb-4">
            <input 
              name="file" 
              ref={inputFileRef} 
              type="file" 
              accept="image/jpeg, image/png, image/webp" 
              required 
              className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#8B0000] file:text-white hover:file:bg-[#A52A2A]"
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-[#8B0000] text-white py-2 px-4 rounded-lg font-semibold hover:bg-[#A52A2A] transition-colors"
          >
            Upload
          </button>
        </form>
        
        {blob && (
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <h3 className="font-semibold text-[#8B0000] mb-2">Upload Successful!</h3>
            <p className="text-sm text-gray-600 mb-2">Blob URL:</p>
            <a 
              href={blob.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 break-all"
            >
              {blob.url}
            </a>
            {blob.url && (
              <div className="mt-4">
                <img 
                  src={blob.url} 
                  alt="Uploaded avatar" 
                  className="max-w-full h-auto rounded-lg"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

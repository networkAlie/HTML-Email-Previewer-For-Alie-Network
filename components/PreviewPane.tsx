import React, { useState } from 'react';

interface PreviewPaneProps {
    recipients: string;
    subject: string;
    htmlContent: string;
}

const PreviewPane: React.FC<PreviewPaneProps> = ({ recipients, subject, htmlContent }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopyDetails = async () => {
        if (!recipients && !subject) return;
        const textToCopy = `To: ${recipients}\nSubject: ${subject}`;
        
        try {
            await navigator.clipboard.writeText(textToCopy);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy details: ', err);
            alert('Could not copy details to clipboard.');
        }
    };

    const showDetails = recipients || subject;

    return (
        <div className="flex flex-col h-full bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
            <div className="p-3 border-b border-gray-700 flex-shrink-0">
                <h2 className="text-lg font-semibold text-gray-300">Live Preview</h2>
            </div>

            {showDetails && (
                 <div className="p-4 border-b border-gray-700 bg-gray-800/50">
                    <div className="flex justify-between items-center mb-3">
                        <h3 className="text-md font-medium text-gray-300">Email Details</h3>
                        <button
                            onClick={handleCopyDetails}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                                isCopied
                                    ? 'bg-green-600 text-white focus:ring-green-500'
                                    : 'bg-cyan-600 text-white hover:bg-cyan-500 focus:ring-cyan-500'
                            }`}
                            aria-label={isCopied ? 'Details copied to clipboard' : 'Copy email details to clipboard'}
                        >
                            {isCopied ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            )}
                            {isCopied ? 'Copied!' : 'Copy Info'}
                        </button>
                    </div>
                    <div className="space-y-2">
                        {recipients && (
                             <div className="grid grid-cols-[auto,1fr] items-start gap-x-2">
                                <span className="text-sm font-semibold text-gray-400 pt-1.5">To:</span>
                                <p className="text-sm text-gray-200 font-mono bg-gray-900 p-1.5 rounded-md border border-gray-700 whitespace-pre-wrap break-all">{recipients}</p>
                            </div>
                        )}
                        {subject && (
                           <div className="grid grid-cols-[auto,1fr] items-start gap-x-2">
                                <span className="text-sm font-semibold text-gray-400 pt-1.5">Subject:</span>
                                <p className="text-sm text-gray-200 font-mono bg-gray-900 p-1.5 rounded-md border border-gray-700 whitespace-pre-wrap break-all">{subject}</p>
                            </div>
                        )}
                    </div>
                </div>
            )}
            
            <div className="flex-grow bg-white rounded-b-lg p-2">
                {htmlContent ? (
                    <iframe
                        srcDoc={htmlContent}
                        title="Email Preview"
                        sandbox="allow-scripts"
                        className="w-full h-full border-0"
                    />
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        <p>Preview will appear here when you provide HTML code.</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PreviewPane;

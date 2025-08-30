import React, { useState } from 'react';

interface EditorProps {
    value: string;
    onChange: (value: string) => void;
    onPreview: () => void;
    onClear: () => void;
}

const Editor: React.FC<EditorProps> = ({ value, onChange, onPreview, onClear }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        if (!value) return;
        try {
            await navigator.clipboard.writeText(value);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy text: ', err);
            alert('Could not copy text to clipboard.');
        }
    };

    return (
        <div className="flex flex-col h-full bg-gray-800 rounded-lg border border-gray-700 shadow-xl">
            <div className="flex items-center justify-between p-3 border-b border-gray-700 flex-shrink-0">
                <h2 className="text-lg font-semibold text-gray-300">HTML Code</h2>
                <div className="flex items-center gap-2">
                    <button
                        onClick={onPreview}
                        className="flex items-center gap-2 px-3 py-1.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-blue-500 transition-colors"
                        aria-label="Preview HTML"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        Preview
                    </button>
                    <button
                        onClick={handleCopy}
                        className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 ${
                            isCopied
                                ? 'bg-green-600 text-white focus:ring-green-500'
                                : 'bg-cyan-600 text-white hover:bg-cyan-500 focus:ring-cyan-500'
                        }`}
                        aria-label={isCopied ? 'HTML copied to clipboard' : 'Copy HTML to clipboard'}
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
                        {isCopied ? 'Copied!' : 'Copy'}
                    </button>
                    <button
                        onClick={onClear}
                        className="p-1.5 text-gray-400 hover:text-red-400 hover:bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-500 transition-colors"
                        title="Clear All Fields"
                        aria-label="Clear all input fields"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>
            </div>
            <div className="flex-grow p-1">
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder="Paste your email HTML here... (include RECIPIENTS and SUBJECT comments to auto-fill)"
                    className="w-full h-full p-3 bg-gray-900 text-gray-300 font-mono text-sm resize-none rounded-b-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500"
                    spellCheck="false"
                    aria-label="HTML Code Editor"
                />
            </div>
        </div>
    );
};

export default Editor;

import React, { useState } from 'react';

interface InputWithCopyProps {
    id: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    placeholder: string;
    isTextarea?: boolean;
}

const InputWithCopy: React.FC<InputWithCopyProps> = ({ id, label, value, onChange, placeholder, isTextarea = false }) => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = async () => {
        if (!value) return;
        try {
            await navigator.clipboard.writeText(value);
            setIsCopied(true);
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
            console.error(`Failed to copy ${label}: `, err);
            alert(`Could not copy ${label} to clipboard.`);
        }
    };
    
    const commonInputClasses = "w-full p-2 pr-10 bg-gray-900 text-gray-300 text-sm rounded-md border border-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500";

    return (
        <div className="flex flex-col gap-1.5 w-full">
            <label htmlFor={id} className="text-sm font-medium text-gray-400">{label}</label>
            <div className="relative w-full">
                {isTextarea ? (
                     <textarea
                        id={id}
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={`${commonInputClasses} resize-none`}
                        rows={3}
                        spellCheck="false"
                    />
                ) : (
                    <input
                        id={id}
                        type="text"
                        value={value}
                        onChange={onChange}
                        placeholder={placeholder}
                        className={commonInputClasses}
                    />
                )}
                <button
                    onClick={handleCopy}
                    className={`absolute top-1/2 right-1.5 -translate-y-1/2 p-1 rounded-md transition-colors ${
                        isCopied
                            ? 'text-green-400'
                            : 'text-gray-400 hover:bg-gray-700 hover:text-cyan-400'
                    }`}
                    title={isCopied ? `${label} Copied!` : `Copy ${label}`}
                    aria-label={isCopied ? `${label} copied to clipboard` : `Copy ${label} to clipboard`}
                >
                    {isCopied ? (
                         <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                         </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
};

export default InputWithCopy;


import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="flex-shrink-0 bg-gray-800/50 p-4 border-b border-gray-700 shadow-md">
            <h1 className="text-2xl font-bold text-cyan-400">HTML Email Previewer</h1>
            <p className="text-sm text-gray-400">Paste your HTML code, preview it live, and copy it for your campaign.</p>
        </header>
    );
};

export default Header;

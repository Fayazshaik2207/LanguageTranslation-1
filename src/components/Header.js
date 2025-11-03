import React, { useState } from "react";

export default function Header({ onLanguageChange }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    const languages = [
        { code: "en", name: "English" },
        { code: "fr", name: "French" },
        { code: "es", name: "Spanish" },
        { code: "de", name: "German" },
        { code: "it", name: "Italian" },
        { code: "pt", name: "Portuguese" },
        { code: "ja", name: "Japanese" },
        { code: "zh", name: "Chinese" },
        { code: "ru", name: "Russian" },
    ];

    const handleSearch = (e) => {
        e.preventDefault();
        alert(`You searched for: "${searchTerm}"`);
    };

    return (
        <header className="header">
            <div className="logo">
                🌍 <strong>My Translate App</strong>
            </div>

            <nav className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>

                <form className="search-form" onSubmit={handleSearch}>
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button type="submit">🔍</button>
                </form>

                <div className="language-section">
                    <button
                        className="lang-btn"
                        onClick={() => setShowDropdown(!showDropdown)}
                    >
                        🌐 Language
                    </button>

                    {showDropdown && (
                        <ul className="language-dropdown">
                            {languages.map((lang) => (
                                <li
                                    key={lang.code}
                                    onClick={() => {
                                        onLanguageChange(lang.code);
                                        setShowDropdown(false);
                                    }}
                                >
                                    {lang.name}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </nav>
        </header>
    );
}

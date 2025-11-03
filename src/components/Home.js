import React, { useEffect, useState } from "react";
import { translateText } from "../services/translateService";

export default function Home({ language }) {
    const [translated, setTranslated] = useState("Welcome to the Home Page!");

    useEffect(() => {
        const fetchTranslation = async () => {
            const result = await translateText("Welcome to the Home Page!", language);
            setTranslated(result);
        };
        fetchTranslation();
    }, [language]);

    return (
        <div className="content">
            <h3>{translated}</h3>
            <p>This is your practice React app with live translations!</p>
        </div>
    );
}

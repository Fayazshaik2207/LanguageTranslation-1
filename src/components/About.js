import React, { useEffect, useState } from "react";
import { translateText } from "../services/translateService";

export default function About({ language }) {
    const [translated, setTranslated] = useState("About this Application");

    useEffect(() => {
        const fetchTranslation = async () => {
            const result = await translateText("About this Application", language);
            setTranslated(result);
        };
        fetchTranslation();
    }, [language]);

    return (
        <div className="content">
            <h3>{translated}</h3>
            <p>This app demonstrates dynamic translation using the DeepL API.</p>
        </div>
    );
}

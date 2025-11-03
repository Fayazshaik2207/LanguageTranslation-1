export async function translateText(text, targetLang) {
    
    const apiKey = "d903e1a4-d8f7-4377-a5bb-b3e24f8ac13d:fx"; // DeepL key
    const proxyUrl = "https://cors-anywhere.herokuapp.com/"; // enable at /corsdemo
    const deeplUrl = "https://api-free.deepl.com/v2/translate";

    // Supported language mapping
    const languageMap = {
        en: "EN",
        fr: "FR",
        es: "ES",
        de: "DE",
        it: "IT",
        pt: "PT-BR",
        ja: "JA",
        zh: "ZH",
        ru: "RU",
        ko: "KO",
        ar: "AR",
        nl: "NL",
        pl: "PL",
        tr: "TR"
    };

    // Check if language is supported
    if (!languageMap[targetLang]) {
        console.warn(`⚠️ Language "${targetLang}" not supported by DeepL Free.`);
        return text;
    }

    try {
        const res = await fetch(proxyUrl + deeplUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: new URLSearchParams({
                auth_key: apiKey,
                text: text,
                target_lang: languageMap[targetLang],
            }),
        });

        const data = await res.json();

        if (data.translations && data.translations.length > 0) {
            return data.translations[0].text;
        } else {
            console.error("Translation failed:", data);
            return text;
        }
    } catch (error) {
        console.error("Translation failed:", error);
        return text;
    }
}


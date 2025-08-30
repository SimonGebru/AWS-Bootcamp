export const handler = async (event) => {
    console.log("Event:", event);
  
    
    const jokes = {
      dad: [
        "Varför kan inte ett skelett ljuga? – För man ser rakt igenom det.",
        "Jag sa till min fru att hon borde träna utfall. – Det skulle vara ett stort steg framåt.",
        "Vad kallar man ost som inte är din? – Nacho ost."
      ],
      programming: [
        "Varför gillar programmerare mörker? – För ljus drar till sig buggar.",
        "Hur tröstar man en JavaScript-bugg? – Man console.log:gar den.",
        "Varför gick utvecklaren i konkurs? – Han använde alltid gratis trial-versioner."
      ],
      dark: [
        "Vad sa graven till den stressade? – Lugn, du kommer snart hit.",
        "Jag försökte fånga dimman imorse. – Jag miss-tade.",
        "Vad är skillnaden mellan en skämtare och en vampyr? – Vampyren suger bara på nätterna."
      ],
      animal: [
        "Vad kallar man en kanin med en kexchoklad? – Smaskhare.",
        "Varför gick katten med på festen? – För att det var en katt-astrof annars.",
        "Vad säger korna i fjällen? – Muuu på toppen!"
      ]
    };
  
    
    const fullPath = event?.rawPath ?? event?.path ?? "/";
    const route = fullPath.replace(/^\/+/, "");
  
    let message;
  
    if (route === "random") {
    
      const categories = Object.keys(jokes);
      const randomCategory =
        categories[Math.floor(Math.random() * categories.length)];
      
      const randomJoke =
        jokes[randomCategory][
          Math.floor(Math.random() * jokes[randomCategory].length)
        ];
      message = `(${randomCategory.toUpperCase()}) ${randomJoke}`;
    } else if (jokes[route]) {
    
      const randomJoke =
        jokes[route][Math.floor(Math.random() * jokes[route].length)];
      message = randomJoke;
    } else if (route === "") {
      
      message =
        "Välkommen till skämtservern! Prova /dad, /programming, /dark, /animal eller /random.";
    } else {
      message = "Okänd route. Prova /dad, /programming, /dark, /animal eller /random.";
    }
  
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      body: message,
    };
  };

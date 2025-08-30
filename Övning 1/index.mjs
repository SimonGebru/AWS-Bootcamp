export const handler = async (event) => {
    console.log("Event: ", event);
    console.log("Funktionen kördes utan problem!");
    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
        body: "Hejsan hallå, din fucker!",
    };
}; 
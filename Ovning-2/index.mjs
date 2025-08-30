export const handler = async (event) => {
    console.log("Event: ", event);
    
    const path = event.rawPath;

    const route = path.startsWith("/") ? path.slice(1) : path;

    return {
        statusCode: 200,
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
        body: route || "ingen route angiven",
    };
};
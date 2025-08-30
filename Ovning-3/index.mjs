export const handler = async (event) => {
    console.log("Event: ", event);
   
    const  fullPath = event?.rawPath ?? event?.path ?? "/";
    const route = fullPath.replace(/^\/+/, "");

    let message;
    if (route === "cat") {
        message = "Mjau!";
    } else if (route === "dog") {
        message = "Voff!";
    } else if (route === "cow") {
        message = "Muu!";
    } else if (route === "") {
        message = "Welcome to the animal sound server! Testa /cat, /dog, or /cow.";
    } else {
        message = "Okänd route";
    }

    return {
        statusCode: 200,
        headers: { "Content-Type": "text/plain; charset=utf-8" },
        body: message,
    };
};
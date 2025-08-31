export const handler = async (event) => {
    console.log("Event:", event);
  
    const method =
      event?.requestContext?.http?.method ?? 
      event?.httpMethod ??                   
      "UNKNOWN";
  
    if (method === "PUT") {
      return {
        statusCode: 200,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "Welcome!" }),
      };
    }
  
    return {
      statusCode: 405,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Method not allowed." }),
    };
  };
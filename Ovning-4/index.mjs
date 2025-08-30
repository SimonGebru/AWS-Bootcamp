export const handler = async (event) => {
    console.log("Event:", event);
  
    
    const method =
      event?.requestContext?.http?.method ?? 
      event?.httpMethod ??                   
      "UNKNOWN";                             
  
    
    return {
      statusCode: 200,
      headers: { "Content-Type": "text/plain; charset=utf-8" },
      body: method,
    };
  };
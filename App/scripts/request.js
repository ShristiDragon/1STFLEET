export function request(url, method = "GET", data = {}) {
  switch (method) {
    case "GET":
      return handleGetRequest(url);
    case "POST":
      return handlePostRequest(url, data);
    default:
      console.log("Invalid method");
      return Promise.reject("Invalid method");
  }
}

async function handleGetRequest(url) {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Failed to fetch' };
  }
}

async function handlePostRequest(url, data) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    });
    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error:', error);
    return { error: 'Failed to fetch' };
  }
}

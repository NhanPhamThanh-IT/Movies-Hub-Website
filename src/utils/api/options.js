// Desc: Define the options for making a request to the API

// Define get request options

// Define the getOption object with the necessary headers
export const getOption = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
    }
};

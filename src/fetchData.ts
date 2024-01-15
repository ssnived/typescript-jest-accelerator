// sample api call
export const fetchData = async () => {
  const response = await fetch("https://api.example.com/data");
  const data = await response.json();
  console.log("Response Payload:", data);
  return data;
};

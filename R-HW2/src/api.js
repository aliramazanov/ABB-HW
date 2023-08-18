export const fetchData = async () => {
  try {
    const response = await fetch("/data/data.JSON");
    if (!response.ok) {
      throw new Error("Something went wrong...");
    }
    return await response.json();
  } catch (error) {
    throw new Error("Error when fetching: " + error);
  }
};


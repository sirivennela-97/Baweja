const apiKey = "ebeed3cd506d4919b21dea0a5615b91a "; //  API key

export const getNews = async () => {
  try {
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`
    );
    const data = await response.json();
    console.log(data.articles);
    return data.articles;
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

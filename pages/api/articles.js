// pages/api/articles.js

export default async function handler(req, res) {
    const response = await fetch('https://curius.app/api/users/1856/links?page=0');
    const data = await response.json();
  
    // Check if the external API call was successful
    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ message: 'Failed to fetch articles' });
    }
  }
  
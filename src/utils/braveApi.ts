import axios from 'axios';

const BRAVE_API_KEY = 'BSA0JI29ViEPwJDE_TPxKlfx6tpx2Cu';
const BRAVE_API_ENDPOINT = 'https://api.search.brave.com/res/v1/web/search';

interface BraveSearchResponse {
  web: {
    results: Array<{
      title: string;
      description: string;
      url: string;
    }>;
  };
}

export const searchWithBrave = async (query: string) => {
  try {
    const response = await axios.get<BraveSearchResponse>(BRAVE_API_ENDPOINT, {
      headers: {
        'Accept': 'application/json',
        'X-Subscription-Token': BRAVE_API_KEY
      },
      params: {
        q: query,
        search_lang: 'en'
      }
    });

    return response.data.web.results;
  } catch (error) {
    console.error('Error searching with Brave:', error);
    throw error;
  }
};

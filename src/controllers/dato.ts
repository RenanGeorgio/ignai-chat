const API_URL = 'https://graphql.datocms.com/';

async function fetchCmsAPI(query: string, { variables }: { variables?: Record<string, any> } = {}) {
  if (!process.env.REACT_APP_DATOCMS_READ_ONLY_API_TOKEN) {
    throw new Error('Token de API do DatoCMS ausente');
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.REACT_APP_DATOCMS_READ_ONLY_API_TOKEN}`,
    },
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  if (!res.ok) {
    console.error("Erro na resposta da API:", res.status, res.statusText);
    throw new Error(`Erro na API: ${res.status} ${res.statusText}`);
  }

  const json = await res.json();
  if (json.errors) {
    console.error("Erros da API:", json.errors);
    throw new Error('Erro ao buscar dados da API');
  }

  return json.data;
}

export async function getQuestions() {
  const data = await fetchCmsAPI(`
    {
      allQuestions {
        id
        name
      }
    }
  `);
  return data?.allQuestions || [];
}

export default fetchCmsAPI;

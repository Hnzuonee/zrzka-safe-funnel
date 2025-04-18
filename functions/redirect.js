exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  return {
    statusCode: 302,
    headers: {
      Location: 'https://onlyfans.com/terezaosladilova/c10',
      'Cache-Control': 'no-cache'
    },
    body: ''
  };
};

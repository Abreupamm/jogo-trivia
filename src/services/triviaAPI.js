const fetchTriviaToken = async () => {
  const ENDPOINT_URL = 'https://opentdb.com/api_token.php?command=request';

  try {
    const response = await fetch(ENDPOINT_URL);
    return response.json();
  } catch (error) {
    return error;
  }
};

const fetchTriviaQuestions = async (amount, token) => {
  const ENDPOINT_URL = `https://opentdb.com/api.php?amount=${amount}&token=${token}`;

  try {
    const response = await fetch(ENDPOINT_URL);
    return response.json();
  } catch (error) {
    return error;
  }
};

export { fetchTriviaToken, fetchTriviaQuestions };

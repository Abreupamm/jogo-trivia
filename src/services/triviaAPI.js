const fetchTriviaToken = async () => {
  const ENDPOINT_URL = 'https://opentdb.com/api_token.php?command=request';

  try {
    const response = await fetch(ENDPOINT_URL);
    return response.json();
  } catch (error) {
    return error;
  }
};

const fetchTriviaQuestions = async (token) => {
  const questionsAmount = 5;
  const ENDPOINT_URL = `https://opentdb.com/api.php?amount=${questionsAmount}&token=${token}`;

  try {
    const response = await fetch(ENDPOINT_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
};

export { fetchTriviaToken, fetchTriviaQuestions };

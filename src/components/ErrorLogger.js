import { useEffect } from 'react';

function ErrorLogger({ error }) {
  useEffect(() => {
    if (error) {
      console.error('Error:', error);
      fetch('http://localhost:3000/log', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    body: JSON.stringify({ error }),
  });
}
  }, [error]);

  return null;
}

export default ErrorLogger;

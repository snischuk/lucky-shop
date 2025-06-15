import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

const MOCK_MODE = false; // Включить мок для локальной разработки

export const useSubscription = () => {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const mockFetch = () =>
    new Promise<{ ok: boolean }>((resolve) =>
      setTimeout(() => resolve({ ok: true }), 1500),
    );

  const subscribe = async (email: string) => {
    setStatus('loading');
    setMessage('');

    try {
      if (MOCK_MODE) {
        const mockResponse = await mockFetch();
        console.log('Mocked response:', mockResponse);

        setStatus('success');
        setMessage('Дякуємо за підписку!');
        return;
      }

      const response = await fetch(
        'https://gw-retail.duckdns.org/api/notification/sub',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email }),
        },
      );

      console.log('RAW response:', response);

      // const data = await response.json();
      // console.log('Parsed JSON:', data);
      const text = await response.text();

      console.log('Raw text body:', text);

      if (text) {
        try {
          const data = JSON.parse(text);
          console.log('Parsed JSON:', data);
        } catch (e) {
          console.warn('Не вдалося розпарсити JSON:', e);
        }
      } else {
        console.log('Тіло відповіді порожнє (empty body)');
      }

      if (!response.ok) throw new Error('Помилка при підписці');

      setStatus('success');
      setMessage('Дякуємо за підписку!');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Сталася помилка.');
    }
  };

  const unsubscribe = async (email: string) => {
    setStatus('loading');
    setMessage('');
    try {
      const response = MOCK_MODE
        ? await mockFetch()
        : await fetch('https://gw-retail.duckdns.org/api/notification/unsub', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email }),
          });

      if (!response.ok) throw new Error('Помилка при відписці');

      setStatus('success');
      setMessage('Ви відписались.');
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      setStatus('error');
      setMessage(error.message || 'Сталася помилка.');
    }
  };

  return { status, message, subscribe, unsubscribe };
};

import { useState } from 'react';
import api from '../api/api';

export default function EchoInput() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post('/echo_user_input', { user_input: input });
      setResponse(res.data.message);
    } catch (err) {
      alert('Failed to submit');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Say something..." />
        <button type="submit">Submit</button>
      </form>
      {response && <p>{response}</p>}
    </div>
  );
}
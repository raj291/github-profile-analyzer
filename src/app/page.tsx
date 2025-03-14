'use client';
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleSubmit = (e : React.FormEvent) => {
    e.preventDefault();

    router.push(`/profile/${username}`);
  }
  return (
    <div style={{textAlign:'center', marginTop:'2rem'}}>
      <h1>GitHub Profile Analyzer</h1>
      <form onSubmit={handleSubmit}>
        <input type="text"
         placeholder="Enter your UserName"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required style={{ padding: '0.5rem', fontSize: '1rem' }}/>
          <button type="submit" style={{ marginLeft: '1rem', padding: '0.5rem 1rem' }}>
          Search
        </button>
      </form>
    </div>
  );
}

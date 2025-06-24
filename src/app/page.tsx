// Adds text prompts and VoterTable to page.

import VoterTable from './components/VoterTable';
import './css/styles.css'
const LOCAL_API = 'http://localhost:3000/api/sample_api';

export default async function Page() {
  const response = await fetch(LOCAL_API);
  const data = await response.json();
  const voters = Array.isArray(data) ? data : data.rows || [];

  return (
    <main style={{ padding: '2rem' }}>
      <h1 >Voter Registration Deadlines</h1>
      <VoterTable initialData={voters} />
    </main>
  );
}

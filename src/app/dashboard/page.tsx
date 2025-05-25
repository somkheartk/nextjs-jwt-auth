import { getUserFromToken } from '@/app/lib/auth'; // Adjust the import path as necessary
import { redirect } from 'next/navigation';

export default async function DashboardPage() {
  const user = await getUserFromToken(); // Replace with actual token retrieval logic

  if (!user) {
    redirect('/login');
    return null; // Ensure no further rendering happens
  }

  return (
    <div>
      <h1>Welcome, {user.username}</h1>
      <form action="/api/logout" method="POST">
        <button type="submit">Logout</button>
      </form>
    </div>
  );
}

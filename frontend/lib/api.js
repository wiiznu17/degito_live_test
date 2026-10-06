const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export async function getFoods() {
  const res = await fetch(`${API_URL}/api/foods`, { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error(`Failed to fetch foods: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

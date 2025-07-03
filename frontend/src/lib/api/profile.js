export async function fetchProfile() {
  let access = localStorage.getItem('access');
  const refresh = localStorage.getItem('refresh');

  // Try initial fetch
  let res = await fetch('http://localhost:8000/api/user/profile/', {
    headers: { Authorization: `Bearer ${access}` },
  });

  console.log('Initial fetch response:', res);
  if (res.status === 401 && refresh) {
    // Refresh token
    const refreshRes = await fetch('http://localhost:8000/api/user/token/refresh/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ refresh }),
    });
    const refreshData = await refreshRes.json();

    if (refreshRes.ok) {
      localStorage.setItem('access', refreshData.access);

      // Retry request
      res = await fetch('http://localhost:8000/api/user/profile/', {
        headers: { Authorization: `Bearer ${refreshData.access}` },
      });
    } else {
      throw new Error('Session expired, please login again.');
    }
  }

  if (!res.ok) {
    throw new Error('Failed to fetch profile');
  }

  return await res.json();
}

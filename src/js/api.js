const baseUrl = 'https://api.github.com';

export async function fetchGitHubUser(username) {
  const res = await fetch(`${baseUrl}/users/${encodeURIComponent(username)}`);
  if (res.status === 404) throw new Error('not_found');
  if (!res.ok) throw new Error('request_error');
  return res.json();
}

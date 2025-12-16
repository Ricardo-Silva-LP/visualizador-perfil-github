const baseUrl = 'https://api.github.com';

export async function fetchGitHubUser(username) {
  const res = await fetch(`${baseUrl}/users/${encodeURIComponent(username)}`);
  if (res.status === 404) throw new Error('not_found');
  if (!res.ok) throw new Error('request_error');
  return res.json();
}

export async function fetchGitHubUserRepos(username) {    
  const response = await fetch(`${baseUrl}/users/${encodeURIComponent(username)}/repos?sort=created&per_page=10`);

  
  if (response.status === 404) throw new Error('not_found');
  if (!response.ok) throw new Error('request_error');
  return response.json();
}

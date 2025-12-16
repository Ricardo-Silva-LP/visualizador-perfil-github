export function showLoading(container) {
  if (container) container.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearResults(container) {
  if (container) container.innerHTML = '';
}

export function renderProfile(container, data, repos = [], userName) {
  if (!container) return;

  const reposHtml = Array.isArray(repos) && repos.length
    ? `
      <div class="repos-section">
        <h3>Últimos repositórios</h3>
        <ul class="repo-list">
          ${repos.map(r => `
            <li class="repo-item">
              <a href="${r.html_url}" target="_blank" rel="noopener noreferrer">${r.name}</a>
              <p class="repo-desc">${r.description || ''}</p>
              <div class="repo-stats">
                <span>⭐ Stars: ${r.stargazers_count}</span>
                <span>🍴 Forks: ${r.forks_count}</span>
                ${r.language ? `<span> 💻Language: ${r.language}</span>` : ''}
                <span> 👀 Watchers: ${r.watchers_count}</span>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>
    `
    : `<p class="no-repos">Sem repositórios públicos.</p>`;

  container.innerHTML = `
    <div class="profile-card">
      <img src="${data.avatar_url}" alt="Avatar de ${data.name || userName}" class="profile-avatar">
      <div class="profile-info">
        <h2>${data.name || userName}</h2>
        <p>${data.bio || 'Não possui bio cadastrada 😢.'}</p>
      </div>
    </div>

    <div class="profile-counters">
      <div class="followers"> 
        <h4>🤵‍♂️Seguidores</h4>
        <span>${data.followers}</span>
      </div>
      <div class="following">
        <h4>🤵‍♂️ Seguindo</h4>
        <span>${data.following}</span>
      </div>
    </div>

    ${reposHtml}
  `;
}

export function showAlert(message) {
  alert(message);
}

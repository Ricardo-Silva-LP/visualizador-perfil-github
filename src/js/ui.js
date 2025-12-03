export function showLoading(container) {
  if (container) container.innerHTML = '<p class="loading">Carregando...</p>';
}

export function clearResults(container) {
  if (container) container.innerHTML = '';
}

export function renderProfile(container, data, userName) {
  if (!container) return;
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
    </div>`;
}

export function showAlert(message) {
  alert(message);
}

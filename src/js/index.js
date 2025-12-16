import { fetchGitHubUser, fetchGitHubUserRepos } from './api.js';
import { showLoading, clearResults, renderProfile, showAlert } from './ui.js';

const input = document.getElementById('input-search');
const btn = document.getElementById('btn-search');
const profileResults = document.querySelector('.profile-results');

async function handleSearch() {
    const userName = input ? input.value.trim() : '';
    if (!userName) return showAlert('Por favor, digite um nome de usuário do GitHub.');

    showLoading(profileResults);

    try {
        const data = await fetchGitHubUser(userName);
        const repos = await fetchGitHubUserRepos(userName);
        renderProfile(profileResults, data, repos, userName);
    } catch (err) {
        if (err && err.message === 'not_found') {
            showAlert('Usuário não encontrado! Por favor, verifique o nome digitado.');
        } else {
            console.error('Erro ao buscar o usuário:', err);
            showAlert('Ocorreu um erro ao buscar o usuário. Tente novamente mais tarde.');
        }
        clearResults(profileResults);
    }
}

if (btn) btn.addEventListener('click', handleSearch);
if (input) input.addEventListener('keydown', (e) => {
    const isEnter = e.key === 'Enter' || e.code === 'Enter' || e.keyCode === 13;
    if (isEnter) { e.preventDefault(); handleSearch(); }
});

function navigation() {
  const buttonHome = document.querySelector('[data-nav=home]');
  const buttonBookmarks = document.querySelector('[data-nav=bookmarks]');
  const buttonCreate = document.querySelector('[data-nav=create]');
  const buttonProfile = document.querySelector('[data-nav=profile]');

  const pageHome = document.querySelector('[data-page=home]');
  const pageBookmarks = document.querySelector('[data-page=bookmarks]');
  const pageCreate = document.querySelector('[data-page=create]');
  const pageProfile = document.querySelector('[data-page=profile]');

  buttonHome.addEventListener('click', () => {
    pageHome.classList.remove('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.add('active', 'navigation__highlighted');
    buttonBookmarks.classList.remove('active', 'navigation__highlighted');
    buttonCreate.classList.remove('active', 'navigation__highlighted');
    buttonProfile.classList.remove('active', 'navigation__highlighted');
  });

  buttonBookmarks.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.remove('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('active', 'navigation__highlighted');
    buttonBookmarks.classList.add('active', 'navigation__highlighted');
    buttonCreate.classList.remove('active', 'navigation__highlighted');
    buttonProfile.classList.remove('active', 'navigation__highlighted');
  });

  buttonCreate.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.remove('hidden');
    pageProfile.classList.add('hidden');

    buttonHome.classList.remove('active', 'navigation__highlighted');
    buttonBookmarks.classList.remove('active', 'navigation__highlighted');
    buttonCreate.classList.add('active', 'navigation__highlighted');
    buttonProfile.classList.remove('active', 'navigation__highlighted');
  });

  buttonProfile.addEventListener('click', () => {
    pageHome.classList.add('hidden');
    pageBookmarks.classList.add('hidden');
    pageCreate.classList.add('hidden');
    pageProfile.classList.remove('hidden');

    buttonHome.classList.remove('active', 'navigation__highlighted');
    buttonBookmarks.classList.remove('active', 'navigation__highlighted');
    buttonCreate.classList.remove('active', 'navigation__highlighted');
    buttonProfile.classList.add('active', 'navigation__highlighted');
  });
}

export default navigation;

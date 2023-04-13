const reposList = document.querySelector(".projects__list");

document.addEventListener("DOMContentLoaded", async () => {
  try {
    const repos = await fetchRepos();
    renderReposListItems(repos);
  } catch (error) {
    console.log(error.message);
  }
});

async function fetchRepos() {
  const baseUrl =
    "https://api.github.com/users/AnatoliyYakovenko/repos?per_page=100";

  const allReposRaw = await fetch(baseUrl);
  const data = await allReposRaw.json();
  return data;
}

function renderReposListItems(repos) {
  const markup = repos
    .map(
      ({ full_name, html_url, description }) => `<li class="projects__item">
        <p>${full_name}</p>
        <a href= ${html_url}>${html_url}</a>
        ${description ? `<p>${description}</p>` : ""}
      </li>`
    )
    .join("");
  reposList.innerHTML = markup;
}

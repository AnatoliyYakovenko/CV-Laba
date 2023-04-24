const reposList = document.querySelector(".projects__list");
const token = "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";
const username = "AnatoliyYakovenko";
const githubAPI = new GithubAPI(token, username);

document.addEventListener(
  "DOMContentLoaded",
  githubAPI
    .getRepos()
    .then((repos) => {
      renderReposListItems(repos);
    })
    .catch((error) => {
      console.error(error);
    })
);

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

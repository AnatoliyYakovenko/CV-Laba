class GithubAPI {
  constructor(token, username) {
    this.token = token;
    this.username = username;
  }

  async getRepos() {
    const headers = new Headers();
    headers.append("Authorization", `Token ${this.token}`);
    try {
      const response = await fetch(
        `https://api.github.com/users/${this.username}/repos`,
        {
          headers: headers,
        }
      );

      if (!response.ok) {
        throw new Error("Error of getting repos");
      }

      const repos = await response.json();
      return repos;
    } catch (error) {
      console.error(error);
    }
  }
}

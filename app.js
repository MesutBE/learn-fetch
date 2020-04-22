const getUser = (userName, accessToken) =>
    fetch(`https://api.github.com/users/${userName}?access_token=${accessToken}`)
        .then(response => response.json());

const getRepos = response =>
    fetch(response.repos_url)
        .then(userRepos => userRepos.json());
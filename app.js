const getUser = async (userName) => {
    const response = await fetch(`https://api.github.com/users/${userName}`)
    return await response.json();
}

const getRepos = async (response) => {
    const data = await fetch(response.repos_url)
    return await data.json();
}
window.onload = (event) => {
    var accessToken = 'ecea6bc421533d8736289f31ddf7d9db86b3f4ca';
    document.getElementById('start-fetch-button')
        .onclick = (event) =>{

            /* TASK 1 */
            getUser(event.target.form.userName.value, accessToken)
                .then(response => console.log(response))
                .catch(err => console.error(err));

            /* TASK 2 */
            getUser(event.target.form.userName.value, accessToken)
                .then(getRepos)
                .then(response => console.log(response))
                .catch(err => console.error(err));

            /* TASK 3 */
            const oliverPromise = getUser("oliverjam", accessToken);
            const starsuitPromise = getUser("starsuit", accessToken);

            Promise.all([oliverPromise, starsuitPromise])
                .then(response => console.log(response))
                .catch(err => console.error(err));

        }
};
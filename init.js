window.onload = () => {
    document.getElementById('start-fetch-button')
        .onclick = (event) =>{

            /* TASK 1 */
            getUser(event.target.form.userName.value)
                .then(data => console.log(data))
                .catch(err => console.error(err));

            /* TASK 2 */
            getUser(event.target.form.userName.value)
                .then(getRepos)
                .then(data => console.log(data))
                .catch(err => console.error(err));

            /* TASK 3 */
            const oliverPromise = getUser("oliverjam");
            const starsuitPromise = getUser("starsuit");

            Promise.all([oliverPromise, starsuitPromise])
                .then(data => console.log(data))
                .catch(err => console.error(err));

        }
};
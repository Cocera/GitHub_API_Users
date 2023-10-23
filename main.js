const btnSearchUser = document.getElementById('btn-search-user');

const getInfoUser = async () => {

    try {
        const userName = document.getElementById('user-name-value');
        const valueUserName = userName.value
        const response = await axios.get(`https://api.github.com/users/${valueUserName}`);
        userName.value = '';
        return response.data;
     
    } catch (err) {
        console.error('This user does not exist!')
    }; 
};

const printUserCards = (objUser) => {
    const userCards = document.getElementById('user-cards');
    userCards.innerHTML += `
    <article>
    <div id='card-header'>
        <h3>${objUser.name}</h3>
        <img src="${objUser.avatar_url}" alt="User pic of ${objUser.name}">
    </div>
    <div id='card-info'>
        <div id='data_basics'>
            <span>Followers: ${objUser.followers}</span>
            <span>Following: ${objUser.following}</span>
            <span>Repositories: ${objUser.public_repos}</span>
        </div>
        <h4>GitHub's bio</h4>
        <p>${objUser.bio}</p>
        <button><a href="${objUser.html_url}">Go to profile</a></button>
    </div>
    </article>`
};



btnSearchUser.addEventListener('click', async () => {
    const objUser = await getInfoUser(); 
    printUserCards(objUser);
});

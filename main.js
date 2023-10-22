const btnSearchUser = document.getElementById('btn-search-user');

const getInfoUser = async () => {

    try {
        const valueUserName = document.getElementById('user-name-value').value
        const response = await axios.get(`https://api.github.com/users/${valueUserName}`)
        console.log(response.data)
        console.log(response.data.login)
        console.log(response.data.name)
        console.log(response.data.html_url)
        console.log(response.data.avatar_url)
    } catch (err) {
        console.error('This user does not exist!')
    }; 
};

const printUserCards = () => {
    const userCards = document.getElementById('user-cards');
    userCards.innerHTML += ``
};



btnSearchUser.addEventListener('click', getInfoUser);

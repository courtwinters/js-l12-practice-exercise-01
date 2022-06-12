const randomFolks = document.querySelector(".random-peeps");

const getData = async function () {
    const usersRequest = fetch(“https://randomuser.me/api?results=5”);
    const data = await usersRequest).json();

    getData();
};
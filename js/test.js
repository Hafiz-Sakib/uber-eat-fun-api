const loadUserData = () => {
  fetch("https://randomuser.me/api/?results=10")
    .then((res) => res.json())
    .then((data) => getData(data));
};

const getData = (userInfo) => {
  const friends = userInfo.results;
  const buddies = document.getElementById("buddies");
  for (const friend of friends) {
    const para = document.createElement("p");
    para.classList.add("buddy-style");
    para.innerText = `user name: ${friend.name.title} ${friend.name.first} ${friend.name.last}
                        gender: ${friend.gender}
                        user mail: ${friend.email}`;
    buddies.appendChild(para);
  }
};

const loadBuddies = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then((res) => res.json())
    .then((data) => displayBuddies(data));
};

loadBuddies();

const displayBuddies = (usersInfo) => {
  const friends = usersInfo.results;
  const buddies = document.getElementById("buddies");
  for (const friend of friends) {
    const paragraph = document.createElement("p");
    paragraph.innerText = `User Name: ${friend.name.title} ${friend.name.first} ${friend.name.last} 
    Email: ${friend.email}
    Gender: ${friend.gender}
    Photo: ${friend.picture.large}`;
    buddies.appendChild(paragraph);
  }
};

//ask

// const loadBuddies = () => {
//     fetch("https://randomuser.me/api/?results=5")
//       .then((res) => res.json())
//       .then((data) => displayBuddies(data));
//   };

//   loadBuddies();

//   const displayBuddies = (usersInfo) => {
//     const friends = usersInfo.results;
//     const buddies = document.getElementById("buddies");
//     for (const friend of friends) {
//       const paragraph = document.createElement("p");
//       paragraph.innerText = friend.email;
//       buddies.appendChild(paragraph);
//     }
//   };

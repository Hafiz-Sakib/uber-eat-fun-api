const loadCountries = () => {
  fetch("https://restcountries.com/v2/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

loadCountries();

const displayCountries = (countries) => {
  const countryDiv = document.getElementById("countries");
  //   for (const country of countries) {
  //     console.log(country);
  //   }

  countries.forEach((country) => {
    // console.log(country);
    const div = document.createElement("div");
    div.classList.add("country");

    div.innerHTML = ` <h3> ${country.name}</h3>
     <p>${country.capital}</p>
     <button onclick = "loadCountryByName('${country.name}')" class = "name-btn">Show Details</button>
`;
    countryDiv.appendChild(div);
  });
};
const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v2/name/${name}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => loadCountryDetail(data[0]));
};
const loadCountryDetail = (country) => {
  const countryDiv = document.getElementById("country-detail");
  countryDiv.style.backgroundColor = "aquamarine";
  countryDiv.style.textAlign = "center";
  countryDiv.style.border = "2px solid greenyellow";
  countryDiv.style.borderRadius = "10px";
  countryDiv.innerHTML = `
  <h3>${country.name}</h3>
  <p>Population: ${country.population}</p>
  <p>Capital City: ${country.capital}</p>
  <img width = '200px' src="${country.flag}">
  `;
};

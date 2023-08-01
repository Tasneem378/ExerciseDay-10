//Question6_Create a map of countries and number of characters of a country.

const countries = ["United States", "Germany", "Pakistan", "India", "China"];

function createCountryCharacterCountMap(countryList) {
  const countryCharacterCountMap = {};
  countryList.forEach((country) => {
    const characterCount = country.length;
    countryCharacterCountMap[country] = characterCount;
  });
  return countryCharacterCountMap;
}
// Create the map
const countryCharacterCountMap = createCountryCharacterCountMap(countries);

console.log(countryCharacterCountMap);

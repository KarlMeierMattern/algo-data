// You get an array of countries from an API:

const countries = [
  { code: "ZA", name: "South Africa", region: "Africa" },
  { code: "DE", name: "Germany", region: "Europe" },
  { code: "BR", name: "Brazil", region: "South America" },
];

// Write a TypeScript function that transforms this array into a lookup object like:

// {
//     ZA: "South Africa",
//     DE: "Germany",
//     BR: "Brazil"
// }

type CountriesType = {
  code: string;
  name: string;
  region: string;
};

const lookupTable = (
  countries: Array<CountriesType>
): Record<string, string> => {
  const countryObj: Record<string, string> = {};
  for (const country of countries) {
    const countryCode = country.code;
    const countryName = country.name;
    countryObj[countryCode] = countryName;
  }
  return countryObj;
};

console.log(lookupTable(countries));

const lookupCountry = (
  countries: Array<CountriesType>
): Record<string, string> =>
  countries.reduce(
    (acc: Record<string, string>, curr: { code: string; name: string }) => {
      acc[curr.code] = curr.name;
      return acc;
    },
    {}
  );

// console.log(lookupCountry(countries));

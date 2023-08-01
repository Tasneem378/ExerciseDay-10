//Question1_How many languages are there in the countries object file.

const countriesObject = {
    "US": "English",
    "FR": "French",
    "DE": "German",    
  };  
  const numOfLanguages = Object.values(countriesObject).length;
  console.log(numOfLanguages); 
  
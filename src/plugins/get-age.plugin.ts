// const getAgePlugin = require('get-age');


export const getAge = (birthdate: string) => {
  if ( !birthdate ) return new Error('birthdate is required');

  console.log({ currentYear: new Date().getFullYear() });
  return new Date().getFullYear() - new Date(birthdate).getFullYear();
}
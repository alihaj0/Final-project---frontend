function getRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
  export function generateRandomEmail() {
    const randomPart = Math.random().toString(36).substring(2, 12);
    return `${randomPart}@e2e.com`;
  }
  function getRandomLength(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  export function generateRandomFirstName() {
    const length = getRandomLength(5, 9);
    return getRandomString(length);
  }
  
  export function generateRandomLastName() {
    const length = getRandomLength(5, 9);
    return getRandomString(length);
  }
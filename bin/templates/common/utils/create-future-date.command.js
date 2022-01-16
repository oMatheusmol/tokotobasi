module.exports = {
    get: function (resource) {
      return `export function createFutureDate(date: Date, secondsToAdd: number) {
const secondsToMilliseconds = secondsToAdd * 1000;
return new Date(date.getTime() + secondsToMilliseconds);
}      
  `;
    },
  };
  
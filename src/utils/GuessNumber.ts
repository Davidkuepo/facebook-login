export function guessNumber(UserGuessedNumber: number) {
  const generateRandomNumber: number = Math.floor(Math.random() * 10) + 1
  return UserGuessedNumber === generateRandomNumber ? 'Good Work!' : 'Not matched.'

}

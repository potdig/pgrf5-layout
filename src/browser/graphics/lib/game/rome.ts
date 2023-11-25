const rome = (n: number) => {
  if (n % 1 > 0) {
    throw `${n} is not integer`
  }

  switch (n) {
    case 1:
      return 'I'
    case 2:
      return 'II'
    case 3:
      return 'III'
    case 4:
      return 'IV'
    default:
      return 'N/A'
  }
}

export { rome }

export const matchesPrice = (price: number, value: string): boolean => {
  switch (value) {
    case "free":
      return price === 0
    case "upto-10":
      return price > 0 && price < 10
    case "10-30":
      return price >= 10 && price < 30
    case "30-60":
      return price >= 30 && price < 60
    case "over-60":
      return price >= 60
    default:
      return true
  }
}
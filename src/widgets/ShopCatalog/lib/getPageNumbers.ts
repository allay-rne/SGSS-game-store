export const getPageNumbers = (page: number, totalPages: number) => {
  const pages = new Set<number>([1, totalPages, page - 1, page, page + 1])

  const sorted = [...pages]
    .filter((p) => p >= 1 && p <= totalPages)
    .sort((a, b) => a - b)

  const result: (number | '...')[] = []

  sorted.forEach((p, i) => {
    if (i === 0) {
      result.push(p)
      return
    }
    const prev = sorted[i - 1]
    if (p - prev === 1) {
      result.push(p)
    } else {
      result.push('...', p)
    }
  })

  return result
}


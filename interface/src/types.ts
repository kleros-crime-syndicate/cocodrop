interface Share {
  address: string,
  weight: number
}

interface Strategy {
  name: string,
  description: string,
  logoUri: string,
  computeShares: (...args: any[]) => Promise<{totalWeight: number, shares: Share[]}>
}

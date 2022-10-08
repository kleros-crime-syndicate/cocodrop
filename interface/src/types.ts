interface Share {
  address: string,
  weight: number
}

interface Strategy {
  name: string,
  description: string,
  logoUri: string,
  //args: string[], // not great since there are no types. maybe later.
  computeShares: (...args: any[]) => Promise<{totalWeight: number, shares: Share[]}>
}

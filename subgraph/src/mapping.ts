import { BigInt, Bytes, ethereum, log } from "@graphprotocol/graph-ts"
import {
  NewAirdrop,
  Redemption as RedemptionEvent,
} from "../generated/Cocodrop/Cocodrop"
import {
  Airdrop,
  Redeemer,
  Redemption
} from "../generated/schema"


export function handleNewAirdrop(event: NewAirdrop): void {
  let airdrop = new Airdrop(event.params.airdropId.toString())
  airdrop.airdropId = event.params.airdropId
  airdrop.donor = event.transaction.from
  airdrop.originalAmount = event.params.amount
  airdrop.remainingAmount = event.params.amount
  airdrop.token = event.params.token
  airdrop.ipfs = event.params.ipfs
  //todo, dunno arrays.
  // arrays were a terrible idea anyway
  airdrop.redeemers = [] // ??????????????
  
  airdrop.save()
}

export function handleRedemption(event: RedemptionEvent): void {
  // does redeemer exist? if not, create.
  let redeemer = Redeemer.load(event.transaction.from.toString())
  if (!redeemer) {
    redeemer = new Redeemer(event.transaction.from.toString())
    redeemer.save()
  }
  let airdrop = Airdrop.load(event.params.airdropId.toString()) as Airdrop
  // add redeemer to airdrop (this is a terrible idea)
  airdrop.redeemers.push(redeemer.id) // ????????/????????????????????
  airdrop.save()

  let redemption = new Redemption(`${airdrop.id}@${redeemer.id}`)
  redemption.redeemer = redeemer.id
  redemption.amount = event.params.amount
  redemption.airdrop = airdrop.id
  redemption.save()
}
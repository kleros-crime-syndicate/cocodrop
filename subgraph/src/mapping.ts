import { BigInt, Bytes, ethereum, log } from "@graphprotocol/graph-ts";
import { NewAirdrop, Redemption as RedemptionEvent, StoppedAirdrop } from "../generated/Cocodrop/Cocodrop";
import { Airdrop, Redeemer, Redemption } from "../generated/schema";

export function handleNewAirdrop(event: NewAirdrop): void {
  let airdrop = new Airdrop(event.params.airdropId.toString());
  airdrop.airdropId = event.params.airdropId;
  airdrop.donor = event.transaction.from;
  airdrop.originalAmount = event.params.amount;
  airdrop.remainingAmount = event.params.amount;
  airdrop.token = event.params.token;
  airdrop.ipfs = event.params.ipfs;
  airdrop.open = true;
  airdrop.save();
}

export function handleRedemption(event: RedemptionEvent): void {
  // does redeemer exist? if not, create.
  let redeemer = Redeemer.load(event.transaction.from.toHexString());
  if (!redeemer) {
    redeemer = new Redeemer(event.transaction.from.toHexString());
    redeemer.airdrops = [];
    redeemer.save();
  }

  let airdropId = event.params.airdropId.toString();

  redeemer.airdrops.push(airdropId);

  let redemption = new Redemption(`${airdropId}@${redeemer.id}`);
  redemption.redeemer = redeemer.id;
  redemption.amount = event.params.amount;
  redemption.airdrop = airdropId;
  redemption.save();
}

export function handleStopAirdrop(event: StoppedAirdrop): void {
  let airdrop = Airdrop.load(event.params.airdropId.toString()) as Airdrop;
  airdrop.open = false;
  airdrop.save();
}

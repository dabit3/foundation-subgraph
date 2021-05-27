import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURIUpdated as BaseURIUpdatedEvent,
  Minted as MintedEvent,
  NFTMarketUpdated as NFTMarketUpdatedEvent,
  NFTMetadataUpdated as NFTMetadataUpdatedEvent,
  TokenCreatorUpdated as TokenCreatorUpdatedEvent,
  TokenIPFSPathUpdated as TokenIPFSPathUpdatedEvent,
  Transfer as TransferEvent
} from "../generated/Token/Token"
import {
  Approval,
  ApprovalForAll,
  BaseURIUpdated,
  Minted,
  NFTMarketUpdated,
  NFTMetadataUpdated,
  TokenCreatorUpdated,
  TokenIPFSPathUpdated,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleBaseURIUpdated(event: BaseURIUpdatedEvent): void {
  let entity = new BaseURIUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.baseURI = event.params.baseURI
  entity.save()
}

export function handleMinted(event: MintedEvent): void {
  let entity = new Minted(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.creator = event.params.creator
  entity.tokenId = event.params.tokenId
  entity.indexedTokenIPFSPath = event.params.indexedTokenIPFSPath
  entity.tokenIPFSPath = event.params.tokenIPFSPath
  entity.save()
}

export function handleNFTMarketUpdated(event: NFTMarketUpdatedEvent): void {
  let entity = new NFTMarketUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.nftMarket = event.params.nftMarket
  entity.save()
}

export function handleNFTMetadataUpdated(event: NFTMetadataUpdatedEvent): void {
  let entity = new NFTMetadataUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.name = event.params.name
  entity.symbol = event.params.symbol
  entity.baseURI = event.params.baseURI
  entity.save()
}

export function handleTokenCreatorUpdated(
  event: TokenCreatorUpdatedEvent
): void {
  let entity = new TokenCreatorUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.fromCreator = event.params.fromCreator
  entity.toCreator = event.params.toCreator
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleTokenIPFSPathUpdated(
  event: TokenIPFSPathUpdatedEvent
): void {
  let entity = new TokenIPFSPathUpdated(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.indexedTokenIPFSPath = event.params.indexedTokenIPFSPath
  entity.tokenIPFSPath = event.params.tokenIPFSPath
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}

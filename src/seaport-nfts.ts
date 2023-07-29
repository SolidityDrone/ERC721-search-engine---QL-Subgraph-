import { Address, BigInt, bigInt, Bytes, crypto, Entity, store } from "@graphprotocol/graph-ts"
import {
  OrderFulfilled
} from "../generated/SeaPort/SeaPort"
import { IERC721 } from "../generated/SeaPort/IERC721"


import { Collection } from "../generated/schema"



export function handleOrderFulfilled(event: OrderFulfilled): void {
  if (event.params.consideration.length > 0) {
    let collection = Collection.load(event.params.consideration[0].token.toHexString());
    if (!collection) {
      collection = new Collection(event.params.consideration[0].token.toHexString());

      let contract = IERC721.bind(Address.fromString(collection.id));
      if (!contract.try_supportsInterface(Bytes.fromHexString("0x80ac58cd")).reverted) {
        if (!contract.try_name().reverted) {
          collection.name = contract.try_name().value;
        }
        if (!contract.try_symbol().reverted) {
          collection.symbol = contract.try_symbol().value;
        }
      }
      if (collection.name){
        collection.save();
      }
      
    }
  }
}
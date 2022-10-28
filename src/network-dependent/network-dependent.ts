import { Network } from "network";

/**
 * An object that is dependent upon a {@link Network}
 */
export interface NetworkDependent {
  network: Network;
}

import { Relationship } from "relationship";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";
import { Network } from "network";

/**
 * Create a {@link Relationship} between two {@link Entity} instances
 * @param params The config options
 * @param params.firstEntityId The id of the first member of the {@link Relationship}
 * @param params.secondEntityId The id of the second member of the {@link Relationship}
 * @param params.network The {@link Network} to which the newly created {@link Relationship} will be added
 */
export const createRelationship = ({
  firstEntityId,
  secondEntityId,
  network,
}: Omit<Relationship, keyof Identified> & NetworkDependent): Network => {
  throw new Error("not implemented");
};

import { Relationship } from "relationship";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";

/**
 * Remove a {@link Relationship} from a {@link Network}
 * @param params The config options
 * @param params.id The id of the {@link Relationship} to remove
 * @param params.network The {@link Network} from which to remove the specified {@link Relationship}
 */
export const removeRelationship = ({
  id,
  network,
}: Pick<Relationship, keyof Identified> & NetworkDependent) => {
  throw new Error("not implemented");
};

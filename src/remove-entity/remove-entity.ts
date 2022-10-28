import { Entity } from "entity";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";
import { Network } from "network";

/**
 * Remove an {@link Entity} from a {@link Network}.
 * Any {@link Relationship} instances that reference the specified {@link Entity} will also be removed.
 * @param params The config options
 * @param params.id The id of the {@link Entity} to remove
 * @param params.network The {@link Network} from which to remove the specified {@link Entity}
 */
export const removeEntity = ({
  id,
  network,
}: Pick<Entity, keyof Identified> & NetworkDependent): Network => {
  throw new Error("not implemented");
};

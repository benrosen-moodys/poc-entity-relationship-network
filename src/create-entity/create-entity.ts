import { Entity } from "entity";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";
import { Network } from "network";

/**
 * Create an instance of an {@link Entity}
 * @param params The config options
 * @param params.value The value of the {@link Entity}
 * @param params.network The {@link Network} to which the newly created {@link Entity} will be added
 */
export const createEntity = ({
  value,
  network,
}: Omit<Entity, keyof Identified> & NetworkDependent): Network => {
  throw new Error("not implemented");
};

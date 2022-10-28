import { Entity } from "entity";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";
import { Network } from "network";

export const createEntity = ({
  value,
  network,
}: Omit<Entity, keyof Identified> & NetworkDependent): Network => {
  throw new Error("not implemented");
};

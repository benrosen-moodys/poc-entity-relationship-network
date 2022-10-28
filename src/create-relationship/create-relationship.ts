import { Relationship } from "relationship";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";
import { Network } from "network";

export const createRelationship = ({
  firstEntityId,
  secondEntityId,
  network,
}: Omit<Relationship, keyof Identified> & NetworkDependent): Network => {
  throw new Error("not implemented");
};

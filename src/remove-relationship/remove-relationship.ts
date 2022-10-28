import { Relationship } from "relationship";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";

export const removeRelationship = ({
  id,
  network,
}: Pick<Relationship, keyof Identified> & NetworkDependent) => {
  throw new Error("not implemented");
};

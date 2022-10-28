import { Identified } from "identified";
import { Entity } from "entity";
import { EntityDependent } from "entity-dependent";
import { NetworkDependent } from "network-dependent";

export const getRelatedEntities = ({
  filterExpression,
  network,
  startEntityId,
}: {
  startEntityId: Entity[keyof Identified];
  filterExpression: ({
    distanceFromStartEntity,
    entity,
    network,
  }: EntityDependent &
    NetworkDependent & { distanceFromStartEntity: number }) => boolean;
} & NetworkDependent): Entity[] => {
  throw new Error("not implemented");
};

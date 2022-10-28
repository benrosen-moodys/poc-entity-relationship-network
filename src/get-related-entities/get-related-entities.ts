import { Identified } from "identified";
import { Entity } from "entity";
import { EntityDependent } from "entity-dependent";
import { NetworkDependent } from "network-dependent";

/**
 * Get related entities recursively.
 * @param params The config options
 * @param params.filterExpression A predicate for filtering neighboring entities
 * @param params.network The {@link Network} that can be expected to contain the given {@link Entity}
 * @param params.startEntityId The id of the {@link Entity} from which get related entities
 */
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

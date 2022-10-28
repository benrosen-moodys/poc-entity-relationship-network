import { getRelatedEntities } from "get-related-entities";
import { Identified } from "identified";
import { Relationship } from "relationship";

/**
 * Return `true` if the given entities can be connected to one another via a chain of {@link Relationship} instances in the given {@link Network}
 * @param params The config options
 * @param params.filterExpression A predicate for filtering neighboring entities when searching for the target {@link Entity}
 * @param params.network The network that can be expected to contain the given entities
 * @param params.secondEntityId The id of the target {@link Entity} to search for from the other given {@link Entity}
 * @param params.firstEntityId The id of the {@link Entity} from which to begin searching for the other given {@link Entity}
 */
export const areEntitiesRelated = ({
  filterExpression,
  network,
  secondEntityId,
  firstEntityId,
}: Omit<Relationship, keyof Identified> &
  Omit<Parameters<typeof getRelatedEntities>[0], "startEntityId">) => {
  const relatedEntities = getRelatedEntities({
    filterExpression,
    network,
    startEntityId: firstEntityId,
  });

  return relatedEntities.some((entity) => {
    return entity.id === secondEntityId;
  });
};

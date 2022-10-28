import { getRelatedEntities } from "get-related-entities/get-related-entities";
import { Identified } from "identified";
import { Relationship } from "relationship";

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

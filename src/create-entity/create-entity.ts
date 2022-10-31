import { Entity } from "entity";
import { Identified } from "identified";
import { NetworkDependent } from "network-dependent";
import { Network } from "network";
import { randomUUID as createUuid } from "crypto";

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
  const entity: Entity = {
    id: createUuid(),
    value,
  };

  return {
    id: network.id,
    entities: {
      byEntityId: {
        ...network.entities.byEntityId,
        [entity.id]: entity,
      },
      byRelationshipId: network.entities.byRelationshipId,
    },
    relationships: network.relationships,
  };
};

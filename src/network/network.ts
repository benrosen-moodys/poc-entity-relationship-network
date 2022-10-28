import { Identified } from "identified";
import { Entity } from "entity";
import { Relationship } from "relationship";

/**
 * An index of {@link Entity} and {@link Relationship} instances.
 */
export interface Network extends Identified {
  entities: {
    byEntityId: Record<Entity[keyof Identified], Entity>;
    byRelationshipId: Record<Relationship[keyof Identified], Entity>;
  };
  relationships: {
    byEntityId: Record<Entity[keyof Identified], Relationship>;
    byRelationshipId: Record<Relationship[keyof Identified], Relationship>;
  };
}

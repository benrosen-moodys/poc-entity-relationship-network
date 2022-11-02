import { Identified } from "identified";
import { Entity } from "entity";
import { Relationship } from "relationship";

/**
 * An index of {@link Entity} and {@link Relationship} instances.
 */
export interface Network extends Identified {
  entities: {
    byEntityId: Record<Entity[keyof Identified], Entity>;
    byRelationshipId: Record<
      Relationship[keyof Identified],
      Entity[keyof Identified][]
    >;
  };
  relationships: {
    byEntityId: Record<
      Entity[keyof Identified],
      Relationship[keyof Identified][]
    >;
    byRelationshipId: Record<Relationship[keyof Identified], Relationship>;
  };
}

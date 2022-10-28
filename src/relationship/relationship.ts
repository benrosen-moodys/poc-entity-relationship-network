import { Entity } from "entity";
import { Identified } from "identified";

/**
 * An association of two {@link Entity} instances.
 */
export interface Relationship extends Identified {
  firstEntityId: Entity[keyof Identified];
  secondEntityId: Entity[keyof Identified];
}

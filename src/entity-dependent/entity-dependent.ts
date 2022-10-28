import { Entity } from "entity";

/**
 * An object that is dependent upon an {@link Entity}
 */
export interface EntityDependent {
  entity: Entity;
}

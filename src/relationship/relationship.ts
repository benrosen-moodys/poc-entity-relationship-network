import { Entity } from "entity";
import { Identified } from "identified";

export interface Relationship extends Identified {
  firstEntityId: Entity[keyof Identified];
  secondEntityId: Entity[keyof Identified];
}

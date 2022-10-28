import { SerializableObject } from "serializable-object";
import { Identified } from "identified";

export interface Entity extends Identified {
  value: SerializableObject;
}

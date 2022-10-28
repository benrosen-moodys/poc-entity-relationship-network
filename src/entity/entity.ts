import { SerializableObject } from "serializable-object";
import { Identified } from "identified";

/**
 * A value that can be related to other values.
 */
export interface Entity extends Identified {
  value: SerializableObject;
}

/**
 * A valid JSON object.
 * @see https://en.wikipedia.org/wiki/JSON
 */
export type SerializableObject =
  | string
  | number
  | boolean
  | null
  | SerializableObject[]
  | { [key: string]: SerializableObject };

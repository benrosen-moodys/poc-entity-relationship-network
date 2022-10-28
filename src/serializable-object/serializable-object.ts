export type SerializableObject =
  | string
  | number
  | boolean
  | null
  | SerializableObject[]
  | { [key: string]: SerializableObject };

export type AnyPrimitive = string | number | boolean;
export type PrimitiveObject = Record<string, AnyPrimitive>;
export type UnknownObject = Record<string, unknown>;
export type ValueOf<T extends UnknownObject> = T[keyof T];

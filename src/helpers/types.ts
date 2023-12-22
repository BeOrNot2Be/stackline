// export const Optional = <T>(something?: T): undefined | T => something;
export type Optional<T> = T | void | undefined;

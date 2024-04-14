// String assertions
export function isString(value: unknown): value is string {
  return Object.prototype.toString.call(value) === "[object String]";
}

// Function assertions
export function isFunction<T extends Function = Function>(
  value: unknown
): value is T {
  return typeof value === "function";
}

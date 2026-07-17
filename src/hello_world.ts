import console from 'console';
const msg: Nullable<string> = formatMessage("Hello, World!");
const cfg: BaseConfig = { version: "1.0" };
const deep: DeepConfig = { name: "test" };
const val: DeepValue = 42;
const ca: CycleA = { a: "x" };
const cb: CycleB = { b: "y" };
const m: Missing = { m: "z" };
console.log(msg ?? "no message", cfg.version, deep.name, val, ca.a, cb.b, m.m);

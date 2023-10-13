/* 
  Як ви визначите змінну в TypeScript, яка може приймати рядок або число (union type)? 
  І так само визначте змінну, яка може приймати тільки одне з двох рядкових значень: 'enable' або 'disable' (literal type)?
*/

let union: string | number;

let literal: "enable" | "disable";

// type literal = "enable" | "disable"; Чи можливий такий варіант?
// let answer: literal;

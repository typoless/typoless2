/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('question_sentence').del()
  await knex('question_sentence').insert([
    {id: 1, question: 'Array'},
    {id: 2, question: 'Date'},
    {id: 3, question: 'eval'},
    {id: 4, question: 'function'},
    {id: 5, question: 'hasOwnProperty'},
    {id: 6, question: 'isFinite'},
    {id: 7, question: 'isNaN'},
    {id: 8, question: 'isPrototypeOf'},
    {id: 9, question: 'length'},
    {id: 10, question: 'Math'},
    {id: 11, question: 'NaN'},
    {id: 12, question: 'name'},
    {id: 13, question: 'Number'},
    {id: 14, question: 'Object'},
    {id: 15, question: 'String'},
    {id: 16, question: 'toString'},
    {id: 17, question: 'undefined'},
    {id: 18, question: 'valueOf'},
    {id: 19, question: 'abstract'},
    {id: 20, question: 'arguments'},
    {id: 21, question: 'await'},
    {id: 22, question: 'boolean'},
    {id: 23, question: 'break'},
    {id: 24, question: 'byte'},
    {id: 25, question: 'case'},
    {id: 26, question: 'catch'},
    {id: 27, question: 'char'},
    {id: 28, question: 'class'},
    {id: 29, question: 'const'},
    {id: 30, question: 'continue'},
    {id: 31, question: 'debugger'},
    {id: 32, question: 'default'},
    {id: 33, question: 'delete'},
    {id: 34, question: 'do'},
    {id: 35, question: 'double'},
    {id: 36, question: 'else'},
    {id: 37, question: 'enum'},
    {id: 38, question: 'eval'},
    {id: 39, question: 'export'},
    {id: 40, question: 'extends'},
    {id: 41, question: 'false'},
    {id: 42, question: 'final'},
    {id: 43, question: 'finally'},
    {id: 44, question: 'float'},
    {id: 45, question: 'for'},
    {id: 46, question: 'function'},
    {id: 47, question: 'goto'},
    {id: 48, question: 'if'},
    {id: 49, question: 'implements'},
    {id: 50, question: 'import'},
    {id: 51, question: 'in'},
    {id: 52, question: 'instanceof'},
    {id: 53, question: 'int'},
    {id: 54, question: 'interface'},
    {id: 55, question: 'let'},
    {id: 56, question: 'long'},
    {id: 57, question: 'native'},
    {id: 58, question: 'new'},
    {id: 59, question: 'null'},
    {id: 60, question: 'package'},
    {id: 61, question: 'private'},
    {id: 62, question: 'protected'},
    {id: 63, question: 'public'},
    {id: 64, question: 'return'},
    {id: 65, question: 'short'},
    {id: 66, question: 'static'},
    {id: 67, question: 'super'},
    {id: 68, question: 'switch'},
    {id: 69, question: 'synchronized'},
    {id: 70, question: 'this'},
    {id: 71, question: 'throw'},
    {id: 72, question: 'transient'},
    {id: 73, question: 'true'},
    {id: 74, question: 'try'},
    {id: 75, question: 'typeof'},
    {id: 76, question: 'var'},
    {id: 77, question: 'void'},
    {id: 78, question: 'volatile'},
    {id: 79, question: 'while'},
    {id: 80, question: 'with'},
    {id: 81, question: 'yield'},
  ]);
};

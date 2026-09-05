import { readFileSync } from "node:fs";
const html = readFileSync("dist/index.html", "utf8")
  .replace(/<script[\s\S]*?<\/script>/g, "")
  .replace(/<style[\s\S]*?<\/style>/g, "");
const countWords = s =>
  s.replace(/<[^>]+>/g, " ").replace(/&[a-z0-9#]+;/g, " ").split(/\s+/).filter(w => /[a-zA-Z]{2,}/.test(w)).length;
const parts = html.split(/<section\s/).slice(1).map(s => {
  const id = (s.match(/id="([^"]*)"/) || [])[1] || "(none)";
  return { id, words: countWords(s) };
});
let sum = 0;
for (const p of parts) { sum += p.words; console.log(p.id.padEnd(20), p.words); }
console.log("SUM(sections)", sum, "| FULL PAGE", countWords(html));

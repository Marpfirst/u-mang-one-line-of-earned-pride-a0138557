import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The boy who stuttered through every reading circle stood up, took a breath, and read the whole page aloud without once looking down.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");

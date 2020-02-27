import { promises as fs } from "fs";
async () => {
  await fs.writeFile("newFile.txt", "Hello?");
};

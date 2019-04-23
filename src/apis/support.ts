import fs from "fs";
import path from "path";

export const loadMockData = (fileName: string): Promise<any> =>
  new Promise((resolve, reject) => {
    const dirPath: string = path.join(__dirname, "/__mockData__");

    fs.readFile(`${dirPath}/${fileName}.json`, "utf8", (err: NodeJS.ErrnoException | null, data: string) => {
      if (err) {
        reject(err);
      }
      resolve({ data: JSON.parse(data) });
    });
  });

export default {
  loadMockData,
};

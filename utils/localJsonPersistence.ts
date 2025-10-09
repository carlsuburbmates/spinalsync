// Local JSON persistence for development
import fs from "fs";
import path from "path";

const DATA_PATH = path.join(process.cwd(), "data", "local-progress.json");

export function saveLocalProgress(progress: any) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(progress, null, 2));
}

export function loadLocalProgress() {
  if (!fs.existsSync(DATA_PATH)) return {};
  return JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
}

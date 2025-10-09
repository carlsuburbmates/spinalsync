import fs from "fs";
import path from "path";

// Utility to ingest all JSON modules in /data and validate structure
export function ingestModules() {
  const dataDir = path.join(process.cwd(), "data");
  const modulesFile = path.join(dataDir, "modules.json");
  const modules = JSON.parse(fs.readFileSync(modulesFile, "utf-8"));
  return modules.map((mod: any) => {
    const modPath = path.join(dataDir, mod.file);
    const content = JSON.parse(fs.readFileSync(modPath, "utf-8"));
    return { ...mod, content };
  });
}

// Example usage: const allModules = ingestModules();

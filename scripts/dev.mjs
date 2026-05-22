import { existsSync, readFileSync, unlinkSync } from "node:fs";
import { spawn } from "node:child_process";

const lockPath = ".next/dev/lock";

if (existsSync(lockPath)) {
  try {
    const lock = JSON.parse(readFileSync(lockPath, "utf8"));
    if (lock.pid) {
      try {
        process.kill(lock.pid, 0);
        console.warn(
          `\n⚠ Un serveur dev tourne déjà (PID ${lock.pid}, port ${lock.port ?? 3000}).`,
        );
        console.warn(`  Arrêtez-le avec : kill ${lock.pid}\n`);
      } catch {
        unlinkSync(lockPath);
        console.log("Verrou dev obsolète supprimé.\n");
      }
    }
  } catch {
    unlinkSync(lockPath);
  }
}

const child = spawn("npx", ["next", "dev", ...process.argv.slice(2)], {
  stdio: "inherit",
  shell: true,
});

child.on("exit", (code) => process.exit(code ?? 0));

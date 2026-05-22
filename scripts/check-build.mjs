import { existsSync } from "node:fs";

if (!existsSync(".next/BUILD_ID")) {
  console.error("\n❌ Aucun build de production trouvé dans .next/\n");
  console.error("  Développement :  npm run dev");
  console.error("  Production :     npm run build && npm start");
  console.error("  Ou en une fois : npm run preview\n");
  process.exit(1);
}

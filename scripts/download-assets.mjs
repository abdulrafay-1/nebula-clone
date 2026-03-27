#!/usr/bin/env node
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const TARGET = process.argv[2] || "https://nebula.uy";
const PUBLIC_DIR = path.resolve("public");

const SEEDED_ASSETS = [
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/02/nebula-logo.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/sitio-web-basico.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/sitios-web-custom.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/ecommerce.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/integraciones-ia.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/soft-liviano.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/ux-ui.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/asteroid.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/asteroid-2.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/Logo-fiancar.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/11/ingeino-logo.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/11/NS-logo.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/logo-clinkky.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/11/logo_romy-white-60.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/logo-inu.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/03/astronauta-480.webp",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/instagram.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/linkedin.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/facebook.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/X-1.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/angel-list.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/product-hunt.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/11/medium-fill-full.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/youtube-icon-footer.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/10/Sello-socio-Cuti_6.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/10/cem-logo.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/05/flag-us.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/06/whatsapp.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/02/cropped-fav-1-32x32.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/02/cropped-fav-1-192x192.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/02/cropped-fav-1-180x180.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2026/02/profile.png",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/estrellas-purpuras.svg",
  "https://bitskingdom.sfo3.digitaloceanspaces.com/sites/5/2025/04/estrellas-blancas.svg",
];

const ASSET_EXT =
  /\.(png|jpe?g|webp|svg|gif|ico|avif|mp4|webm|mov|woff2?|ttf|otf|json)$/i;

function normalizeUrl(raw, base) {
  try {
    if (!raw) return null;
    if (raw.startsWith("data:")) return null;
    return new URL(raw, base).toString();
  } catch {
    return null;
  }
}

function extractAssetCandidates(html, baseUrl) {
  const found = new Set();

  const attrs = [...html.matchAll(/(?:src|href|content)=["']([^"']+)["']/gi)];
  for (const match of attrs) {
    const u = normalizeUrl(match[1], baseUrl);
    if (u && (ASSET_EXT.test(u) || u.includes("digitaloceanspaces.com"))) {
      found.add(u);
    }
  }

  const cssUrls = [...html.matchAll(/url\(([^)]+)\)/gi)];
  for (const match of cssUrls) {
    const raw = match[1].replace(/["']/g, "").trim();
    const u = normalizeUrl(raw, baseUrl);
    if (
      u &&
      !u.startsWith("data:") &&
      (ASSET_EXT.test(u) || u.includes("digitaloceanspaces.com"))
    ) {
      found.add(u);
    }
  }

  return found;
}

function toPublicPath(assetUrl) {
  const u = new URL(assetUrl);
  const cleanedPath = u.pathname.replace(/^\/+/, "");
  return path.join(PUBLIC_DIR, cleanedPath);
}

async function ensureDir(filePath) {
  await mkdir(path.dirname(filePath), { recursive: true });
}

async function downloadOne(assetUrl) {
  const outputPath = toPublicPath(assetUrl);
  await ensureDir(outputPath);

  const res = await fetch(assetUrl);
  if (!res.ok) {
    throw new Error(`HTTP ${res.status} for ${assetUrl}`);
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  await writeFile(outputPath, buffer);

  return {
    url: assetUrl,
    outputPath: path.relative(process.cwd(), outputPath).replace(/\\/g, "/"),
  };
}

async function runBatched(urls, concurrency = 4) {
  const queue = [...urls];
  const success = [];
  const failed = [];

  async function worker() {
    while (queue.length > 0) {
      const next = queue.shift();
      if (!next) continue;
      try {
        const result = await downloadOne(next);
        success.push(result);
        console.log(`Downloaded: ${next}`);
      } catch (error) {
        failed.push({ url: next, error: String(error) });
        console.warn(`Failed: ${next}`);
      }
    }
  }

  await Promise.all(Array.from({ length: concurrency }, () => worker()));
  return { success, failed };
}

async function main() {
  const pageResponse = await fetch(TARGET);
  const html = await pageResponse.text();

  const discovered = extractAssetCandidates(html, TARGET);
  for (const seeded of SEEDED_ASSETS) discovered.add(seeded);

  const filtered = [...discovered].filter((u) => {
    return /digitaloceanspaces\.com|nebula\.uy|bitskingdom\.sfo3/i.test(u);
  });

  const { success, failed } = await runBatched(filtered, 4);

  await mkdir(path.join(PUBLIC_DIR, "seo"), { recursive: true });

  const icon32 = success.find((x) => x.url.includes("32x32"));
  const icon192 = success.find((x) => x.url.includes("192x192"));
  const apple = success.find((x) => x.url.includes("180x180"));
  const ogImage = success.find((x) => x.url.includes("profile.png"));

  if (icon32) {
    await writeFile(
      path.join(PUBLIC_DIR, "seo", "favicon-32x32.txt"),
      icon32.outputPath + "\n",
      "utf8",
    );
  }
  if (icon192) {
    await writeFile(
      path.join(PUBLIC_DIR, "seo", "android-chrome-192x192.txt"),
      icon192.outputPath + "\n",
      "utf8",
    );
  }
  if (apple) {
    await writeFile(
      path.join(PUBLIC_DIR, "seo", "apple-touch-icon.txt"),
      apple.outputPath + "\n",
      "utf8",
    );
  }
  if (ogImage) {
    await writeFile(
      path.join(PUBLIC_DIR, "seo", "og-image.txt"),
      ogImage.outputPath + "\n",
      "utf8",
    );
  }

  const manifest = {
    target: TARGET,
    downloaded: success,
    failed,
    totals: {
      attempted: filtered.length,
      success: success.length,
      failed: failed.length,
    },
  };

  await writeFile(
    path.resolve("docs", "research", "asset-download-manifest.json"),
    JSON.stringify(manifest, null, 2),
    "utf8",
  );

  console.log(`Attempted: ${filtered.length}`);
  console.log(`Success: ${success.length}`);
  console.log(`Failed: ${failed.length}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});

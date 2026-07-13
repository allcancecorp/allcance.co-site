/**
 * Baixa 5 imagens do Unsplash CDN (1815x890) para src/assets/images/home/
 * Temas: equipes, saúde mental corporativa, reuniões, diálogo profissional
 */
import https from 'https';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT_DIR = join(__dirname, '../src/assets/images/home');

const W = 1815;
const H = 890;

// Fotos Unsplash com licença gratuita — temas: equipe, reunião, bem-estar, saúde corporativa
const PHOTOS = [
  { id: '1522202176988-66273c2fd55f', label: 'hero-01' }, // equipe em reunião
  { id: '1573497019940-1c28c88b4f3e', label: 'hero-02' }, // conversa profissional
  { id: '1531482615713-2afd69097998', label: 'hero-03' }, // grupo de profissionais
  { id: '1600880292203-757bb62b4baf', label: 'hero-04' }, // escritório moderno, pessoas
  { id: '1551836022-d5d88e9218df', label: 'hero-05' }, // equipe colaborando
];

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = [];
    const req = https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      res.on('data', chunk => file.push(chunk));
      res.on('end', () => {
        const buf = Buffer.concat(file);
        writeFileSync(dest, buf);
        resolve(buf.length);
      });
    });
    req.on('error', reject);
    req.setTimeout(30000, () => { req.destroy(); reject(new Error('timeout')); });
  });
}

async function run() {
  for (const photo of PHOTOS) {
    const url = `https://images.unsplash.com/photo-${photo.id}?w=${W}&h=${H}&fit=crop&q=85&auto=format`;
    const dest = join(OUT_DIR, `${photo.label}.jpg`);
    console.log(`Baixando ${photo.label}...`);
    try {
      const bytes = await download(url, dest);
      console.log(`  OK: ${dest} (${Math.round(bytes / 1024)} KB)`);
    } catch (err) {
      console.error(`  Erro: ${err.message}`);
    }
  }
  console.log('\nConcluido.');
}

run();

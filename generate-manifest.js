const fs = require('fs');
const path = require('path');

const imageDir = path.join(__dirname, 'src/images');
const manifestPath = path.join(imageDir, 'manifest.json');
const extensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif'];

const files = fs.readdirSync(imageDir)
  .filter(f => extensions.includes(path.extname(f).toLowerCase()))
  .sort();

fs.writeFileSync(manifestPath, JSON.stringify(files, null, 2));
console.log(`[manifest] ${files.length} image(s) indexed.`);

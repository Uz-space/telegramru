// Restores the vendored solid build artifacts (dist folders) which are not
// tracked in git. Runs before dev/build.
import {cpSync, existsSync, mkdirSync} from 'fs';

const pairs = [
  ['node_modules/solid-js/dist', 'src/vendor/solid/dist'],
  ['node_modules/solid-js/web/dist', 'src/vendor/solid/web/dist'],
  ['node_modules/solid-js/store/dist', 'src/vendor/solid/store/dist'],
  ['node_modules/solid-js/html/dist', 'src/vendor/solid/html/dist'],
  ['node_modules/solid-js/h/dist', 'src/vendor/solid/h/dist'],
  ['node_modules/solid-js/universal/dist', 'src/vendor/solid/universal/dist']
];

for(const [from, to] of pairs) {
  if(existsSync(from) && !existsSync(to)) {
    cpSync(from, to, {recursive: true});
    console.log('restored', to);
  }
}

mkdirSync('src/scripts/out', {recursive: true});

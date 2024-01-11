import path from 'path';
import { fileURLToPath } from 'url';

export const __fullFileName = fileURLToPath(import.meta.url);

export const __fileName = path.basename(__fullFileName);
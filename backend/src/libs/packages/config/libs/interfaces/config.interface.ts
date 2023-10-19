import { type IConfig as ILibraryConfig } from 'shared/build/index.js';

import { type EncryptConfig, type EnvironmentSchema } from '../types/types.js';
import { type IAuthConfig } from './authconfig.interface.js';

interface IConfig extends ILibraryConfig<EnvironmentSchema> {
  AUTH: IAuthConfig;
  ENCRYPTION: EncryptConfig;
}

export { type IConfig };

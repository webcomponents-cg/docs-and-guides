import { rocketLaunch } from '@rocket/launch';
import { rocketSearch } from '@rocket/search';

export default {
  presets: [rocketLaunch(), rocketSearch()],
};

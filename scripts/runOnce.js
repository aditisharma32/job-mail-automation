'use strict';

// Local one-shot run:  npm run send  (add `-- --dry` to preview without sending)
const { runCampaign } = require('../services/campaign');

const dryRun = process.argv.includes('--dry');
const limitArg = process.argv.find((a) => a.startsWith('--limit='));
const limit = limitArg ? parseInt(limitArg.split('=')[1], 10) : undefined;

runCampaign({ dryRun, limit })
  .then((summary) => {
    console.log(JSON.stringify(summary, null, 2));
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

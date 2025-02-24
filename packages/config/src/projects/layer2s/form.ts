import { UnixTime } from '@l2beat/shared-pure'
import { REASON_FOR_BEING_OTHER } from '../../common'
import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import type { Layer2 } from '../../types'
import { BADGES } from '../badges'
import { CELESTIA_DA_PROVIDER, opStackL2 } from './templates/opStack'

const discovery = new ProjectDiscovery('form')
const genesisTimestamp = new UnixTime(1733419991)

export const form: Layer2 = opStackL2({
  daProvider: CELESTIA_DA_PROVIDER,
  celestiaDa: {
    sinceBlock: 2943925,
    namespace: 'AAAAAAAAAAAAAAAAAAAAAAAAAMod4SpR3bjJQT0=',
  },
  capability: 'universal',
  addedAt: new UnixTime(1717490033), // 2024-06-04T08:33:53Z
  additionalPurposes: ['Social'],
  additionalBadges: [BADGES.RaaS.Caldera],
  reasonsForBeingOther: [
    REASON_FOR_BEING_OTHER.NO_PROOFS,
    REASON_FOR_BEING_OTHER.NO_DA_ORACLE,
  ],
  display: {
    name: 'Form',
    slug: 'form',
    description:
      'Form is an Optimium utilizing the OP Stack. The Form L2 is focused on bringing mass adoption and interoperability to the SocialFi category.',
    category: 'Optimium',
    stack: 'OP Stack',
    links: {
      websites: ['https://form.network'],
      apps: ['https://bridge.form.network'],
      documentation: ['https://docs.form.network'],
      explorers: ['https://explorer.form.network'],
      socialMedia: [
        'https://x.com/0xform',
        'https://discord.com/invite/formnetwork',
        'https://t.me/formnetwork',
        'https://mirror.xyz/formnetwork.eth',
      ],
    },
  },
  rpcUrl: 'https://rpc.form.network/http',
  chainConfig: {
    name: 'form',
    chainId: 478,
    explorerUrl: 'https://explorer.form.network',
    minTimestampForTvl: genesisTimestamp,
  },
  discovery,
  genesisTimestamp,
  // associatedTokens: ['FORM'], // not launched yet
})

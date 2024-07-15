import { UnixTime } from '@l2beat/shared-pure'

import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import { Badge } from '../badges'
import { CELESTIA_DA_PROVIDER, opStackL2 } from './templates/opStack'
import { Layer2 } from './types'

const discovery = new ProjectDiscovery('ancient')

const upgradeability = {
  upgradableBy: ['ProxyAdmin'],
  upgradeDelay: 'No delay',
}

export const ancient: Layer2 = opStackL2({
  daProvider: CELESTIA_DA_PROVIDER,
  badges: [
    Badge.VM.EVM,
    Badge.DA.Celestia,
    Badge.Stack.OPStack,
    Badge.RaaS.Conduit,
  ],
  discovery,
  display: {
    name: 'Ancient8',
    slug: 'ancient',
    warning:
      'Fraud proof system is currently under development. Users need to trust the block proposer to submit correct L1 state roots.',
    description:
      'Ancient8 Chain is a gaming-focused community-driven Ethereum Layer 2 built using OP Stack.',
    purposes: ['Gaming'],
    links: {
      websites: ['https://ancient8.gg/'],
      apps: ['https://bridge.ancient8.gg/', 'https://space3.gg/A8Layer2'],
      documentation: ['https://docs.ancient8.gg/'],
      explorers: ['https://scan.ancient8.gg/'],
      repositories: [],
      socialMedia: [
        'https://twitter.com/Ancient8_gg',
        'https://discord.gg/ancient8',
        'https://blog.ancient8.gg/',
        'https://t.me/ancient8_gg',
        'https://youtube.com/@Ancient8_gg',
        'https://linkedin.com/company/ancient8',
      ],
    },
    activityDataSource: 'Blockchain RPC',
    architectureImage: 'opstack',
  },
  upgradeability,
  rpcUrl: 'https://rpc.ancient8.gg/',
  genesisTimestamp: new UnixTime(1705985147),
  isNodeAvailable: 'UnderReview',
  milestones: [
    {
      name: 'Ancient8 Network Launch',
      link: 'https://twitter.com/Ancient8_gg/status/1760666331764961479',
      date: '2024-02-22T00:00:00Z',
      description: 'Ancient8 Chain is live on mainnet.',
    },
  ],
  nonTemplatePermissions: [
    ...discovery.getMultisigPermission(
      'ConduitMultisig',
      'This address is the owner of the following contracts: ProxyAdmin, SystemConfig. It is also designated as a Guardian of the OptimismPortal, meaning it can halt withdrawals. It can upgrade the bridge implementation potentially gaining access to all funds, and change the sequencer, state root proposer or any other system component (unlimited upgrade power).',
    ),
    ...discovery.getMultisigPermission(
      'ChallengerMultisig',
      'This address is the permissioned challenger of the system. It can delete non finalized roots without going through the fault proof process.',
    ),
  ],
})

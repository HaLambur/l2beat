import { EthereumAddress, UnixTime } from '@l2beat/shared-pure'

import { ProjectDiscovery } from '../discovery/ProjectDiscovery'
import { opStackL2 } from './templates/opStack'
import { Layer2 } from './types'

const discovery = new ProjectDiscovery('rss3')

const upgradeability = {
  upgradableBy: ['ProxyAdmin'],
  upgradeDelay: 'No delay',
}

export const rss3: Layer2 = opStackL2({
  discovery,
  display: {
    shortName: 'RSS3',
    name: 'RSS3 Value Sublayer',
    slug: 'rss3',
    description:
      'The RSS3 Value Sublayer (VSL) as part of the RSS3 Network, is an Ethereum Layer2 built with OP Stack, handling the value and ownership of AI and Open Information.',
    purposes: ['AI', 'Information'],
    links: {
      websites: ['https://rss3.io'],
      apps: [
        'https://explorer.rss3.io/bridge',
        'https://explorer.rss3.io/nodes',
        'https://explorer.rss3.io/epochs',
        'https://explorer.rss3.io/dsl-scan',
      ],
      documentation: ['https://docs.rss3.io'],
      explorers: ['https://explorer.rss3.io', 'https://scan.rss3.io'],
      repositories: ['https://github.com/rss3-network'],
      socialMedia: [
        'https://twitter.com/rss3_',
        'https://discord.com/invite/rss3-network',
        'https://t.me/rss3_en',
      ],
    },
    activityDataSource: 'Blockchain RPC',
  },
  upgradeability,
  l1StandardBridgeEscrow: discovery.getContract('L1StandardBridge').address,
  rpcUrl: 'https://rpc.rss3.io/',
  chainConfig: {
    name: 'rss3',
    chainId: 12553,
    explorerUrl: 'https://scan.rss3.io/',
    explorerApi: {
      url: 'https://scan.rss3.io/api',
      type: 'blockscout',
    },
    minTimestampForTvl: UnixTime.fromDate(new Date('2024-03-08T00:41:59Z')),
    multicallContracts: [
      {
        address: EthereumAddress('0xcA11bde05977b3631167028862bE2a173976CA11'),
        batchSize: 150,
        sinceBlock: 14193,
        version: '3',
      },
    ],
  },
  finality: {
    type: 'OPStack',
    lag: 0,
  },
  genesisTimestamp: new UnixTime(1709858519),
  l2OutputOracle: discovery.getContract('L2OutputOracle'),
  portal: discovery.getContract('OptimismPortal'),
  nonTemplatePermissions: [
    {
      name: 'SystemConfig Owner.',
      description:
        'Account privileged to change System Config parameters such as sequencer address and gas limit.',
      accounts: [discovery.getPermissionedAccount('SystemConfig', 'owner')],
    },
    ...discovery.getMultisigPermission(
      'RSS3Multisig',
      'This address is the owner of the following contracts: ProxyAdmin. It can upgrade the bridge implementation potentially gaining access to all funds, and change the sequencer, state root proposer or any other system component (unlimited upgrade power).',
    ),
  ],
  nonTemplateContracts: [
    discovery.getContractDetails('L1StandardBridge', {
      description: 'The L1 Bridge to VSL.',
      ...upgradeability,
    }),
    discovery.getContractDetails('SuperchainConfig', {
      description:
        'Contract that stores the Guardian address and allows it to pause the system.',
    }),
  ],
  nonTemplateEscrows: [],
  l1StandardBridgeTokens: ['RSS3'],
  isNodeAvailable: false,
  milestones: [
    {
      name: 'RSS3 Mainnet Alpha Launch',
      link: 'https://x.com/rss3_/status/1767370007275851789',
      date: '2024-03-12T00:00:00Z',
      description: 'RSS3 Network Mainnet Alpha is live.',
    },
  ],
  roleOverrides: {
    batcherHash: 'Sequencer',
    PROPOSER: 'Proposer',
    GUARDIAN: 'Guardian',
    CHALLENGER: 'Challenger',
  },
  knowledgeNuggets: [],
})

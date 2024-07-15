import { UnixTime } from '@l2beat/shared-pure'

import { ProjectDiscovery } from '../../discovery/ProjectDiscovery'
import { Badge } from '../badges'
import { opStackL2 } from './templates/opStack'
import { Layer2 } from './types'

const discovery = new ProjectDiscovery('lambda')

const upgradeability = {
  upgradableBy: ['ProxyAdmin'],
  upgradeDelay: 'No delay',
}

export const lambda: Layer2 = opStackL2({
  discovery,
  badges: [Badge.VM.EVM, Badge.DA.EthereumBlobs, Badge.Stack.OPStack],
  display: {
    name: 'Lambda Chain',
    slug: 'lambda',
    redWarning:
      'Critical contracts can be upgraded by an EOA which could result in the loss of all funds.',
    description:
      'Lambda Chain is an OP Stack Rollup on Ethereum, focusing on long-term data storage and -availability.',
    purposes: ['Universal', 'Storage'],
    links: {
      websites: ['https://lambda.im/'],
      apps: ['https://portal.lambda.im/bridge/'],
      documentation: ['https://docs.lambda.im/', 'https://docs.optimism.io/'],
      explorers: ['https://scan.lambda.im/'],
      repositories: ['https://github.com/LambdaIM'],
      socialMedia: [
        'https://twitter.com/Lambdaim',
        'https://discord.gg/lambdastorage',
        'https://t.me/HelloLambda',
      ],
    },
    activityDataSource: 'Blockchain RPC',
  },
  usesBlobs: true,
  associatedTokens: ['LAMB'],
  upgradeability,
  rpcUrl: 'https://nrpc.lambda.im',
  genesisTimestamp: new UnixTime(1713345623),
  isNodeAvailable: true,
  milestones: [
    {
      name: 'Lambda Chain Mainnet Launch',
      link: 'https://lambdanetwork.medium.com/lambda-is-about-to-launch-a-permanent-storage-da-network-leveraging-das-technology-to-provide-data-cdc80c8f69d1',
      date: '2024-04-17T00:00:00.00Z',
      description: 'Lambda Chain is live on mainnet.',
    },
  ],
  chainConfig: {
    name: 'lambda',
    chainId: 56026,
    explorerUrl: 'https://scan.lambda.im',
    explorerApi: {
      url: 'https://scan.lambda.im/api',
      type: 'blockscout',
    },
    blockscoutV2ApiUrl: 'https://scan.lambda.im/api/v2',
    minTimestampForTvl: new UnixTime(1713345623),
    multicallContracts: [
      // fails the tests since the address is not the usual one
      // {
      //   address: EthereumAddress('0xCeA9c77D5c8FF7aa13D94E8ED6b763eD51A55487'),
      //   batchSize: 150,
      //   sinceBlock: 1423879,
      //   version: '3',
      // },
    ],
  },
  nonTemplateNativePermissions: {
    lambda: [
      {
        name: 'Lambda Admin EOA',
        accounts: [
          {
            address: discovery.getAddressFromValue('SystemConfig', 'owner'),
            type: 'EOA',
          },
        ],
        description:
          "EOA address that can upgrade the rollup's smart contract system (via UpgradeExecutor) and gain access to all funds.",
      },
    ],
  },
})

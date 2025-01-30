import type { DaBridge } from '../../../types'

type TemplateVars = Pick<
  DaBridge,
  'addedAt' | 'contracts' | 'permissions' | 'usedIn' | 'technology' | 'risks'
>

export function CELESTIA_BLOBSTREAM(base: TemplateVars): DaBridge {
  const display = {
    name: `Blobstream`,
    slug: `blobstream`,
    description: `The Blobstream bridge serves as a ZK light client, enabling the bridging of data availability commitments between Celestia and destination chains.`,
  }

  const validation = {
    type: 'zk-proof',
    relayer: 'SuccinctGateway',
    proverSource: 'https://hackmd.io/@succinctlabs/HJE7XRrup',
  }

  return {
    type: 'OnChainBridge',
    id: `blobstream`,
    addedAt: base.addedAt,
    display,
    risks: base.risks,
    validation: validation,
    contracts: base.contracts,
    technology: base.technology,
    permissions: base.permissions,
    usedIn: base.usedIn,
  }
}

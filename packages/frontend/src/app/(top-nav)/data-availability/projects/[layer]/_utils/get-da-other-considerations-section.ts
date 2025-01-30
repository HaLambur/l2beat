import type {
  DaBridge,
  DaProject,
  EthereumDaBridge,
  EthereumDaProject,
} from '@l2beat/config'
import type { TechnologySectionProps } from '~/components/projects/sections/technology-section'
import type { ProjectSectionProps } from '~/components/projects/sections/types'
import { makeTechnologyChoice } from '~/utils/project/technology/make-technology-section'

export function getDaOtherConsiderationsSection(
  project: DaProject | EthereumDaProject,
  bridge: DaBridge | EthereumDaBridge,
): Omit<
  TechnologySectionProps,
  keyof Omit<ProjectSectionProps, 'isUnderReview'>
> {
  const layerConsiderations = project.daLayer.otherConsiderations ?? []
  const bridgeConsiderations = bridge.otherConsiderations ?? []
  const items = layerConsiderations
    .concat(bridgeConsiderations)
    .map((x, i) => makeTechnologyChoice(`other-considerations-${i + 1}`, x))

  return {
    items,
  }
}

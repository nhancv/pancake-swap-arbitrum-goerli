import { ChainId } from '@pancakeswap-libs/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.MAINNET]: '0x1Ee38d535d541c55C9dae27B12edf090C608E6Fb',
  [ChainId.BSCTESTNET]: '0xb4B23070BE725100435457CE2E887aB716575EB2'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }

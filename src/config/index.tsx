import { defaultWagmiConfig } from "@web3modal/wagmi/react/config"
import { arbitrumSepolia, bsc, mainnet, polygon } from "viem/chains"

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
    name: 'Web3Modal',
    description: 'Web3Modal Example',
    url: 'https://web3modal.com', // origin must match your domain & subdomain
    icons: ['https://avatars.githubusercontent.com/u/37784886']
  }

export const chains = [mainnet, polygon, bsc] as const

export const configCustom = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    enableEmail: true
})

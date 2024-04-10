'use client'

import { configCustom, projectId } from "@/config"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createWeb3Modal } from "@web3modal/wagmi/react"
import { ReactNode } from "react"
import { polygon } from "viem/chains"
import { State, WagmiProvider } from "wagmi"

const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

createWeb3Modal({
  //@ts-ignore
  wagmiConfig: configCustom,
  projectId,
  enableAnalytics: true,
  enableOnramp: true,
  themeVariables: {
    '--w3m-accent': '#5c0c8d',
    '--w3m-font-family': 'robofanfree',
  },
  themeMode: 'dark',
  defaultChain: polygon,
  tokens: {
    137: {
      address: "0x88F4532991b92875022ce498236229CF94f97582",
      image: "https://github.com/ycryptobank/project-audit-images/blob/88c61f780a435c7f0a842f0e5d774964a0dd7416/YCB/walletkey.png"
    }
  }
})

export default function Web3ModalProvider({
    children,
    initialState
  }: {
    children: ReactNode
    initialState?: State
  }) {
    return (
      <WagmiProvider config={configCustom} initialState={initialState}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </WagmiProvider>
    )
  }

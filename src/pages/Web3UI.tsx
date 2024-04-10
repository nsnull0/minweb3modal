'use client'

import Web3ModalProvider from "@/app/context"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import { useAccount, useDisconnect } from "wagmi"

const Web3UI = () => {
    return (
        <Web3ModalProvider>
            <Web3UICtx />
        </Web3ModalProvider>
    )
}

const Web3UICtx = () => {
    const { open } = useWeb3Modal()

    const { isConnected } = useAccount()

    const { disconnectAsync } = useDisconnect()

    const onLogOutClick = async () => {
        if (isConnected) {
            try {
                await disconnectAsync()
            } catch (error) {
                window.alert(error)
            }

            return
        }
    }

    return (
        <>
            <button onClick={() => open()} className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Open Connect Modal</button>
            <button onClick={() => open({ view: 'Networks' })} className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Open Network Modal</button>
            <button onClick={onLogOutClick} className="flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">Disconnect</button>
            <w3m-button/>
            <w3m-account-button/>
            isConneccted {isConnected ? "connected": "disconnected"}
        </>
    )
}

export default Web3UI;

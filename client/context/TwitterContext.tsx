'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

declare global {
    interface Window {
        ethereum: any;
    }
}

interface TwitterContextType {
    appStatus: string;
    currentAccount: string;
    connectWallet: () => void;
}

export const TwitterContext = createContext<TwitterContextType>({
    appStatus: '',
    currentAccount: '',
    connectWallet: () => { },
});

export const TwitterProvider = ({ children }: any) => {
    const [appStatus, setAppStatus] = useState('loading');
    const [currentAccount, setCurrentAccount] = useState('');

    const Router = useRouter();

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask');
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            });
            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0]);
                setAppStatus('connected');
            } else {
                Router.push('/');
                setAppStatus('notConnected');
            }
        } catch (error) {
            setAppStatus('error');
        }
    }
    const connectWallet = async () => {
        if (!window.ethereum) return setAppStatus('noMetaMask');
        try {
            setAppStatus('loading');
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0]);
            } else {
                Router.push('/');
                setAppStatus('notConnected');
            }
        } catch (error) {
            setAppStatus('error');
        }
    }

    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, connectWallet }}>
            {children}
        </TwitterContext.Provider>
    )
};
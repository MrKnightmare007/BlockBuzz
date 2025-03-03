import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

declare global {
    interface Window {
        ethereum: any;
    }
}

export const TwitterContext = createContext({});

export const TwitterProvider = ({ children }: any) => {
    const [appStatus, setAppStatus] = useState('loading');
    const [currentAccount, setCurrentAccount] = useState('');

    const Router = useRouter();

    useEffect(() => {
        checkIfWalletIsConnected();
    }, []);

    const checkIfWalletIsConnected = async () => {
        if (!window.ethereum) return setAppStatus('No Metamask detected');
        try {
            const addressArray = await window.ethereum.request({
                method: 'eth_accounts',
            });
            if (addressArray.length > 0) {
                setCurrentAccount(addressArray[0]);
                setAppStatus('Connected');
            } else {
                Router.push('/');
                setAppStatus('Not connected');
            }
        } catch (error) {
            setAppStatus('error');
        }
    }
    const connectToWallet = async () => {
        if (!window.ethereum) return setAppStatus('No Metamask detected');
        try {
            setAppStatus('connecting');
            const addressArray = await window.ethereum.request({
                method: 'eth_requestAccounts',
            });

            if(addressArray.length > 0) {
                setCurrentAccount(addressArray[0]);
            } else {
                Router.push('/');
                setAppStatus('Not connected');
            }
        } catch (error) {
            setAppStatus('error');
        }
    }

    return (
        <TwitterContext.Provider value={{appStatus, currentAccount, connectToWallet }}>
            {children}
        </TwitterContext.Provider>
    )
};
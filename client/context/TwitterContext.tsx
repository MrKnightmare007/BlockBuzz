'use client';
import { createContext, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '../lib/client'
import { create } from 'domain';

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
                createUserAccount(addressArray[0]);
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
                setAppStatus('connected');
                createUserAccount(addressArray[0]);
            } else {
                Router.push('/');
                setAppStatus('notConnected');
            }
        } catch (error) {
            setAppStatus('error');
        }
    }

  /**
   * Creates an account in Sanity DB if the user does not already have one
   * @param {String} userWalletAddress Wallet address of the currently logged in user
   */
const createUserAccount = async (userWalletAddress: string = currentAccount) => {
        if (!window.ethereum) return setAppStatus('noMetaMask')
        try {
            const userDoc = {
                _type: 'users',
                _id: userWalletAddress,
                name: 'Unnamed',
                isProfileImageNft: false,
                profileImage: 'https://about.twitter.com/content/dam/about-twitter/en/brand-toolkit/brand-download-img-1.jpg.twimg.1920.jpg',
                walletAddress: userWalletAddress,
            }
            await client.createIfNotExists(userDoc);
        } catch (error) {
            Router.push('/');
            setAppStatus('error');
        }
    }

    return (
        <TwitterContext.Provider value={{ appStatus, currentAccount, connectWallet }}>
            {children}
        </TwitterContext.Provider>
    )
};
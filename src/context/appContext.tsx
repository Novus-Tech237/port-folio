'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { useUser } from "@clerk/nextjs";
import type { UserResource } from "@clerk/types";

interface AppContextType {
    user: UserResource | null; // Use Clerk's UserResource type or null if not available
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}

interface AppContextProviderProps {
    children: ReactNode;
}

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
    const { user } = useUser(); // Get user from Clerk
    const value: AppContextType = {
        user: user ?? null, // Ensure user is ClerkUser or null, never undefined
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
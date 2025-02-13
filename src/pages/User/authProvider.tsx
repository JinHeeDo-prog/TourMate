// authProvider.tsx
import { User } from "@firebase/auth";
import { useEffect, useState, ReactNode } from "react";
import { AuthContext } from "./authContext";
import { auth } from "./firebase";

interface AuthProviderProps {
  children: ReactNode; // children을 명시적으로 정의합니다.
}

    const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const subscribe = auth.onAuthStateChanged(fbUser => {
        console.log(`구독 실행`, fbUser);
        setUser(fbUser);
        });
        return subscribe;
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
    };

export default AuthProvider;

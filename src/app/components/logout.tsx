import React from 'react';
import { auth } from '../config/firebase-config';
import { signOut } from 'firebase/auth';

function Logout() {
    const  logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div>
            <button className="bg-red-600 hover:bg-red-700 transition-colors rounded p-2 text-blue-50 font-bold"
                    onClick={logout}>
                    Logout
            </button>
        </div>
    );
}

export default Logout;
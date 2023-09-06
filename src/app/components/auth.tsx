import React from 'react';
import { auth, googleProvider } from '../config/firebase-config';
import { createUserWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useState } from "react";

function Auth(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    console.log(auth?.currentUser?.email || 'No user logged in');
    const  signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err);
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <div className="mt-10 flex-col lg:w-1/4">
            <div className="rounded p-5 shadow-xl">
                <div>
                    <input type="email" placeholder="E-Mail..." onChange={(e) => setEmail(e.target.value)} className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"/>
                </div>
                <div  className="mt-5">
                    <input type="password" placeholder="Password..." onChange={(e) => setPassword(e.target.value)} className="w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-blue-500"/>
                </div>
                <div className="mt-5">
                    <button className="bg-blue-600 hover:bg-blue-700 transition-colors rounded p-2 text-blue-50 font-bold" onClick={signIn}>Sign in</button>
                </div>
            </div>
            <div className="mt-10 bg-gray-100 rounded p-5 flex justify-center shadow-xl">
                <button className="bg-blue-600 hover:bg-blue-700 transition-colors rounded p-2 text-blue-50 font-bold" onClick={signInWithGoogle}>Sign in with Google</button>
            </div>

        </div>
    );
}

export default Auth;
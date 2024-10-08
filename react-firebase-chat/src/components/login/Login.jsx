import './login.css';
import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../lib/firebase'; // Ensure the correct path
import { doc, setDoc } from "firebase/firestore"; 
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';  

const Login = () => {
    const [avatar, setAvatar] = useState({
        file: null,
        url: ""
    });

    // Handle avatar file selection
    const handleAvatar = e => {
        if (e.target.files[0]) {
            setAvatar({
                file: e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            });
        }
    }

const upload = async (file) => {
  const storage = getStorage();
  const storageRef = ref(storage, `avatars/${file.name}`);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);
  return url;
};


    // Handle user registration
    const handleRegister = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const { username, email, password } = Object.fromEntries(formData);

        try {
            const res = await createUserWithEmailAndPassword(auth, email, password);
            toast.success('User registered successfully!');
            const imgUrl= await upload(avatar.file)
            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                avatar:imgUrl,
                id:res.user.uid,
                blocked:[],
              });
            await setDoc(doc(db, "userchats", res.user.uid), {
                chats:[],
              });
              toast.success("Account Created! You can login now");
            // Optionally, you can handle user redirection or further processing here
        } catch (err) {
            console.error('Error registering user:', err);
            toast.error("Error registering user: " + err.message);
        }
    };

    // Handle user login
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        const formData = new FormData(e.target);
        const { email, password } = Object.fromEntries(formData);

        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            toast.success('Logged in successfully!');
            // Optionally, you can handle user redirection or further processing here
        } catch (err) {
            console.error('Error logging in:', err);
            toast.error("Error logging in: " + err.message);
        }
        finally{
            setLoading(false);
        }
    }

    return (
        <div className='login'>
            <div className='item'>
                <h2>Welcome back,</h2>
                <form onSubmit={handleLogin}>
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className='seperator'></div>
            <div className='item'>
                <h2>Create an Account</h2>
                <form onSubmit={handleRegister}>
                    <img src={avatar.url || "./avatar.png"} alt="Avatar" />
                    <label htmlFor='file'>Upload an image</label>
                    <input type="file" id="file" style={{ display: "none" }} onChange={handleAvatar} />
                    <input type="text" placeholder="Username" name="username" required />
                    <input type="email" placeholder="Email" name="email" required />
                    <input type="password" placeholder="Password" name="password" required />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;

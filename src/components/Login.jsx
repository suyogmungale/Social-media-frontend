import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import shareVideo from '../asset/share.mp4';
import logo from '../asset/logowhite.png'
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import client from '../client';
import jwt_decode from 'jwt-decode'

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className=' flex justify-start items-center flex-col h-screen'>

            <div className='relative w-full h-full' >

                <video
                    src={shareVideo}
                    type="video/mp4"
                    loop
                    controls={false}
                    muted
                    autoPlay
                    className='w-full h-full object-cover'
                />
                <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
                    <div className='p-5'>
                        <img src={logo} width="130px" alt="img" />

                    </div>
                    <div className='shadow 2xl'>
                        <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_TOKEN}>
                            <GoogleLogin
                                onSuccess={credentialResponse => {
                                    const {email,name,picture,jti} = jwt_decode(credentialResponse.credential);
                                    
                                    const doc = {
                                        _id:jti,
                                        _type: 'userProfile',
                                        username: name,
                                        image: picture
                                    }
                                    async function createDoc(doc) {
                                        try {
                                          const response = await client.createIfNotExists(doc);
                                          console.log(response._id);
                                          navigate('/', { replace: true });
                                        } catch (error) {
                                          console.error(error);
                                        }
                                      }
                                      
                                      createDoc(doc);
                                      
                                      
                                }}

                            />
                        </GoogleOAuthProvider>;
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Login
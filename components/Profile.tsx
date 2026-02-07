
import React from 'react';
import { USER_PROFILE } from '../constants';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 mb-8 pt-10">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <img 
          src={USER_PROFILE.avatar} 
          alt={USER_PROFILE.name} 
          className="relative w-28 h-28 rounded-full border-4 border-white shadow-xl object-cover transform transition-transform group-hover:scale-105"
        />
      </div>
      
      <div className="space-y-1">
        <h1 className="text-3xl font-bold tracking-tight text-slate-800">
          {USER_PROFILE.name}
        </h1>
        <p className="text-purple-600 font-medium text-sm tracking-wide uppercase">
          {USER_PROFILE.role}
        </p>
      </div>

      <p className="max-w-[280px] text-slate-500 text-sm leading-relaxed px-4">
        {USER_PROFILE.bio}
      </p>
    </div>
  );
};

export default Profile;

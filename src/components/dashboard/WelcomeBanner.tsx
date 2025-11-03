import { UserProfile } from "@/src/types/dashboard";
import React from "react";

interface WelcomeBannerProps {
  user: UserProfile;
}

export const WelcomeBanner: React.FC<WelcomeBannerProps> = ({ user }) => (
  <div className="mb-12">
    <div className="bg-gradient-to-r from-[#005d90] to-[#42b3e5] rounded-2xl p-8 text-white">
      <div className="flex flex-col md:flex-row items-center gap-6">
        {/* Profile Image */}
        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
          <img
            src={user.profileImage || "/img/user-2.png"}
            alt={user.name}
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        {/* Welcome Text */}
        <div className="text-center md:text-left flex-1">
          <h2 className="text-2xl font-bold mb-2">
            Welcome back, {user.name}!
          </h2>
          <p className="text-white/90">
            Your account is active and all systems are running smoothly.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <a
            href="/profile"
            className="px-6 py-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors duration-200 font-medium"
          >
            Edit Profile
          </a>
          <a
            href="/cart"
            className="px-6 py-3 bg-[#6fb43f] hover:bg-[#5a9935] rounded-lg transition-colors duration-200 font-medium"
          >
            View Cart
          </a>
        </div>
      </div>
    </div>
  </div>
);

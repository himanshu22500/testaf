import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UserProfile {
  user_data: {
    id: number;
    phone_number: string;
    name: string;
    is_admin: boolean;
    is_driver: boolean;
  };
}

const Profile: React.FC = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://127.0.0.1:8000/logistics/users/profile/', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setProfile(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6 text-royal-blue">My Profile</h1>
      <div className="space-y-4">
        <ProfileField label="Name" value={profile.user_data.name} />
        <ProfileField label="Phone Number" value={profile.user_data.phone_number || 'Not provided'} />
        <ProfileField label="User Type" value={profile.user_data.is_admin ? 'Admin' : (profile.user_data.is_driver ? 'Driver' : 'Customer')} />
      </div>
    </div>
  );
};

const ProfileField: React.FC<{ label: string; value: string }> = ({ label, value }) => {
  return (
    <div>
      <span className="font-semibold text-gray-700">{label}:</span>
      <span className="ml-2">{value}</span>
    </div>
  );
};

export default Profile;
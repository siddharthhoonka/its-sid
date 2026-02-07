
export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string; // Icon name from lucide-react
  color: string; // Tailwind color class
}

export interface UserProfile {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

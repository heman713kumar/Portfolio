import {
  Target, Zap, Users, Cpu, Briefcase, TrendingUp,
  Compass, Anchor, Moon, Flag, Puzzle, Heart,
  GraduationCap, Languages, Share2, Linkedin, Star,
  Feather, Award, Code, Database, Globe, Camera,
  Music, Book, Coffee, GamepadIcon, Dumbbell,
  Palette, MessageCircle, Mail, Phone, MapPin
} from 'lucide-react';

const iconMap = {
  // Skills & Technology
  target: Target,
  zap: Zap,
  code: Code,
  database: Database,
  cpu: Cpu,
  globe: Globe,
  
  // Professional
  briefcase: Briefcase,
  trendingup: TrendingUp,
  users: Users,
  award: Award,
  graduationcap: GraduationCap,
  
  // Personal & Interests
  compass: Compass,
  anchor: Anchor,
  moon: Moon,
  flag: Flag,
  puzzle: Puzzle,
  heart: Heart,
  camera: Camera,
  music: Music,
  book: Book,
  coffee: Coffee,
  gamepad: GamepadIcon,
  dumbbell: Dumbbell,
  palette: Palette,
  
  // Communication
  messagecircle: MessageCircle,
  languages: Languages,
  share2: Share2,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
  mapPin: MapPin,
  
  // General
  star: Star,
  feather: Feather
};

export const getIcon = (iconName) => {
  return iconMap[iconName?.toLowerCase()] || Star;
};

export default iconMap;

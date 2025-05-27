'use client';
import { useState } from 'react';
import {
  Mail,
  Lock,
  Bell,
  User,
  Shield,
  FileText,
  Clock,
  Sun,
  Zap,
  Link2,
  CreditCard,
  Settings,
  Upload,
  Globe,
  HelpCircle,
  Info,
} from 'lucide-react';

const settingsItems = [
  { id: 'email', label: 'Email', description: 'Manage your email settings', icon: Mail },
  { id: 'password', label: 'Password', description: 'Change your password', icon: Lock },
  { id: 'notifications', label: 'Notifications', description: 'Manage notification preferences', icon: Bell },
  { id: 'profile', label: 'Profile', description: 'Edit your profile information', icon: User },
  { id: 'privacy', label: 'Privacy', description: 'Adjust your privacy settings', icon: Shield },
  { id: 'paperSize', label: 'Paper Size', description: 'Set default paper size', icon: FileText },
  { id: 'duration', label: 'Duration', description: 'Set session duration', icon: Clock },
  { id: 'appearance', label: 'Appearance', description: 'Customize app theme', icon: Sun },
  { id: 'security', label: 'Security', description: 'Manage security settings', icon: Zap },
  { id: 'integrations', label: 'Integrations', description: 'Manage connected apps', icon: Link2 },
  { id: 'billing', label: 'Billing', description: 'Manage billing information', icon: CreditCard },
  { id: 'notificationsAdvanced', label: 'Advanced Notifications', description: 'Advanced notification options', icon: Settings },
  { id: 'dataExport', label: 'Data Export', description: 'Export your data', icon: Upload },
  { id: 'language', label: 'Language', description: 'Select app language', icon: Globe },
  { id: 'support', label: 'Support', description: 'Get help and support', icon: HelpCircle },
  { id: 'about', label: 'About', description: 'App version and info', icon: Info },
];

export default function SettingsPage() {
  const [activeSetting, setActiveSetting] = useState<string | null>(null);

  const renderSubmenu = () => {
    if (!activeSetting) return null;

    switch (activeSetting) {
      case 'email':
        return <div>Manage your email here...</div>;
      case 'password':
        return <div>Change your password here...</div>;
      case 'paperSize':
        return (
          <form className="space-y-4 max-w-xs">
            <label className="block font-medium">Paper Size</label>
            <select className="w-full border rounded p-2">
              <option>A4</option>
              <option>Letter</option>
              <option>Legal</option>
            </select>
          </form>
        );
      case 'duration':
        return (
          <form className="space-y-4 max-w-xs">
            <label className="block font-medium">Session Duration (minutes)</label>
            <input type="number" defaultValue={30} className="w-full border rounded p-2" />
          </form>
        );
      default:
        return <div>{`Settings for ${activeSetting}`}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8 sm:p-12 font-sans">
      <h1 className="text-4xl font-bold mb-8 text-center">Settings</h1>
      <div className="flex gap-12">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 flex-shrink-0 w-full max-w-4xl">
          {settingsItems.map(({ id, label, description, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setActiveSetting(id)}
              className={`bg-white p-6 rounded-lg shadow hover:shadow-lg transition flex flex-col justify-between
                ${activeSetting === id ? 'ring-2 ring-blue-500' : ''}
              `}
            >
              <div className="flex items-center gap-3 mb-3">
                <Icon className="w-6 h-6 text-blue-500" />
                <h3 className="text-lg font-semibold">{label}</h3>
              </div>
              <p className="text-sm text-gray-500">{description}</p>
            </button>
          ))}
        </div>

        <div className="flex-1 bg-white rounded-lg shadow p-8 min-w-[300px] max-w-lg">
          {activeSetting ? (
            <>
              <h2 className="text-2xl font-semibold mb-6 capitalize">{activeSetting}</h2>
              {renderSubmenu()}
            </>
          ) : (
            <p className="text-gray-400">Please select a setting to manage.</p>
          )}
        </div>
      </div>
    </div>
  );
}

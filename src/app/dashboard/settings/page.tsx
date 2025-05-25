export default function SettingsPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-2xl font-bold">Settings</h1>
      <p className="text-lg">Welcome to your settings page!</p>
      <p className="text-sm text-gray-500">This is a protected route.</p>
    </div>
  );
}
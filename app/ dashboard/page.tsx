"use client";

import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/lib/supabase";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function DashboardPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <p className="text-white text-xl mb-4">Please sign in to view your dashboard</p>
          <Link href="/login" className="text-blue-400 hover:text-blue-300 font-medium">
            Go to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navbar */}
      <nav className="bg-gray-800 border-b border-gray-700 px-4 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">FutureForge AI</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400">{user.email}</span>
            <button
              onClick={handleLogout}
              className="px-3 py-1.5 text-sm bg-red-600 hover:bg-red-700 rounded-md transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* Dashboard Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <h2 className="text-2xl font-bold mb-6">Welcome back! 👋</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Stats Cards */}
          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-blue-400">Goals</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-400 mt-1">Active goals</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-green-400">Skills</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-400 mt-1">Skills tracked</p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 border border-gray-700">
            <h3 className="text-lg font-semibold mb-2 text-purple-400">Opportunities</h3>
            <p className="text-3xl font-bold">0</p>
            <p className="text-sm text-gray-400 mt-1">Applications sent</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <Link href="/cv-builder" className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition">
              Build CV
            </Link>
            <Link href="/goals" className="px-4 py-2 bg-green-600 hover:bg-green-700 rounded-md transition">
              Set Goals
            </Link>
            <Link href="/opportunities" className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-md transition">
              Find Opportunities
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

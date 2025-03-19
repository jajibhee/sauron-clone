import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Dashboard | Sauron",
  description: "View your property's security status and activity.",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-white">
      <div className="p-4 sm:p-6">
        <Link 
          href="https://jobs.ashbyhq.com/sauron" 
          className="cursor-pointer inline-flex items-center text-sm font-medium text-neutral-600 hover:text-neutral-900 transition-colors"
        >
          {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
          Welcome to the Eye of Sauron
        </Link>
      </div>
      <main>{children}</main>
    </div>
  );
} 
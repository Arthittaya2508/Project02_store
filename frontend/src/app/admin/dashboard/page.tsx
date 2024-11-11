"use client";
import React, { Suspense, ReactNode } from "react";
import Sidebar from "@/app/components/Navigation/Sidebar/sidebar";
import Navbar from "@/app/components/Navigation/Navbar/navbar";
import Dashboard from "./dashboard";

export default function AdminLayoutPage() {
  return (
    <div className="flex">
      {/* Sidebar Component */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow">
        <Navbar />
        <Suspense fallback={<>loading</>}>
          {/* แสดงหน้า Dashboard */}
          <Dashboard />
        </Suspense>
      </div>
    </div>
  );
}

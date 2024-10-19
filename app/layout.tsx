// app/layout.tsx
"use client"; // Client component
import Image from 'next/image';
import { useState } from "react";
import NotificationIcon from "../public/assets/NotificationIcon.svg"
import NotificationOverlay from "./components/NotificationOverlay"; 
import "./globals.css";
import { metadata } from "./metadata";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const [isNotificationVisible, setNotificationVisible] = useState(false);

  const showNotification = () => setNotificationVisible(true);
  const closeNotification = () => setNotificationVisible(false);

  // Safely handle the title
  const title = typeof metadata.title === "string" ? metadata.title : "Default Title";
  const description = metadata.description || "Default Description"; // Provide a fallback description

  return (
    <html lang="en">
      <head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </head>
      <body className="antialiased">
        {children}

        <div className="fixed bottom-4 right-4">
          <button
            onClick={showNotification}
            className="bg-[#00A6DE] flex items-center gap-[10px] text-white py-2 px-4 rounded hover:bg-[#0077a3]"
          >
            <Image src={NotificationIcon} alt="NotificationIcon" />
            Notifications
          </button>
        </div>

        {/* Render Notification Overlay */}
       
          <NotificationOverlay  isVisible={isNotificationVisible} onClose={closeNotification} />
      
      </body>
    </html>
  );
};

export default RootLayout;

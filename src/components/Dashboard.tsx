"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Home,
  BarChart2,
  Star,
  FileText,
  Image as ImageIcon,
  FlaskConical,
  Cuboid,
  Database,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
} from "lucide-react";
import Link from "next/link";
import Joyride, { Step } from "react-joyride";
import Image from "next/image";

export default function Dashboard() {
  const [runTour, setRunTour] = useState(true);

  const sidebarItems = [
    {
      icon: Home,
      label: "Home",
      className: "flex flex-col items-center home-button",
    },
    {
      icon: BarChart2,
      label: "Dashboards",
      className: "flex flex-col items-center dashboards-button",
    },
    {
      icon: Star,
      label: "Views",
      className: "flex flex-col items-center views-button",
    },
    {
      icon: FileText,
      label: "Documents",
      className: "flex flex-col items-center documents-button",
    },
    {
      icon: ImageIcon,
      label: "Reviews",
      className: "flex flex-col items-center image-button",
    },
    {
      icon: FlaskConical,
      label: "Tests & Runs",
      className: "flex flex-col items-center tests-button",
    },
    {
      icon: Cuboid,
      label: "Data Models",
      className: "flex flex-col items-center data-button",
    },
    {
      icon: Database,
      label: "Traceability Matrix",
      className: "flex flex-col items-center matrix-button",
    },
  ];

  const steps: Step[] = [
    {
      target: ".sidebar",
      content:
        "This is a sidebar to show the options in the main menu",
      disableBeacon: true,
    },
    {
      target: ".home-button",
      content:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      target: ".dashboards-button",
      content:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      target: ".views-button",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      target: ".documents-button",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      target: ".image-button",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      target: ".tests-button",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      target: ".data-button",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      target: ".matrix-button",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      target: ".guide",
      content:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showSkipButton={true}
        styles={{
          options: {
            primaryColor: "#3b82f6",
          },
        }}
      />

      <aside className="sidebar w-24 bg-black text-white flex flex-col items-center py-2 overflow-y-auto max-h-full px-2">
        <div className="aspect-square w-full bg-red-500 rounded-sm flex items-center justify-center text-white font-bold text-xl">
          V
        </div>
        <nav className="space-y-2">
          {sidebarItems.map((item, index) => (
            <div key={index} className={item.className}>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-red-500 hover:bg-gray-800 w-12 h-12 rounded-lg"
              >
                <item.icon className="h-6 w-6" />
              </Button>
              <span className="text-xs mt-1 text-center text-gray-400">
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="bg-white shadow-sm p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="destructive" size="sm">
              Tutorial - Mauro
            </Button>
            <Button variant="outline" size="sm">
              Baseline: Current
            </Button>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="sm">
              Refresh
            </Button>
            <Button variant="ghost" size="sm">
              Settings
            </Button>
            <Button variant="destructive" size="sm">
              MR
            </Button>
          </div>
        </header>

        {/* Dashboard content */}
        <div className="p-6 space-y-6">
          <div className="flex space-x-6">
            {/* Welcome card */}
            <Card className="welcome-card flex-1">
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-blue-500 mb-2">
                    Welcome!
                  </h2>
                  <p className="text-gray-600 mb-2">
                    Visure Authoring allows teams to collaborate, review and
                    approve project elements.
                  </p>
                  <p className="text-gray-600">
                    Not sure where to start? Check out{" "}
                    <Link href="#" className="text-blue-500 hover:underline">
                      this guide
                    </Link>
                    .
                  </p>
                </div>
                <div className="w-1/3">
                  <Image
                    src="/placeholder.png"
                    width={150}
                    height={150}
                    alt="Team collaboration"
                    className="w-full"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Need help card */}
            <Card className="help-card w-1/3 bg-emerald-400 text-white">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold mb-2">Need help?</h3>
                <p className="mb-4">
                  Contact our support team through{" "}
                  <Link href="#" className="underline">
                    our portal
                  </Link>{" "}
                  or at support@visuresolutions.com
                </p>
                <Button
                  variant="secondary"
                  className="bg-white text-emerald-500 hover:bg-gray-100"
                >
                  Contact Us
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="flex space-x-6 guide">
            {/* Guide for Requirements Engineers */}
            <Card className="guide-card flex-1">
              <CardHeader>
                <CardTitle>Guide for Requirements Engineers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-blue-500">
                  <li>Best practices for better requirement management</li>
                  <li>6 tips for perfect requirement gathering</li>
                  <li>
                    Requirement Management – What are the business benefits
                  </li>
                  <li>Failure Mode and Effects Analysis (FMEA)</li>
                </ul>
              </CardContent>
            </Card>

            {/* What's New */}
            <Card className="w-1/3">
              <CardHeader>
                <CardTitle>What&apos;s New</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-blue-500">
                    What&apos;s New in Visure V8
                  </h4>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-500">
                    Unveiling Visure V8
                  </h4>
                  <p className="text-sm text-gray-600">
                    Join us for an exclusive webinar, &apos;Unveiling V8,&apos; where we
                    showcase the latest features and advancements in Visure
                    Solutions&apos; version 8.
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    Est. reading time
                    <br />
                    11 minutes
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Questions */}
          <Card>
            <CardContent className="p-6 text-center">
              <h3 className="text-xl font-semibold mb-2">Questions?</h3>
              <p className="text-gray-600 mb-4">
                Contact one of our sales representatives
                <br />
                at{" "}
                <Link
                  href="mailto:info@visuresolutions.com"
                  className="text-blue-500 hover:underline"
                >
                  info@visuresolutions.com
                </Link>
              </p>
              <div className="flex justify-center space-x-4">
                <Button variant="outline" size="icon">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon">
                  <Youtube className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Home,
  BarChart2,
  Star,
  FileText,
  Image,
  FlaskConical,
  Cuboid,
  Database,
  MessageCircle,
  RefreshCw,
  Settings,
  Plus,
  Minus,
  Sun,
  PanelLeftClose,
  Filter,
  ChevronDown,
  Maximize2,
  Puzzle,
  RotateCcw,
  List,
  Sparkles,
  GitCompareArrows,
  LockOpen,
  Lock,
} from "lucide-react";
import Link from "next/link";
import Joyride, { Step } from "react-joyride";

export default function Documents() {
  const [runTour, setRunTour] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [isLock, setIsLock] = useState(false);

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
      icon: Image,
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
        "This is the main navigation sidebar. You can access different sections of the application from here.",
      disableBeacon: true,
    },
    {
      target: ".header",
      content:
        "This is the header area. You can switch between projects, search for content, and access quick actions.",
    },
    {
      target: ".toolbar",
      content:
        "This toolbar contains various actions you can perform on the document, such as adding new elements or changing the view.",
    },
    {
      target: ".document-title",
      content:
        "This is the main title of your document. You can edit it directly.",
    },
    {
      target: ".document-content",
      content:
        "This is the main content area of your document. You can add and edit different sections here.",
    },
    {
      target: ".right-sidebar",
      content:
        "This sidebar shows additional information and actions related to the current document.",
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
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="header bg-white shadow-sm p-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="destructive" size="sm">
              Tutorial - Mauro
            </Button>
            <Button variant="outline" size="sm">
              Baseline: Current <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="flex-1 mx-4">
            <Input
              type="text"
              placeholder="Products requirements, System requirements..."
              className="w-full"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="ghost" size="icon">
              <RefreshCw className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="sm">
              MR
            </Button>
          </div>
        </header>

        {/* Toolbar */}
        <div className="toolbar bg-gray-100 p-2 flex items-center space-x-2">
          <Button variant="ghost" size="icon">
            <List className="h-4 w-4 list-icon" />
          </Button>
          <Button variant="ghost" size="icon">
            <Plus className="h-4 w-4 plus-icon" />
          </Button>
          <Button variant="ghost" size="icon">
            <Minus className="h-4 w-4 minus-icon" />
          </Button>
          <Button variant="ghost" size="icon">
            <Sparkles className="h-4 w-4" />
          </Button>
          {isSelected && (
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLock(!isLock)}
            >
              {isLock ? (
                <Lock className="h-4 w-4" />
              ) : (
                <LockOpen className="h-4 w-4" />
              )}
            </Button>
          )}
          <Button variant="ghost" size="icon">
            <GitCompareArrows className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="icon">
            <Puzzle className="h-4 w-4" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="icon">
            <Maximize2 className="h-4 w-4" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="sm">
            100% <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="icon">
            <Filter className="h-4 w-4" />
          </Button>
        </div>

        {/* Document content */}
        <div className="flex-1 flex overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6">
            <div className="document-title mb-4">
              <h1 className="text-3xl font-bold">Product Requirements</h1>
            </div>
            <div className="document-content space-y-6">
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">1 Introduction</h2>
                  <p className="text-gray-600">
                    This is the document introduction. Expect here to find some
                    context elements. The introduction is useful to have a
                    better understanding of the requirements.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">1.1 Purpose</h2>
                  <p className="text-gray-600">
                    This specification generally follows the format described in
                    IEEE 830 for a system specification. Verification methods
                    and when verification is to be performed for each
                    requirement should be provided.
                  </p>
                </CardContent>
              </Card>
              <Card onClick={() => setIsSelected(!isSelected)}>
                <CardContent
                  className={`p-4 ${
                    isSelected ? "bg-slate-200 zoom-in-105" : ""
                  }`}
                >
                  <h2 className="text-xl font-semibold mb-2">
                    1.2 Product Scope
                  </h2>
                  <p className="text-gray-600">
                    This specification establishes the development and
                    qualification requirements for a Cool Medical Device,
                    hereafter referred to at the CMD. The CMD provides medical
                    capabilities to support mobile and Bedroom operations.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <h2 className="text-xl font-semibold mb-2">
                    1.3 Standards and References
                  </h2>
                  <p className="text-gray-600">
                    The following table lists the applicable documents that
                    contain the standards and specifications pertaining to the
                    program development.
                  </p>
                  <p className="text-gray-600 mt-2">
                    Table 1. Standards and Specifications Documents
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="right-sidebar w-64 bg-white border-l border-gray-200 p-4 overflow-y-auto">
            <div className="space-y-4">
              <Button variant="outline" size="sm" className="w-full">
                <MessageCircle className="mr-2 h-4 w-4" /> Add comment
              </Button>
              <div>
                <h3 className="font-semibold mb-2">Details</h3>
                <p className="text-sm text-gray-600">
                  Additional information about the document can be displayed
                  here.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Associated Files</h3>
                <p className="text-sm text-gray-600">
                  Links to related documents or files can be listed here.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">History</h3>
                <p className="text-sm text-gray-600">
                  A log of recent changes and updates to the document.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Linked Items</h3>
                <p className="text-sm text-gray-600">
                  Other items in the system that are related to this document.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Comments</h3>
                <p className="text-sm text-gray-600">
                  Recent comments or discussions about the document.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Approvals</h3>
                <p className="text-sm text-gray-600">
                  Status of any pending approvals for this document.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

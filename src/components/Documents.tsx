"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { RefreshCw, Settings, ChevronDown, LucideSparkles } from "lucide-react";
import Joyride, { Step } from "react-joyride";
import Sidebar from "./common/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusCircle,
  faMinusCircle,
  faList,
  faUndoAlt,
  faPuzzlePiece,
  faExpandArrowsAlt,
  faFilter,
  faChevronDown,
  faInfoCircle,
  faFile,
  faClock,
  faLink,
  faComment,
  faCheckDouble,
  faSheetPlastic,
  faShare,
  faStar,
  faLock,
  faLockOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function Documents() {
  const [runTour, setRunTour] = useState(true);
  const [isSelected, setIsSelected] = useState(false);
  const [isLock, setIsLock] = useState(false);

  const steps: Step[] = [
    {
      target: ".sidebar",
      content:
        "You can access to all our different modules from here.",
      disableBeacon: true,
    },
    {
      target: ".header",
      content:
        "You can switch between projects and search for content",
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
        "This is the main content area of your document. Here you will see your requirements separated into different clickeable items.",
    },
    {
      target: ".right-sidebar",
      content:
        "When you click an item, here you will see all the information related to that item: details, version history, comments, etc.",
    },
    {
      target: ".plus-icon",
      content:
        "A new item will be created right below the currently selected item.",
    },
    {
      target: ".addchild-icon",
      content:
        "A new item will be created right below the currently selected item and as its child in the hierarchy tree.",
    },
    {
      target: ".ai-icon",
      content:
        "Use our AI assistant to generate high quality requirements automatically",
    },    
    {
      target: ".lock-icon",
      content:
        "As soon as you finish, lock it back again. So other people can now edit it.",
    },    
    {
      target: ".unlock-icon",
      content:
        "After clicking an item, unlock it to start editing it. During this period, other users will not be able to edit the same item.",
    },         
    {
      target: ".details-icon",
      content:
        "When selecting an item, you can see all details here.",
    }, 
  ];

  const sidebarItems = [
    { icon: faInfoCircle, label: "Details", className: "details-icon" },
    { icon: faFile, label: "Associated Files", className: "afiles-icon" },
    { icon: faClock, label: "History", className: "history-icon" },
    { icon: faLink, label: "Linked Items", className: "linked-icon" },
    { icon: faComment, label: "Comments", className: "comments-icon" },
    { icon: faCheckDouble, label: "Approvals", className: "approvals-icon" },
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

      <Sidebar />

      {/* Main content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="header bg-white shadow-sm p-2 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Button variant="destructive" size="sm">
              Tutorial
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
        <div className="toolbar bg-gray-100 p-2 flex items-center w-full border-b border-zinc-200 text-gray-600">
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faList} className="h-5 w-5" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faPlusCircle} className="h-5 w-5 plus-icon" />
          </Button>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faMinusCircle} className="h-5 w-5 addchild-icon" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="icon">
            <LucideSparkles className="h-5 w-5 ai-icon" />
          </Button>

          {isSelected && (
            <>
              <div className="border-l border-gray-300 h-6 mx-2"></div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsLock(!isLock)}
              >
                {isLock ? (
                  <FontAwesomeIcon icon={faLock} className="h-5 w-5 lock-icon" />
                ) : (
                  <FontAwesomeIcon icon={faLockOpen} className="h-5 w-5 unlock-icon" />
                )}
              </Button>
              <div className="border-l border-gray-300 h-6 mx-2"></div>
            </>
          )}
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faUndoAlt} className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faPuzzlePiece} className="h-5 w-5" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="icon">
            <FontAwesomeIcon icon={faExpandArrowsAlt} className="h-5 w-5" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <Button variant="ghost" size="sm">
            100%{" "}
            <FontAwesomeIcon icon={faChevronDown} className="ml-2 h-5 w-5" />
          </Button>
          <div className="border-l border-gray-300 h-6 mx-2"></div>
          <div className="ml-auto">
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faFilter} className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faSheetPlastic} className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <FontAwesomeIcon icon={faShare} className="h-5 w-5" />
            </Button>
          </div>
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
          <div className="right-sidebar">
            <div className="bg-zinc-700 w-20 p-4 text-white h-full flex flex-col items-center justify-between">
              <div className="space-y-6">
                {sidebarItems.map((item, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center text-gray-400"
                  >
                    <FontAwesomeIcon icon={item.icon} className={`text-xl ${item.className}`} />
                    <span className="text-xs text-center pt-2">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import Documents from "@/components/Documents";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Visure - Documents",
  description:
    "A clone of the Visure Authoring dashboard with an onboarding tour",
};

export default function Home() {
  return <Documents />;
}

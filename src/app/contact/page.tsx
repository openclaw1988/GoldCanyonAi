import { Metadata } from "next";
import ClientContactPage from "./client";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return <ClientContactPage />;
}

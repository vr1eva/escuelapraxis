"use client"

import { NextStudio } from "next-sanity/studio";
import { createSanityConfig } from "@/actions";

const config = createSanityConfig()

export default function AdminPage() {
    return <NextStudio config={config} />
}
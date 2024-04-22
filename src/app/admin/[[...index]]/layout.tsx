import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Admin",
    description: "Next Sanity Studio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body >
                {children}
            </body>
        </html>
    );
}

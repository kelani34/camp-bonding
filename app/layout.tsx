import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Camp Team Bonding",
	description: "Connect, Grow, Succeed and Collaborate.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}

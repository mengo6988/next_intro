import "@/app/ui/global.css"
import { inter } from "@/app/ui/fonts";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
			{/* font will be added throughout the website with antialiased from tailwind to smoothen out the fonts */}
		</html>
	);
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white">
        <header className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
          <h1 className="text-2xl font-bold">YouTube Downloader</h1>
        </header>
        <main className="container mx-auto p-4">{children}</main>
        <footer className="text-center p-4 mt-8 border-t border-gray-700">
          <p>&copy; {new Date().getFullYear()} YouTube Downloader. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

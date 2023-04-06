import "./globals.css"

export const metadata = {
   title: "Traversy Media",
   description: "Generated by create next app",
   keywords: "web development, web design, javascript"
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body>{children}</body>
      </html>
   )
}

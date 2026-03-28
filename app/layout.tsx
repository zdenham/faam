import "./globals.css";

export const metadata = {
  title: "FAAM — Connect Restaurants with Creators",
  description:
    "FAAM matchmakes restaurants and brands with creators and influencers to boost visibility and reward creators with perks and free food.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

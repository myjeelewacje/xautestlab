import type {Metadata} from "next";import "./globals.css";
export const metadata:Metadata={title:"XAUTestLab — XAUUSD MT5 Bot Testing",description:"Follow live-tested XAUUSD automation for MT5, vote on access, and join the testing phase.",openGraph:{title:"XAUTestLab — XAUUSD MT5 Bot Testing",description:"Watch the bot. Follow the tests. Shape the access.",type:"website"},icons:{icon:"/icon.svg"}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}

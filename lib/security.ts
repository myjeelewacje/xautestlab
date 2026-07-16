import {createHash,randomUUID,timingSafeEqual} from "crypto";
import {cookies,headers} from "next/headers";
import {SignJWT,jwtVerify} from "jose";
export const clean=(s:string,max=500)=>s.replace(/[<>]/g,"").replace(/\s+/g," ").trim().slice(0,max);
export async function ipHash(){const h=await headers();const ip=(h.get("x-forwarded-for")||"unknown").split(",")[0].trim();return createHash("sha256").update(ip+(process.env.IP_HASH_SECRET||"dev-only")).digest("hex")}
export async function visitorToken(){const c=await cookies();let id=c.get("xau_visitor")?.value;if(!id){id=randomUUID();c.set("xau_visitor",id,{httpOnly:true,sameSite:"lax",secure:process.env.NODE_ENV==="production",maxAge:31536000,path:"/"})}return createHash("sha256").update(id).digest("hex")}
const key=()=>new TextEncoder().encode(process.env.ADMIN_SESSION_SECRET||"development-secret-change-me-now");
export async function createAdminSession(){return new SignJWT({role:"admin"}).setProtectedHeader({alg:"HS256"}).setIssuedAt().setExpirationTime("8h").sign(key())}
export async function isAdmin(){try{const t=(await cookies()).get("xau_admin")?.value;if(!t)return false;await jwtVerify(t,key());return true}catch{return false}}
export function passwordMatches(value:string){const configured=process.env.ADMIN_PASSWORD||"";const expected=((configured.startsWith('"')&&configured.endsWith('"'))||(configured.startsWith("'")&&configured.endsWith("'")))?configured.slice(1,-1):configured;if(!expected||value.length!==expected.length)return false;return timingSafeEqual(Buffer.from(value),Buffer.from(expected))}

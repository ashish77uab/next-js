import { NextRequest, NextResponse } from "next/server";
export default function middleware(req) {
  //   const path = req.nextUrl.pathname;
  //   const protectedRoutes = ["/about-us", "/contact-us", "/"];
  //   if (protectedRoutes.includes(path)) {
  //     return NextResponse.redirect("http://localhost:3000/auth/login");
  //   }
  return NextResponse.next();
}

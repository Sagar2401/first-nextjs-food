import { NextResponse, NextRequest } from "next/server";

const publicPath = ["/login", "/", "/register"];

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  let isLogin = request.cookies.get("isLogin")?.value;

  if (new RegExp(/^.*(fonts|_next|vk.com|favicon).*$/).test(request.url)) {
    return NextResponse.next();
  }

  if (!!isLogin) {
    if (!publicPath.includes(request.nextUrl.pathname)) {
      return NextResponse.next(); // Allow access to non-public routes
    } else {
      return NextResponse.redirect(new URL("/home", request.url)); // Redirect to the dashboard for public routes
    }
  } else {
    if (!publicPath.includes(request.nextUrl.pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    } else {
      return NextResponse.next();
    }
  }
}
export const config = {
  matcher: ["/:path*", "/login/:path*"],
};

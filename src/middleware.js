import { clerkMiddleware } from '@clerk/nextjs/server';

const middleware = clerkMiddleware();

export default middleware;

export const config = {
  matcher: [
    // Ignore Next.js internals and static files
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};

'use client';

import { useEffect } from 'react';

export default function TawkToChat() {
  useEffect(() => {
    const s1 = document.createElement("script");
    s1.async = true;
    s1.src = "https://embed.tawk.to/681261106407aa1903369c5f/1iq3smacm";
    
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    const s0 = document.getElementsByTagName("script")[0];
    s0.parentNode.insertBefore(s1, s0);
  }, []);

  return null;
}


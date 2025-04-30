// components/LogRocketInitializer.jsx
'use client';

import { useEffect } from 'react';
import LogRocket from 'logrocket';

export default function LogRocketInitializer() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      LogRocket.init('tjh6br/first-fiverr-project');
    }
  }, []);

  return null;
}

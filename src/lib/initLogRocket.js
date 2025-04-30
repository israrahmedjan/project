// lib/logrocket.js
'use client'
import LogRocket from 'logrocket';


export function initLogRocket() {
  if (typeof window !== 'undefined') {
    LogRocket.init('tjh6br/first-fiverr-project');
  }
}

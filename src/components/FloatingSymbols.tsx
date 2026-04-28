"use client";

import React, { useEffect, useState } from 'react';

interface SymbolData {
  id: number;
  text: string;
  top: string;
  left: string;
  size: string;
  opacity: number;
  duration: string;
  delay: string;
}

const symbolsList = ["</>", "{ }", "( )", "[ ]", "=>", "&&", "||", "!=", ";", "const", "git", "npm", "py", "js", "ts", "cs"];

export default function FloatingSymbols({ density = 10 }: { density?: number }) {
  return null;
}

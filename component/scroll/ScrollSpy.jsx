"use client";

import { useEffect } from "react";

export default function ScrollUrlSync() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll("main section[id]"));

    const updateUrl = (hash = "") => {
      const url = window.location.pathname + window.location.search + hash;
      const current =
        window.location.pathname +
        window.location.search +
        window.location.hash;

      if (url !== current) {
        window.history.replaceState(null, "", url);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        const firstSection = sections[0];

        if (firstSection && firstSection.getBoundingClientRect().top >= 80) {
          updateUrl("");
          return;
        }

        const visibleSections = sections.filter((section) => {
          const rect = section.getBoundingClientRect();

          return (
            rect.top <= window.innerHeight * 0.4 &&
            rect.bottom > window.innerHeight * 0.4
          );
        });

        if (visibleSections.length > 0) {
          updateUrl(`#${visibleSections[0].id}`);
        }
      },
      {
        root: null,
        rootMargin: "-20% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}

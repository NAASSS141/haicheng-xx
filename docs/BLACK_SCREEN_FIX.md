# Black Screen Safety Fix

This patch addresses a likely black-screen failure mode.

## Fixes

- The portrait media query no longer sets `.app { display:none }`.
- The rotate hint is a translucent overlay, not a hard replacement.
- Image preloading now has a timeout fallback.
- Boot/runtime preload errors show a visible message instead of leaving the page black.

## Why

On some mobile browsers or WebViews, the old portrait rule could make the game area invisible. If the rotate hint failed to render clearly, the user would see a black screen.

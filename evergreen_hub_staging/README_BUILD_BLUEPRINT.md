# Evergreen Hub Build Blueprint & Assembly Guide

**Builder Note:** This document guides the final assembly of all components into a single, functional staging environment before Council review.

## 🎯 Goal
To create a fully integrated, clickable prototype simulating the paid user experience for the Evergreen Asset Hub.

## 🛠️ Required Source Assets (Source Location $\rightarrow$ Target Link/Placement)

1. **Core Architecture:** `design/EvergreenHub_CRO_Architecture_Plan.md` (Must dictate flow).
2. **Design System:** Components from `design/component_library_manifest.css` and related HTML structures.
3. **Copywriting Master:** Final polished copy set by Quill (to be integrated into the core HTML).
4. **Technical Validation:** The working logic derived from Cody's review of technical feasibility.
5. **Animation Polish:** All finalized animations supplied by Ari.

## 🏗️ Assembly Steps (For Team Leaders)

1. **Structure First:** Create `site/evergreen_hub_staging/index.html` using the structure defined in `design/Master_Authority_Implementation_Blueprint_v1.md` as the base HTML skeleton.
2. **Inject Content:** Place all finalized, non-linked content into subdirectories within staging (e.g., `/assets/demos/`, `/assets/copy/`).
3. **Connect Logic:** Cody must build the integration layer that calls assets from `design/deliverables/templates/...` files.
4. **Final Review:** Once all components are wired, update this README with direct links to the live staging pages for QA.
# Silver Tier Service Package Templates

## Overview
These HTML templates are reusable components for the "Data Integrity Audit" (Silver) service package. They allow us to quickly generate client-facing reports and action plans without writing code from scratch.

## Files Created Today
1. **`silver_audit_summary.html`**: A summary report showing top 3 failure points, cost of inaction, and links to the Action Plan.
2. **`executive_brief.html`**: An executive brief with situation overview, strategic findings (grid layout), and a call-to-action button.
3. **`silver_action_plan.html`**: A checklist-style interactive plan broken into 90-day phases (Diagnostics -> Automation -> Optimization).

## How to Use
- Replace placeholders like `{{CLIENT_NAME}}`, `{{FAILURE_POINT_1_TITLE}}`, etc., with actual client data before sending.
- Ensure all images and logos are inserted in the header sections as needed.
- Host these on your web server or static hosting solution (e.g., GitHub Pages, Netlify) to share via link.

## Integration Notes for Wren/Quill:
- When writing blog posts (`site/blog/hvac_mistakes.html`), include a "Get Your Audit" CTA button linking to `silver_audit_summary.html`. 
- Use the Action Plan template as an attachment or embedded section within your final SEO content.

## Next Steps for Cody:
- Run SEO integrity checks on these templates (meta tags, headings) before we package them into the Gold Tier visual flow map.
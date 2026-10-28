# Data Independence Checklist

## Purpose
Use this checklist to verify your business truly owns its data, can export it legally when needed, and has not fallen into vendor lock-in traps.

---

### Section 1: Ownership Verification
- [ ] **Review Terms of Service (ToS):** Confirm that customer records, transaction logs, content uploads, and metadata are explicitly stated as *your* property upon cancellation or termination. Flag any clauses requiring deletion of data on exit.
- [ ] **Check Data Portability Clauses:** Ensure your provider supports standard export formats (CSV, JSON, XML) via API or admin panel without hidden fees or rate limits that make full extraction impractical.
- [ ] **Audit Third-Party Access Logs:** Verify who else can access your data (e.g., analytics firms, ad networks). If you cannot revoke their access independently, note this as a dependency risk.

### Section 2: Export Capabilities Test
- [ ] **Perform Full Data Export Simulation:** Request an export of all customer records today. Does it include:
    - Contact info?
    - Transaction history?
    - Notes/communications?
    - Uploaded files/media?
    - Custom fields or tags?
- [ ] **Validate File Integrity:** Open exported CSVs in a spreadsheet tool to ensure no truncation, encoding errors (UTF-8), or missing rows.
- [ ] **Test Incremental Sync:** If the provider offers real-time sync APIs, test pulling recent changes over 24 hours. Does it capture new leads, orders, or comments?

### Section 3: Exit Strategy Readiness
- [ ] **Draft a Vendor Switch Plan Before Crisis Hits:** Identify alternative tools that can import your exported data directly (see Phase 2 of the Autonomy Guide).
- [ ] **Store Offsite Backup Copies:** Keep encrypted backups of exports in multiple locations (local SSD, cloud storage like Backblaze B2, or physical media). Avoid storing all copies on a single provider.
- [ ] **Document API Rate Limits & Costs:** Record current usage vs. limits and associated costs. If you hit the limit mid-migration, could extraction fail? Document workarounds (e.g., background jobs, pagination hacks).

### Section 4: Compliance & Legal Safeguards
- [ ] **GDPR/CCPA Ready?** If operating in EU or California:
    - Can users request deletion/export of their data easily?
    - Is there a documented process for honoring "right to be forgotten" requests within legal timelines?
- [ ] **Review Privacy Policies:** Ensure your own privacy policy matches what customers expect regarding third-party sharing. Misalignment can lead to lawsuits or regulatory fines.

### Section 5: Red Flags – When You’re Not Independent Yet
⚠️ **Warning Signs of Vendor Lock-In**:
1. The provider charges per-record exports exceeding reasonable thresholds (e.g., >$0.01/row).
2. They require you to keep an active subscription even after requesting data portability.
3. Export files are locked in proprietary formats requiring paid tools to open/edit.
4. No clear documentation on how often backups must be refreshed or what happens if service is interrupted.
5. You rely solely on their dashboard UI for reporting with no SQL/database access available.

---

## Next Steps After Completion
If you pass this checklist:
- Celebrate small wins! Document where vulnerabilities were found and fixed.
- If gaps exist, prioritize them based on risk level (e.g., compliance issues > minor formatting problems).
- Share results with stakeholders to build consensus around continuing investment in data sovereignty initiatives.
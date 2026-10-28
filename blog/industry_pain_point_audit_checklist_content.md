# Industry Pain Point Audit Checklist
## Executive Summary
**Purpose:** Use this checklist to identify critical data integrity risks and compliance gaps in HVAC, Dental, and Veterinary practices.
**Value Prop:** Avoiding the average $3.31M cost of a single data breach (Sol's Research).

---

### 🏠 Sector: Heating, Ventilation & Air Conditioning (HVAC)

| Pain Point | Risk Level | Impact on Business | Recommended Fix |
| :--- | :--- | :--- | :--- |
| **Unauthorized Remote Access** | 🔴 Critical | Technicians can access client networks to change thermostat settings or install malware without permission.
- Cost: Average breach cost ~$4.8M for HVAC firms (based on industry data).
- Fix:
  - Implement strict MFA for all remote tools (AnyDesk, TeamViewer).
  - Use segmented VLANs; never put client networks and technician laptops on the same subnet.

| **Unencrypted Field Data** | 🟠 High | Customer PII (names, addresses) stored in unencrypted Excel files or cloud drives is easily stolen during a hack.
- Cost: $3.5M per incident average for HVAC sector.
- Fix:
  - Enforce AES-256 encryption on all laptops and field devices.
  - Use encrypted cloud storage (e.g., verified secure buckets) with access logs enabled.

| **Lack of Access Revocation** | 🟠 High | When a technician leaves, their credentials remain active indefinitely, allowing them to re-enter the network or client systems years later.
- Cost: Significant liability and reputation damage.
- Fix:
  - Automated script to disable all user accounts upon employee termination (integrate with HR system).
  - Quarterly review of active sessions for former employees.

---

### 🦷 Sector: Dental Practices

| Pain Point | Risk Level | Impact on Business | Recommended Fix |
| :--- | :--- | :--- | :--- |
| **Legacy Imaging Software** | 🔴 Critical | Older dental imaging software often contains unpatched vulnerabilities that attackers exploit to steal patient X-rays and medical history.
- Cost: $4.2M per incident (higher than average).
- Fix:
  - Audit all installed imaging applications; vendor-specific patch management is mandatory.

| **Email Marketing Leaks** | 🟠 High | Dental practices often send emails containing PII to patients or partners without encryption, exposing sensitive data in transit and logs.
- Cost: $2.9M average cost of exposure via email logging.
- Fix:
  - Use S/MIME encryption for all external medical communication.

| **Patient Portal Breaches** | 🔴 Critical | Patient portals are frequently targeted; if credentials are weak, attackers can access full records including payment info and health history.
- Cost: $3.8M per breach average.
- Fix:
  - Multi-factor authentication (MFA) is mandatory for all patient portal logins.

---

### 🐾 Sector: Veterinary Clinics

| Pain Point | Risk Level | Impact on Business | Recommended Fix |
| :--- | :--- | :--- | :--- |
| **Cloud Backup Misconfigurations** | 🔴 Critical | Publicly accessible S3 buckets or misconfigured cloud drives used for animal records are often the first point of entry.
- Cost: $5.1M per breach (highest among veterinary).
- Fix:
  - Regular automated scans to detect open storage endpoints; enforce 'private' access by default.

| **Mobile App Vulnerabilities** | 🟠 High | Veterinary apps used for scheduling or telehealth often lack security updates, allowing attackers to intercept appointment details and pet health data.
- Cost: $3.9M per incident average.
- Fix:
  - Conduct annual third-party penetration testing on all mobile applications.

| **Supply Chain Compromises** | 🟠 High | Veterinary clinics rely heavily on suppliers for medication; compromised supplier software can lead to malware injections into clinic systems.
- Cost: $3.6M per incident average.
- Fix:
  - Strict vetting of all third-party vendors and their security posture before integration.
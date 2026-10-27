// data_flow_demo_v2_modular.js
// Simple client-side logic to make the modular demo interactive without external APIs.

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('leadFormModular');
  const statusBox = document.getElementById('statusBoxModular');

  if (form && statusBox) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const nameInput = document.getElementById('name').value;
      const serviceSelect = document.getElementById('service');
      
      // Basic validation
      if (!nameInput || !serviceSelect.value) return;

      // Simulate API call / data processing delay (1.5s)
      statusBox.style.borderColor = 'orange';
      statusBox.innerHTML = `Processing for ${nameInput}... <br><small>(Simulating Data Cleansing & Standardization)</small>`;
      
      await new Promise(r => setTimeout(r, 1200)); // Simulate network delay

      // Success state (simulated)
      statusBox.style.borderColor = '#4CAF50';
      statusBox.innerHTML = `✓ Data Integrated Successfully!<br>Client: <strong>${nameInput}</strong><br>Tier Requested: ${serviceSelect.value}<br>Status: Ready for CRM Sync.`;

      // Reset form after 3 seconds (optional, comment out if you want persistent success state)
      setTimeout(() => {
        statusBox.innerHTML = `Status: Awaiting Submission...`;
        statusBox.style.borderColor = '#ccc';
      }, 8000);
    });

    // Add simple error handling for empty fields
    form.addEventListener('input', () => {
      if (!form.checkValidity()) {
        statusBox.innerHTML = 'Please fill all required fields.';
      }
    });
  } else {
    console.warn('DOM elements not found. Ensure HTML structure matches.');
  }
});
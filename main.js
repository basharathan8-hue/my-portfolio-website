// Data for Case Studies
const caseStudiesData = [
  {
    id: "dental-voice-agent",
    tag: "Voice AI & Healthcare",
    badgeColor: "border-amber-500/30 text-amber-400 bg-amber-500/10",
    title: "Autonomous AI Voice Receptionist & Emergency Triage",
    industry: "Multi-Location Dental Clinics",
    heroMetric: "82% Call Recovery",
    heroMetricSub: "Saved $14K/mo in missed dental procedures",
    timeline: "3 Weeks to Production",
    stack: ["Retell AI", "Vapi", "n8n (Self-Hosted)", "OpenAI GPT-4o", "Google Calendar API", "Twilio SMS", "Supabase"],
    metrics: [
      { label: "Missed Call Recovery", val: "82%" },
      { label: "Voice Response Latency", val: "< 750ms" },
      { label: "Weekly Staff Saved", val: "24 hrs" },
      { label: "Booking Accuracy", val: "99.8%" }
    ],
    problem: "The clinic was losing patient inquiries during peak hours and evenings. Human receptionists couldn't answer simultaneous phone calls while handling in-person patients. 41% of callers hung up on the legacy automated voicemail.",
    solution: "Engineered an empathetic, natural-sounding voice agent using Retell AI + Vapi, orchestrating logic via self-hosted n8n webhooks. The agent screens acute pain, verifies doctor schedules with Google Calendar in real time, reserves slots, sends Twilio confirmation SMS, and synchronizes with the clinic CRM.",
    architecture: [
      { title: "1. WebRTC & Twilio SIP Trunk", desc: "Captures caller audio with ultra-low packet latency and hands off to speech recognition." },
      { title: "2. Deepgram Nova-2 + GPT-4o", desc: "Transcribes speech in ~180ms and classifies dental urgency vs. routine cleaning." },
      { title: "3. n8n Dynamic Function Calling", desc: "Triggers /api/v1/check-availability to pull available chair times from Google Calendar." },
      { title: "4. Soft-Lock Reservation", desc: "Places a 10-minute temporary lock on selected slot while concluding dialogue with patient." },
      { title: "5. Omni-Channel CRM & SMS Sync", desc: "Fires Twilio SMS with patient intake link, updates Supabase, and logs audio recording URL." }
    ],
    sampleJson: {
      "session_id": "retell_call_89012a",
      "caller": "+1 (555) 234-8901",
      "triage_urgency": "HIGH (Acute Molar Pain)",
      "selected_slot": "2026-09-24 10:30 AM EST",
      "doctor_assigned": "Dr. Vance",
      "booking_status": "CONFIRMED",
      "sms_sent": true,
      "crm_sync": "GoHighLevel Contact #4491"
    }
  },
  {
    id: "lead-triage-enrichment",
    tag: "B2B SaaS & Growth Systems",
    badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10",
    title: "Autonomous Multi-Channel Lead Triage & Enrichment Swarm",
    industry: "B2B Tech & Commercial Real Estate",
    heroMetric: "38s Response Time",
    heroMetricSub: "Down from 4.2 hours average turnaround",
    timeline: "2 Weeks to Production",
    stack: ["n8n Enterprise", "Claude 3.5 Sonnet", "Apollo.io API", "GoHighLevel CRM", "Slack Webhooks", "PostgreSQL"],
    metrics: [
      { label: "Lead Response Time", val: "38s" },
      { label: "Sales Meeting Rate", val: "+36%" },
      { label: "Manual Data Entry", val: "0 hrs" },
      { label: "Qualification Precision", val: "95.4%" }
    ],
    problem: "Sales representatives were overwhelmed by hundreds of low-intent inbound submissions, spending 60% of their workday doing manual background lookups while high-value enterprise leads went cold waiting hours for a reply.",
    solution: "Constructed an event-driven n8n pipeline. When an inquiry hits any form or WhatsApp channel, n8n validates the domain, pulls company firmographics from Apollo.io, prompts Claude 3.5 Sonnet to score ICP fit (1-100), and routes tier-1 accounts straight to reps with a personalized outreach draft ready to approve.",
    architecture: [
      { title: "1. Webhook Multi-Channel Catch", desc: "Captures lead payloads from Webflow, Typeform, and WhatsApp Business API." },
      { title: "2. Apollo Firmographic Enrichment", desc: "Enriches company revenue, employee count, tech stack, and LinkedIn profile URL." },
      { title: "3. Claude 3.5 Sonnet ICP Scoring", desc: "Analyzes problem statement & budget against ICP rubric, returning 1-100 numerical score." },
      { title: "4. Smart Conditional Router", desc: "Score >= 75: Instant Slack ping to assigned AE + priority Calendly SMS. Score < 75: Enrolls into nurture." },
      { title: "5. AI Personalized Email Draft", desc: "Pre-writes a custom reply referencing lead's industry and pain points for 1-click rep dispatch." }
    ],
    sampleJson: {
      "lead_email": "marcus.v@acmeglobal.com",
      "company": "Acme Global Solutions",
      "headcount": 320,
      "annual_revenue": "$48M",
      "icp_score": 94,
      "route": "TIER_1_ENTERPRISE",
      "assigned_rep": "David Miller",
      "slack_alert_fired": true,
      "draft_ready": true
    }
  },
  {
    id: "invoice-document-processor",
    tag: "Document AI & Operations",
    badgeColor: "border-indigo-500/30 text-indigo-400 bg-indigo-500/10",
    title: "Autonomous Invoice & Claims Vision Processor (HITL Escalation)",
    industry: "Logistics, Supply Chain & Insurance",
    heroMetric: "94.2% Auto-Approved",
    heroMetricSub: "Straight-through zero human touch processing",
    timeline: "4 Weeks to Production",
    stack: ["n8n Workflow Engine", "Claude 3.5 Sonnet Vision", "Supabase Vector / PG", "Telegram Bot API", "Gmail IMAP", "Xero / QuickBooks"],
    metrics: [
      { label: "Straight-Through Rate", val: "94.2%" },
      { label: "Processing Latency", val: "90s" },
      { label: "Extraction Accuracy", val: "99.8%" },
      { label: "Monthly Cost Saved", val: "$3,200" }
    ],
    problem: "Back-office staff spent 35+ hours every week manually transcribing messy PDF invoices, mobile photos of receipts, and contractor bills, resulting in duplicate payments, tax calculation errors, and late supplier penalties.",
    solution: "Engineered an intelligent multimodal document processing system in n8n. Invoices arriving via email are parsed by Claude 3.5 Sonnet Vision with JSON Schema constraints, validated against PO records in Postgres, and posted directly to ERP. Discrepancies >5% trigger an interactive Telegram approval card.",
    architecture: [
      { title: "1. IMAP Email Attachment Ingest", desc: "Monitors incoming AP inbox, isolates PDF/image attachments, and generates hash to prevent duplicates." },
      { title: "2. Multimodal LLM Vision Extraction", desc: "Streams document pages to Claude 3.5 Sonnet with strict JSON schema for vendor, items, and tax." },
      { title: "3. Mathematical Cross-Validation", desc: "Code node verifies sum of line items + VAT equals total amount down to 2 decimal places." },
      { title: "4. ERP Matching & Anomaly Detection", desc: "Cross-checks vendor Tax ID and PO number against PostgreSQL database." },
      { title: "5. Human-in-the-Loop Telegram Bot", desc: "If confidence <95% or discrepancy detected, sends inline card with 'Approve', 'Flag', or 'Reject' buttons." }
    ],
    sampleJson: {
      "invoice_ref": "INV-2026-9041",
      "vendor": "Apex Logistics International",
      "subtotal": 7800.00,
      "tax_amount": 650.00,
      "total_usd": 8450.00,
      "po_matched": "PO-8812",
      "confidence": 0.994,
      "decision": "STRAIGHT_THROUGH_PROCESSED",
      "sync_status": "EXPORTED_TO_XERO"
    }
  }
];

// Active Case Study State
let currentCaseStudyIndex = 0;

// Render Case Study
function renderCaseStudy(index) {
  currentCaseStudyIndex = index;
  const cs = caseStudiesData[index];
  
  // Update Tabs
  document.querySelectorAll('.cs-tab-btn').forEach((btn, idx) => {
    if (idx === index) {
      btn.classList.add('pill-active');
    } else {
      btn.classList.remove('pill-active');
    }
  });

  // Update Container Content
  const container = document.getElementById('case-study-display');
  if (!container) return;

  container.innerHTML = `
    <div class="glass-panel rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/10">
      <!-- Glow Accent -->
      <div class="ambient-glow glow-amber w-72 h-72 -top-20 -right-20 opacity-20"></div>

      <!-- Header -->
      <div class="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6 mb-6">
        <div>
          <div class="flex items-center gap-3 mb-2">
            <span class="px-3 py-1 text-xs font-semibold rounded-full border ${cs.badgeColor}">${cs.tag}</span>
            <span class="text-xs text-slate-400 flex items-center gap-1">
              <i data-lucide="building-2" class="w-3.5 h-3.5 text-slate-400"></i> ${cs.industry}
            </span>
            <span class="text-xs text-slate-400 hidden sm:inline-flex items-center gap-1">
              <i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i> ${cs.timeline}
            </span>
          </div>
          <h3 class="text-xl sm:text-2xl font-bold text-white tracking-tight">${cs.title}</h3>
        </div>

        <div class="text-right sm:border-l sm:border-white/10 sm:pl-6">
          <div class="text-2xl sm:text-3xl font-extrabold gradient-text-solar">${cs.heroMetric}</div>
          <div class="text-xs text-slate-400">${cs.heroMetricSub}</div>
        </div>
      </div>

      <!-- Key Metrics Row -->
      <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        ${cs.metrics.map(m => `
          <div class="bg-white/[0.02] border border-white/[0.06] rounded-xl p-3.5 text-center">
            <div class="text-lg sm:text-xl font-bold text-amber-400 font-mono">${m.val}</div>
            <div class="text-xs text-slate-400 mt-0.5">${m.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Problem & Solution Split -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-red-500/[0.04] border border-red-500/20 rounded-xl p-5">
          <div class="flex items-center gap-2 text-red-400 font-semibold text-sm mb-2.5">
            <i data-lucide="alert-triangle" class="w-4 h-4"></i> The Operational Bottleneck
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">${cs.problem}</p>
        </div>

        <div class="bg-amber-500/[0.04] border border-amber-500/20 rounded-xl p-5">
          <div class="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2.5">
            <i data-lucide="sparkles" class="w-4 h-4"></i> The Autonomous AI Solution
          </div>
          <p class="text-sm text-slate-300 leading-relaxed">${cs.solution}</p>
        </div>
      </div>

      <!-- Architecture Steps -->
      <div class="mb-8">
        <h4 class="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4 flex items-center gap-2">
          <i data-lucide="git-merge" class="w-4 h-4 text-amber-400"></i> Technical Pipeline & Architecture Flow
        </h4>
        <div class="space-y-3">
          ${cs.architecture.map(a => `
            <div class="flex items-start gap-3 bg-white/[0.02] border border-white/[0.06] p-3.5 rounded-xl hover:border-amber-500/30 transition-colors">
              <span class="w-2 h-2 rounded-full bg-amber-400 mt-2 shrink-0"></span>
              <div>
                <div class="text-sm font-semibold text-white">${a.title}</div>
                <div class="text-xs sm:text-sm text-slate-400 mt-0.5 leading-relaxed">${a.desc}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tech Stack & Live Payload Sample -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div class="lg:col-span-5">
          <h4 class="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
            <i data-lucide="layers" class="w-3.5 h-3.5 text-amber-400"></i> Production Tech Stack
          </h4>
          <div class="flex flex-wrap gap-2">
            ${cs.stack.map(s => `
              <span class="px-3 py-1.5 text-xs font-medium bg-white/[0.04] border border-white/10 rounded-lg text-slate-300 hover:border-amber-500/40 hover:text-amber-300 transition-colors">
                ${s}
              </span>
            `).join('')}
          </div>

          <div class="mt-6 p-4 rounded-xl bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20">
            <div class="text-xs font-semibold text-amber-300 mb-1 flex items-center gap-1.5">
              <i data-lucide="shield-check" class="w-4 h-4"></i> Production Ready & Enterprise Secured
            </div>
            <p class="text-xs text-slate-400 leading-relaxed">
              Designed with strict retry policies, webhook HMAC signature validation, and graceful fallback to human escalation.
            </p>
          </div>
        </div>

        <div class="lg:col-span-7">
          <div class="terminal-window p-4">
            <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span class="text-xs font-mono text-slate-400 ml-2">production_output.json</span>
              </div>
              <span class="text-[10px] font-mono text-amber-400/80 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">LIVE AUDITED</span>
            </div>
            <pre class="text-xs font-mono text-amber-300/90 overflow-x-auto p-2 leading-relaxed max-h-60"><code>${JSON.stringify(cs.sampleJson, null, 2)}</code></pre>
          </div>
        </div>
      </div>
    </div>
  `;

  lucide.createIcons();
}

// Interactive Live Agent Simulator Data
const simulatorScenarios = {
  voice: {
    title: "Healthcare Voice Receptionist Agent",
    clientType: "Dental Emergency Call",
    inputPrompt: "Caller: 'Hello! I broke my tooth while eating and have severe pain on the right side. Do you have any emergency slot open with Dr. Vance this morning?'",
    steps: [
      { type: "INGEST", label: "Twilio SIP Stream Converted", time: "110ms", log: "Audio frame buffered -> Deepgram Nova-2 STT stream initialized" },
      { type: "INTENT", label: "GPT-4o Intent Classification", time: "220ms", log: "Entity: { type: 'EMERGENCY_DENTAL', urgency: 'CRITICAL', doctor_pref: 'Dr. Vance', time_window: 'today_morning' }" },
      { type: "TOOL_CALL", label: "n8n Webhook: /api/v1/check-availability", time: "185ms", log: "Executing query against Google Calendar API -> Detected open slot: 10:30 AM EST (Chair #3)" },
      { type: "ACTION", label: "Voice Synthesizer Response", time: "160ms", log: "TTS Stream: 'I am so sorry to hear that you are in pain. Dr. Vance has an emergency opening today at 10:30 AM. Shall I lock that in for you right now?'" },
      { type: "CONFIRM", label: "Omni-Channel Booking & SMS", time: "90ms", log: "Calendar event locked. Twilio SMS dispatched with intake link and clinic directions. CRM record created." }
    ],
    executionTime: "765ms",
    status: "BOOKED_AND_NOTIFIED"
  },
  leads: {
    title: "B2B Enterprise Lead Triage Agent",
    clientType: "Inbound Enterprise Demo Request",
    inputPrompt: "Lead Submission: 'We have 350 employees across 4 logistics hubs and need to automate our dispatching and driver notifications. Looking to implement next month.'",
    steps: [
      { type: "INGEST", label: "Multi-Channel Form Webhook", time: "45ms", log: "Payload parsed from Typeform -> Domain: apexlogistics.com (Business email verified)" },
      { type: "TOOL_CALL", label: "Apollo.io Firmographic Enrichment", time: "180ms", log: "Enrichment result: { employees: 350, revenue: '$52M', industry: 'Freight Logistics', tech: ['Salesforce', 'n8n'] }" },
      { type: "INTENT", label: "Claude 3.5 Sonnet Scoring", time: "310ms", log: "ICP Score: 96/100 (Tier-1 Enterprise). High budget, immediate implementation window." },
      { type: "ACTION", label: "Slack Instant Rep Dispatch", time: "65ms", log: "Triggered Webhook to #enterprise-leads channel with 1-click 'Claim Account' button" },
      { type: "CONFIRM", label: "VIP Calendly SMS Sent", time: "70ms", log: "Dispatched direct SMS with Senior Solutions Architect calendar link to prospect." }
    ],
    executionTime: "670ms",
    status: "QUALIFIED_AND_ASSIGNED"
  },
  invoice: {
    title: "Autonomous Invoice & Claims Processor",
    clientType: "Multimodal PDF Bill Parsing",
    inputPrompt: "Incoming Email: Vendor 'Apex Logistics' attached 2-page invoice PDF (INV-2026-9041) totaling $8,450.00 with 6 line items.",
    steps: [
      { type: "INGEST", label: "IMAP Email Attachment Node", time: "120ms", log: "Extracted invoice_9041.pdf (1.4MB) -> Rendered base64 canvas pages" },
      { type: "INTENT", label: "Claude 3.5 Sonnet Vision OCR", time: "640ms", log: "Extracted: Tax ID: US881923, Subtotal: $7,800.00, Tax: $650.00, Total: $8,450.00" },
      { type: "TOOL_CALL", label: "PostgreSQL ERP Matching", time: "85ms", log: "Matched PO-8812. Line items verified against authorized purchase order ledger." },
      { type: "ACTION", label: "Mathematical Validation", time: "15ms", log: "Math check: Sum(Lines) + Tax == Total ($8,450.00 == $8,450.00). Variance: 0.00%" },
      { type: "CONFIRM", label: "ERP Reconciliation", time: "110ms", log: "Straight-Through Processed: Pushed directly to Xero accounting API with zero human touch." }
    ],
    executionTime: "970ms",
    status: "AUTO_RECONCILED"
  }
};

let activeScenarioKey = 'voice';
let isRunningSim = false;

function setSimulatorScenario(key) {
  if (isRunningSim) return;
  activeScenarioKey = key;

  document.querySelectorAll('.sim-tab-btn').forEach(btn => {
    if (btn.dataset.sim === key) {
      btn.classList.add('pill-active');
    } else {
      btn.classList.remove('pill-active');
    }
  });

  const scenario = simulatorScenarios[key];
  document.getElementById('sim-prompt-display').innerText = scenario.inputPrompt;
  document.getElementById('sim-scenario-title').innerText = scenario.title;
  document.getElementById('sim-status-badge').innerText = "Ready to Execute";
  document.getElementById('sim-status-badge').className = "text-xs font-mono px-2.5 py-1 rounded-full bg-white/[0.04] text-slate-400 border border-white/10";
  document.getElementById('sim-logs-container').innerHTML = `
    <div class="text-xs font-mono text-slate-500 italic p-4 text-center">
      Click "Execute Agentic Workflow" below to run live step-by-step trace...
    </div>
  `;
  document.getElementById('sim-metric-time').innerText = "-- ms";
}

async function runSimulator() {
  if (isRunningSim) return;
  isRunningSim = true;

  const btn = document.getElementById('run-sim-btn');
  btn.disabled = true;
  btn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Executing Agent...`;
  lucide.createIcons();

  const scenario = simulatorScenarios[activeScenarioKey];
  const logsContainer = document.getElementById('sim-logs-container');
  logsContainer.innerHTML = '';

  const badge = document.getElementById('sim-status-badge');
  badge.innerText = "Agent Thinking & Executing...";
  badge.className = "text-xs font-mono px-2.5 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse";

  for (let i = 0; i < scenario.steps.length; i++) {
    const step = scenario.steps[i];
    await new Promise(r => setTimeout(r, 450));

    const stepEl = document.createElement('div');
    stepEl.className = "p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-3 transition-all duration-300";
    stepEl.innerHTML = `
      <span class="text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
        step.type === 'INGEST' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
        step.type === 'INTENT' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
        step.type === 'TOOL_CALL' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
        step.type === 'ACTION' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
        'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
      }">${step.type}</span>
      <div class="flex-1 min-w-0">
        <div class="flex items-center justify-between text-xs font-semibold text-white">
          <span>${step.label}</span>
          <span class="font-mono text-slate-400 text-[11px]">${step.time}</span>
        </div>
        <div class="text-[11px] font-mono text-slate-400 mt-1 break-words">${step.log}</div>
      </div>
    `;
    logsContainer.appendChild(stepEl);
    logsContainer.scrollTop = logsContainer.scrollHeight;
    lucide.createIcons();
  }

  document.getElementById('sim-metric-time').innerText = scenario.executionTime;
  badge.innerText = scenario.status;
  badge.className = "text-xs font-mono px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold";

  btn.disabled = false;
  btn.innerHTML = `<i data-lucide="play" class="w-4 h-4"></i> Run Again`;
  isRunningSim = false;
  lucide.createIcons();
}

// Interactive n8n Node Explorer
const n8nNodes = {
  webhook: {
    name: "Webhook Trigger",
    type: "n8n-nodes-base.webhook",
    desc: "Listens for real-time inbound HTTP payloads from client web forms, Twilio WebRTC streams, or CRM events.",
    config: "HTTP Method: POST | Path: /v1/ai-pipeline/dispatch | Auth: HMAC-SHA256",
    sampleInput: { "event": "inbound_call_connected", "session_id": "call_88219" },
    sampleOutput: { "status": "200_OK", "payload_validated": true, "timestamp": 1758482000 }
  },
  sanitizer: {
    name: "Data Sanitizer & Schema Guard",
    type: "n8n-nodes-base.code (TypeScript / JS)",
    desc: "Enforces strict input validation, trims malicious characters, validates email domain DNS records, and normalizes phone numbers.",
    config: "Strict Schema: true | Mask PII: true | Auto-Convert Timestamps: UTC",
    sampleInput: { "raw_phone": "(555) 234 - 8901", "email": " Marcus@acme.com " },
    sampleOutput: { "clean_phone": "+15552348901", "clean_email": "marcus@acme.com", "valid": true }
  },
  agent: {
    name: "Autonomous LLM Agent (Claude / GPT-4o)",
    type: "@n8n/n8n-nodes-langchain.agent",
    desc: "Performs multi-step reasoning with custom tool access. Chooses whether to retrieve knowledge, query calendars, or trigger escalation.",
    config: "Model: claude-3-5-sonnet-20241022 | Temperature: 0.1 | Max Steps: 5",
    sampleInput: { "user_query": "Book cleaning appointment for Sarah next Tuesday morning" },
    sampleOutput: { "thought": "Need to check open slots on Tuesday 2026-09-29 between 09:00 and 12:00", "tool_to_call": "check_calendar_slots" }
  },
  router: {
    name: "Conditional Router & Fallback Switch",
    type: "n8n-nodes-base.switch",
    desc: "Routes execution paths based on LLM confidence score, customer priority tier, or business urgency criteria.",
    config: "Rules: If confidence >= 0.95 -> Direct Execution; Else -> Push to Human-in-the-Loop Bot",
    sampleInput: { "confidence": 0.98, "priority": "TIER_1" },
    sampleOutput: { "matched_branch": 0, "path": "AUTO_EXECUTE_AND_DISPATCH" }
  },
  dispatch: {
    name: "Multi-Channel Dispatch & Sync",
    type: "n8n-nodes-base.httpRequest / Twilio / Slack",
    desc: "Simultaneously dispatches SMS confirmations, updates CRM records, triggers Slack alert cards, and syncs databases.",
    config: "Destinations: Twilio API, GoHighLevel CRM, Slack Webhook #sales-ops",
    sampleInput: { "patient_phone": "+15552348901", "booking_id": "BK-9021" },
    sampleOutput: { "sms_status": "DELIVERED", "crm_updated": true, "slack_alert": "200_OK" }
  }
};

function inspectN8nNode(nodeKey) {
  document.querySelectorAll('.n8n-node-btn').forEach(btn => {
    if (btn.dataset.node === nodeKey) {
      btn.classList.add('border-amber-400', 'bg-amber-500/15');
      btn.classList.remove('border-white/10', 'bg-white/[0.02]');
    } else {
      btn.classList.remove('border-amber-400', 'bg-amber-500/15');
      btn.classList.add('border-white/10', 'bg-white/[0.02]');
    }
  });

  const node = n8nNodes[nodeKey];
  const inspector = document.getElementById('n8n-node-inspector');
  if (!inspector) return;

  inspector.innerHTML = `
    <div class="glass-panel rounded-xl p-5 border border-amber-500/30 relative">
      <div class="flex items-center justify-between border-b border-white/10 pb-3 mb-4">
        <div>
          <span class="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded border border-amber-500/20">NODE INSPECTOR</span>
          <h4 class="text-base font-bold text-white mt-1">${node.name}</h4>
        </div>
        <span class="text-xs font-mono text-slate-400">${node.type}</span>
      </div>

      <p class="text-xs text-slate-300 mb-4 leading-relaxed">${node.desc}</p>
      
      <div class="bg-black/40 rounded-lg p-2.5 mb-4 border border-white/5">
        <div class="text-[11px] font-mono text-slate-400 font-semibold mb-1">Configuration Specs:</div>
        <div class="text-xs font-mono text-amber-300/90">${node.config}</div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <div class="text-[11px] font-mono text-slate-400 mb-1">Incoming Payload:</div>
          <pre class="bg-black/50 p-2.5 rounded-lg text-[11px] font-mono text-slate-300 overflow-x-auto border border-white/5"><code>${JSON.stringify(node.sampleInput, null, 2)}</code></pre>
        </div>
        <div>
          <div class="text-[11px] font-mono text-slate-400 mb-1">Outgoing Result:</div>
          <pre class="bg-black/50 p-2.5 rounded-lg text-[11px] font-mono text-amber-300/90 overflow-x-auto border border-white/5"><code>${JSON.stringify(node.sampleOutput, null, 2)}</code></pre>
        </div>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// Copy to Clipboard Utility with Toast
function copyText(text, label) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(`Copied ${label} to clipboard!`);
  }).catch(() => {
    // Fallback
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast(`Copied ${label} to clipboard!`);
  });
}

function showToast(message) {
  const existingToast = document.getElementById('app-toast');
  if (existingToast) existingToast.remove();

  const toast = document.createElement('div');
  toast.id = 'app-toast';
  toast.className = 'fixed bottom-6 right-6 z-50 bg-[#161a26] border border-amber-500/50 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2.5 transform translate-y-10 opacity-0 transition-all duration-300';
  toast.innerHTML = `
    <span class="w-2 h-2 rounded-full bg-amber-400"></span>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.classList.remove('translate-y-10', 'opacity-0');
  }, 10);

  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Interactive Automation ROI Estimator
function calculateAutomationROI(e) {
  e.preventDefault();
  const hours = parseFloat(document.getElementById('calc-hours').value) || 15;
  const rate = parseFloat(document.getElementById('calc-rate').value) || 35;
  const volume = parseFloat(document.getElementById('calc-volume').value) || 200;

  // Monthly labor cost = hours * 4.3 weeks * rate
  const monthlyLabor = Math.round(hours * 4.3 * rate);
  // Estimated automation savings ~80%
  const monthlySavings = Math.round(monthlyLabor * 0.82);
  const annualSavings = monthlySavings * 12;
  const hoursSavedAnnual = Math.round(hours * 4.3 * 12 * 0.82);

  const resultContainer = document.getElementById('calc-result');
  resultContainer.innerHTML = `
    <div class="glass-panel p-6 rounded-2xl border border-amber-500/40 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent animate-fadeIn">
      <div class="text-xs font-mono text-amber-400 uppercase tracking-wider mb-2 font-bold flex items-center gap-1.5">
        <i data-lucide="trending-up" class="w-4 h-4"></i> Estimated Impact & Efficiency Gains
      </div>
      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 my-4">
        <div class="bg-black/40 p-3.5 rounded-xl border border-white/5">
          <div class="text-2xl font-black gradient-text-solar">$${monthlySavings.toLocaleString()}/mo</div>
          <div class="text-xs text-slate-400 mt-1">Direct Monthly Cost Saved</div>
        </div>
        <div class="bg-black/40 p-3.5 rounded-xl border border-white/5">
          <div class="text-2xl font-black text-amber-300">$${annualSavings.toLocaleString()}</div>
          <div class="text-xs text-slate-400 mt-1">Annual Recurrent Savings</div>
        </div>
        <div class="bg-black/40 p-3.5 rounded-xl border border-white/5 col-span-2 sm:col-span-1">
          <div class="text-2xl font-black text-white font-mono">${hoursSavedAnnual.toLocaleString()} hrs</div>
          <div class="text-xs text-slate-400 mt-1">Staff Hours Reclaimed/Year</div>
        </div>
      </div>
      <p class="text-xs text-slate-300 leading-relaxed">
        Based on replacing manual task handling with autonomous n8n workflows + AI agents. Typical deployment timeline is 2–3 weeks.
      </p>
      <div class="mt-4 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
        <span class="text-xs text-slate-400">Ready to build this system?</span>
        <a href="#contact" class="btn-primary-solar px-4 py-2 rounded-lg text-xs font-bold inline-flex items-center gap-1.5">
          Book Scoping Call <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;
  lucide.createIcons();
}

// Initializer
document.addEventListener('DOMContentLoaded', () => {
  // Render Initial Case Study
  renderCaseStudy(0);

  // Initialize Simulator
  setSimulatorScenario('voice');

  // Initialize n8n Node Inspector
  inspectN8nNode('agent');

  // Mobile Navigation Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('.mobile-nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Lucide Icons
  lucide.createIcons();
});
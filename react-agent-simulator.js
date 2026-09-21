// React 18 Interactive AI Agent Runner Component
(function() {
  if (typeof React === 'undefined' || typeof ReactDOM === 'undefined') return;

  const { useState, useEffect } = React;

  const scenarios = {
    voice: {
      name: "Healthcare Voice Receptionist Agent",
      stack: "Retell AI + GPT-4o + n8n",
      input: "Caller: 'Hello! I broke my tooth and have acute pain on the right side. Do you have an emergency opening with Dr. Vance this morning?'",
      steps: [
        { type: "INGEST", label: "WebRTC Audio Stream Ingestion", ms: "110ms", text: "Deepgram Nova-2 STT stream initialized (~180ms turn)" },
        { type: "INTENT", label: "GPT-4o Medical Urgency Triage", ms: "220ms", text: "Classified: EMERGENCY_DENTAL, Urgency: ACUTE_PAIN" },
        { type: "TOOL_CALL", label: "n8n Webhook: /api/v1/check-availability", ms: "185ms", text: "Google Calendar API checked -> Available: 10:30 AM EST (Chair #3)" },
        { type: "ACTION", label: "Voice Synthesis Stream", ms: "160ms", text: "TTS: 'I am so sorry you are in pain. Dr. Vance has an opening today at 10:30 AM. Shall I lock that in for you?'" },
        { type: "CONFIRM", label: "Omni-Channel Sync & SMS", ms: "90ms", text: "Slot soft-locked. Twilio SMS dispatched with directions. CRM synced." }
      ],
      turnaround: "765ms"
    },
    leads: {
      name: "B2B Lead Triage & Enrichment Swarm",
      stack: "Apollo.io + Claude 3.5 + Slack",
      input: "Form Submission: 'We have 350 employees across 4 logistics hubs and need to automate dispatching. Looking to deploy next month.'",
      steps: [
        { type: "INGEST", label: "Multi-Channel Form Ingestion", ms: "45ms", text: "Domain apexlogistics.com extracted & verified" },
        { type: "TOOL_CALL", label: "Apollo.io Firmographic Enrichment", ms: "180ms", text: "Revenue: $52M, Headcount: 350, Industry: Freight Logistics" },
        { type: "INTENT", label: "Claude 3.5 Sonnet Intent Scoring", ms: "310ms", text: "ICP Score: 96/100 (Tier-1 Enterprise). High urgency." },
        { type: "ACTION", label: "Slack Instant Rep Dispatch", ms: "65ms", text: "Pushed interactive card to #enterprise-leads channel" },
        { type: "CONFIRM", label: "VIP Calendly SMS Sent", ms: "70ms", text: "Dispatched direct SMS with Senior Solutions Architect calendar link" }
      ],
      turnaround: "670ms"
    },
    invoice: {
      name: "Multimodal Invoice OCR & HITL Bot",
      stack: "Claude 3.5 Vision + Postgres + Telegram",
      input: "Email Attachment: Vendor 'Apex Logistics' submitted 2-page invoice PDF (INV-2026-9041) totaling $8,450.00.",
      steps: [
        { type: "INGEST", label: "IMAP PDF Attachment Stream", ms: "120ms", text: "Extracted invoice_9041.pdf (1.4MB) -> base64 page canvas" },
        { type: "INTENT", label: "Claude 3.5 Sonnet Vision OCR", ms: "640ms", text: "Extracted: Subtotal $7,800.00, Tax $650.00, Total $8,450.00" },
        { type: "TOOL_CALL", label: "PostgreSQL PO Matching", ms: "85ms", text: "Matched PO-8812. Line items verified against ledger." },
        { type: "ACTION", label: "Mathematical Cross-Check", ms: "15ms", text: "Math verified: Lines + Tax == Total ($8,450.00 == $8,450.00)" },
        { type: "CONFIRM", label: "Straight-Through ERP Push", ms: "110ms", text: "Auto-reconciled and posted to Xero accounting API" }
      ],
      turnaround: "970ms"
    }
  };

  function ReactAgentSimulator() {
    const [selectedKey, setSelectedKey] = useState('voice');
    const [isRunning, setIsRunning] = useState(false);
    const [visibleSteps, setVisibleSteps] = useState([]);
    const [status, setStatus] = useState("Ready to Execute");
    const [time, setTime] = useState("-- ms");

    const scenario = scenarios[selectedKey];

    const handleSelect = (key) => {
      if (isRunning) return;
      setSelectedKey(key);
      setVisibleSteps([]);
      setStatus("Ready to Execute");
      setTime("-- ms");
    };

    const runSimulation = async () => {
      if (isRunning) return;
      setIsRunning(true);
      setVisibleSteps([]);
      setStatus("Agent Reasoning & Executing...");

      for (let i = 0; i < scenario.steps.length; i++) {
        await new Promise(r => setTimeout(r, 400));
        setVisibleSteps(prev => [...prev, scenario.steps[i]]);
      }

      setTime(scenario.turnaround);
      setStatus("EXECUTION_COMPLETED");
      setIsRunning(false);
    };

    return React.createElement('div', { className: 'grid grid-cols-1 lg:grid-cols-12 gap-6 items-start' },
      // Left Controls
      React.createElement('div', { className: 'lg:col-span-5 space-y-4' },
        React.createElement('div', { className: 'glass-panel p-5 rounded-2xl border border-white/10' },
          React.createElement('div', { className: 'text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold mb-3' }, 'Select Scenario:'),
          React.createElement('div', { className: 'space-y-2' },
            Object.keys(scenarios).map(key => {
              const sc = scenarios[key];
              const isAct = selectedKey === key;
              return React.createElement('button', {
                key: key,
                onClick: () => handleSelect(key),
                className: `w-full p-3 rounded-xl border text-left text-xs font-semibold flex items-center justify-between transition-all ${
                  isAct ? 'pill-active border-amber-500/40 bg-amber-500/15 text-amber-300' : 'border-white/10 bg-white/[0.02] text-slate-300 hover:text-white'
                }`
              },
                React.createElement('span', { className: 'font-semibold' }, sc.name),
                React.createElement('span', { className: 'text-[10px] font-mono opacity-80' }, sc.stack)
              );
            })
          ),
          React.createElement('div', { className: 'mt-5 pt-4 border-t border-white/10' },
            React.createElement('div', { className: 'text-[11px] font-mono text-slate-400 uppercase mb-1.5' }, 'Simulated Input Payload:'),
            React.createElement('div', { className: 'text-xs font-mono text-amber-200/90 bg-black/50 p-3 rounded-xl border border-white/5 leading-relaxed' }, scenario.input)
          ),
          React.createElement('div', { className: 'mt-5' },
            React.createElement('button', {
              onClick: runSimulation,
              disabled: isRunning,
              className: 'btn-primary-solar w-full py-3.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2'
            }, isRunning ? 'Executing Agent Loop...' : 'Execute Agentic Workflow')
          )
        ),
        React.createElement('div', { className: 'p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs text-slate-400 flex items-center justify-between' },
          React.createElement('span', null, 'Execution Turnaround:'),
          React.createElement('span', { className: 'font-mono text-amber-400 font-bold' }, time)
        )
      ),

      // Right Terminal
      React.createElement('div', { className: 'lg:col-span-7' },
        React.createElement('div', { className: 'terminal-window p-5 border border-white/10' },
          React.createElement('div', { className: 'flex items-center justify-between border-b border-white/10 pb-3 mb-4' },
            React.createElement('div', { className: 'flex items-center gap-2' },
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-rose-500' }),
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-amber-500' }),
              React.createElement('span', { className: 'w-2.5 h-2.5 rounded-full bg-emerald-500' }),
              React.createElement('span', { className: 'text-xs font-mono text-slate-300 ml-2 font-bold' }, scenario.name)
            ),
            React.createElement('span', { className: `text-xs font-mono px-2.5 py-0.5 rounded-full border ${
              status.includes('COMPLETED') ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30' :
              isRunning ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 animate-pulse' :
              'bg-white/[0.04] text-slate-400 border-white/10'
            }` }, status)
          ),
          React.createElement('div', { className: 'space-y-2.5 min-h-[340px] max-h-[420px] overflow-y-auto pr-1' },
            visibleSteps.length === 0 ?
              React.createElement('div', { className: 'text-xs font-mono text-slate-500 italic p-10 text-center' }, 'Click "Execute Agentic Workflow" to observe real-time trace...') :
              visibleSteps.map((step, idx) =>
                React.createElement('div', {
                  key: idx,
                  className: 'p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start gap-3'
                },
                  React.createElement('span', {
                    className: `text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                      step.type === 'INGEST' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      step.type === 'INTENT' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' :
                      step.type === 'TOOL_CALL' ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' :
                      step.type === 'ACTION' ? 'bg-orange-500/20 text-orange-300 border border-orange-500/30' :
                      'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                    }`
                  }, step.type),
                  React.createElement('div', { className: 'flex-1 min-w-0' },
                    React.createElement('div', { className: 'flex items-center justify-between text-xs font-semibold text-white' },
                      React.createElement('span', null, step.label),
                      React.createElement('span', { className: 'font-mono text-slate-400 text-[11px]' }, step.ms)
                    ),
                    React.createElement('div', { className: 'text-[11px] font-mono text-slate-400 mt-1 break-words' }, step.text)
                  )
                )
              )
          )
        )
      )
    );
  }

  window.initReactAgentSimulator = function(containerId) {
    const rootEl = document.getElementById(containerId);
    if (!rootEl) return;
    const root = ReactDOM.createRoot(rootEl);
    root.render(React.createElement(ReactAgentSimulator));
  };
})();
/* Common Ground — small interactions */
(function () {
  // Mobile nav toggle
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".primary-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
  }

  // Copy toolkit lists
  const lists = {
    grounding: [
      "5-4-3-2-1 grounding: Name 5 things you can see, 4 you can touch, 3 you can hear, 2 you can smell, 1 you can taste.",
      "Box breathing: Breathe in for 4, hold for 4, out for 4, hold for 4. Repeat a few rounds.",
      "Feet on the floor: Press your feet into the ground. Notice the pressure, the texture, the temperature.",
      "Cold water reset: Splash cool water on your face or hold a cold drink. Notice the sensation."
    ],
    "low-energy": [
      "Micro-tasks: One tiny step only — open a window, drink water, text one person, change into clean clothes.",
      "Self-compassion checklist: Would I speak to a friend this way? Can I lower the bar today? Rest is not failure.",
      "Body double (even virtual): Sit with a quiet video call, a livestream, or company while you do one small thing.",
      "Permission to do less: Choose the minimum viable day. Survive first; rebuild later."
    ],
    routine: [
      "One consistent wake-up cue: Same time, same light, same drink — even if the rest of the day varies.",
      "3-item priority list: Write only three things. Anything else is bonus.",
      "Check-in question: What do I need right now — rest, connection, or a small action?",
      "End-of-day wind-down: Dim lights, put the phone down 20 minutes earlier, one calming activity."
    ]
  };

  document.querySelectorAll(".copy-list").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const key = btn.getAttribute("data-list");
      const items = lists[key];
      if (!items) return;
      const text = items.join("\n\n");
      navigator.clipboard.writeText(text).then(function () {
        const original = btn.textContent;
        btn.textContent = "Copied!";
        setTimeout(function () {
          btn.textContent = original;
        }, 2000);
      }).catch(function () {
        btn.textContent = "Copy failed";
        setTimeout(function () {
          btn.textContent = "Copy list";
        }, 2000);
      });
    });
  });

  // Contact form (client-side only — no backend yet)
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  if (form && status) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.hidden = false;
      status.textContent = "Thank you. This is a static demo — your message was not sent. When the site is connected to a form service (e.g. Formspree), submissions will be delivered privately and with care.";
      form.reset();
    });
  }
})();

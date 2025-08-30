# HTML Email Previewer for High-Impact Outreach

This is a simple but powerful internal tool we developed at **Alie Network** to streamline our email marketing and outreach operations. It provides a live, real-time preview of HTML email templates, allowing for quick edits and ensuring that our communications are pixel-perfect before they reach our partners and clients.

This repository is a small window into our core philosophy: **Automate the repeatable, so we can focus on the exceptional.**

We believe in building robust, data-driven systems to drive growth. For our clients, this means developing sophisticated KOL (Key Opinion Leader) analysis tools, on-chain data scrapers, and performance dashboards. For our own internal processes, it means creating tools like this one to enhance efficiency and maintain the highest quality standards in our communications.

---

## Why We Built This

In our strategic framework (which we call the "HUBS" - Weekly Implementation and Growth System), personalized and high-quality outreach is a critical component. We were tired of the clunky, multi-step process of coding an HTML email, sending multiple tests, and manually copying and pasting content, subjects, and recipient lists.

This tool was built to solve that problem. It centralizes the entire pre-flight process for an email campaign into a single interface, directly reflecting our commitment to:

*   **Efficiency:** Reducing the time spent on manual, repetitive tasks.
*   **Quality Control:** Ensuring brand consistency and eliminating rendering errors before sending.
*   **Systemization:** Turning a chaotic process into a defined, repeatable, and scalable workflow.

When potential clients see our work, we want them to understand that the same precision and system-oriented thinking that went into this tool goes into every campaign we manage for them.

## Key Features

*   **Live Real-Time Preview:** The left-hand editor allows you to paste and modify HTML code, with the results instantly rendered on the right-hand panel. This gives you an immediate understanding of how your design will appear.
*   **Smart Info Parsing:** By adding simple comment lines to your HTML—`<!-- Recipient: ... -->` and `<!-- Subject: ... -->`—the tool automatically extracts and populates the "Recipients" and "Subject" fields.
*   **One-Click Copying:**
    *   Copy the recipient list.
    *   Copy the email subject.
    *   Copy the entire raw HTML code.
    *   Copy a combined block of recipients and subject for easy pasting into email clients.
*   **Clean & Modern UI:** Built with Tailwind CSS for a clean, modern, dark-themed interface that's easy on the eyes and simple to navigate.
*   **Instant Clear Function:** A single button cleans all fields (recipients, subject, and HTML code), allowing you to start fresh instantly.

## About Alie Network

**Alie Network** is the ultimate growth partner for ambitious Web3 projects. We are a data-driven, technology-enabled agency that combines deep market strategy with automated systems to deliver real engagement, measurable ROI, and sustainable growth.

While our core focus is on providing elite access to KOLs, investors, and strategic partners for projects in ecosystems like **Base** and **Solana**, our foundational strength lies in the systems we build. We believe that the future of marketing isn't about "hustle," but about creating intelligent, scalable engines for growth. This tool is one small gear in our larger machine.

## Connect With Us

Let's create a tailored growth strategy for your project. Reach out to us to discuss how our systems can help you dominate the market.

*   **Email:** [info@alie.network](mailto:info@alie.network)
*   **Website:** [alie.network](https://alie.network)
*   **Linktree:** [linktr.ee/alienetwork](https://linktr.ee/alienetwork)
*   **X (Twitter):** [@networkAlie](https://x.com/networkAlie)
*   **LinkedIn:** [linkedin.com/in/alienetwork](https://www.linkedin.com/in/alienetwork)
*   **GitHub:** [@networkAlie](https://github.com/networkAlie)
*   **YouTube:** [@networkAlie](https://www.youtube.com/@networkAlie)
*   **Reddit:** [u/networkAlie](https://www.reddit.com/user/networkAlie)


## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

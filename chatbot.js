/*
  Haryana Traders (LuxeWood) — chatbot.js
  Role: Zero-Cost Client-Side AI Concierge Chatbot + Optional Live LLM Integration
  Position: Bottom Left (Separated from WhatsApp widget at Bottom Right)
*/

(() => {
  'use strict';

  // Inject Styles for Chatbot UI
  const style = document.createElement('style');
  style.innerHTML = `
    .ai-chat-trigger {
      position: fixed;
      bottom: 24px;
      left: 24px;
      z-index: 1490;
      width: 56px;
      height: 56px;
      border-radius: 50%;
      background: linear-gradient(135deg, #D4AF37 0%, #A8882A 100%);
      color: #1A1008;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 6px 20px rgba(212, 175, 55, 0.4);
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 2px solid #FFF;
    }

    .ai-chat-trigger:hover {
      transform: scale(1.1) rotate(5deg);
      box-shadow: 0 10px 30px rgba(212, 175, 55, 0.7);
    }

    .ai-chat-badge {
      position: absolute;
      top: -4px;
      right: -4px;
      background: #FF5F56;
      color: #FFF;
      font-size: 0.7rem;
      font-weight: 700;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #1A1008;
    }

    .ai-chat-window {
      position: fixed;
      bottom: 92px;
      left: 24px;
      width: 380px;
      max-width: calc(100vw - 32px);
      height: 540px;
      max-height: calc(100vh - 120px);
      background: rgba(26, 16, 8, 0.96);
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      border: 2px solid var(--clr-gold);
      border-radius: var(--radius-lg);
      box-shadow: 0 15px 40px rgba(0, 0, 0, 0.8), 0 0 20px rgba(212, 175, 55, 0.25);
      z-index: 1500;
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: translateY(20px) scale(0.95);
      pointer-events: none;
      transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .ai-chat-window.open {
      opacity: 1;
      transform: translateY(0) scale(1);
      pointer-events: all;
    }

    @media (max-width: 576px) {
      .ai-chat-trigger {
        left: 14px;
        bottom: 14px;
        width: 44px;
        height: 44px;
      }
      .ai-chat-window {
        left: 12px;
        bottom: 64px;
        width: calc(100vw - 24px);
        height: 480px;
        max-height: calc(100vh - 80px);
      }
    }

    .ai-chat-header {
      background: linear-gradient(135deg, #2C1B12 0%, #1A1008 100%);
      padding: 14px 18px;
      border-bottom: 1px solid var(--clr-gold-dim);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .ai-chat-header__info {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .ai-chat-avatar {
      width: 38px;
      height: 38px;
      border-radius: 50%;
      background: linear-gradient(135deg, #D4AF37 0%, #A8882A 100%);
      color: #1A1008;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      border: 2px solid var(--clr-gold);
    }

    .ai-chat-header__title {
      color: var(--clr-cream);
      font-size: 0.98rem;
      font-weight: 700;
      font-family: var(--font-display);
      margin: 0;
    }

    .ai-chat-header__status {
      font-size: 0.72rem;
      color: #2D6A4F;
      display: flex;
      align-items: center;
      gap: 5px;
      font-weight: 600;
    }

    .ai-chat-header__status::before {
      content: '';
      width: 6px;
      height: 6px;
      background: #25D366;
      border-radius: 50%;
      box-shadow: 0 0 8px #25D366;
    }

    .ai-chat-close {
      background: transparent;
      border: none;
      color: var(--clr-ash);
      font-size: 1.3rem;
      cursor: pointer;
      padding: 4px;
      line-height: 1;
      transition: color 0.2s;
    }

    .ai-chat-close:hover {
      color: var(--clr-gold);
    }

    .ai-chat-messages {
      flex: 1;
      padding: 16px;
      overflow-y: auto;
      display: flex;
      flex-direction: column;
      gap: 12px;
      scroll-behavior: smooth;
    }

    .msg-bubble {
      max-width: 88%;
      padding: 12px 16px;
      border-radius: 14px;
      font-size: 0.88rem;
      line-height: 1.55;
      font-family: var(--font-ui);
      word-wrap: break-word;
      animation: msgFadeIn 0.3s ease-out;
    }

    @keyframes msgFadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .msg-bubble--bot {
      background: rgba(44, 27, 18, 0.95);
      border: 1px solid var(--clr-gold-dim);
      color: var(--clr-cream);
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }

    .msg-bubble--user {
      background: linear-gradient(135deg, #D4AF37 0%, #A8882A 100%);
      color: #1A1008;
      font-weight: 600;
      align-self: flex-end;
      border-bottom-right-radius: 2px;
    }

    .ai-action-btn {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: linear-gradient(135deg, #D4AF37 0%, #A8882A 100%);
      color: #1A1008 !important;
      font-weight: 700;
      font-size: 0.82rem;
      padding: 8px 14px;
      border-radius: 8px;
      text-decoration: none;
      margin-top: 8px;
      box-shadow: 0 4px 12px rgba(212, 175, 55, 0.3);
      transition: all 0.2s ease;
    }

    .ai-action-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(212, 175, 55, 0.5);
    }

    .msg-typing {
      display: flex;
      gap: 4px;
      padding: 10px 14px;
      background: rgba(44, 27, 18, 0.95);
      border: 1px solid var(--clr-gold-dim);
      border-radius: 14px;
      align-self: flex-start;
      border-bottom-left-radius: 2px;
    }

    .msg-typing dot {
      width: 6px;
      height: 6px;
      background: var(--clr-gold);
      border-radius: 50%;
      animation: typingPulse 1.4s infinite ease-in-out;
    }

    .msg-typing dot:nth-child(2) { animation-delay: 0.2s; }
    .msg-typing dot:nth-child(3) { animation-delay: 0.4s; }

    @keyframes typingPulse {
      0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
      40% { transform: scale(1.1); opacity: 1; }
    }

    .ai-chat-chips-bar {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 0 10px 10px 10px;
      background: rgba(18, 11, 5, 0.95);
      border-top: 1px solid rgba(212, 175, 55, 0.15);
      position: relative;
    }

    .ai-chips-arrow {
      background: rgba(212, 175, 55, 0.2);
      border: 1px solid var(--clr-gold-dim);
      color: var(--clr-gold);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 0.68rem;
      cursor: pointer;
      flex-shrink: 0;
      transition: all 0.2s;
    }

    .ai-chips-arrow:hover {
      background: var(--clr-gold);
      color: #1A1008;
    }

    .ai-chat-chips-wrap {
      flex: 1;
      overflow: hidden;
      position: relative;
    }

    .ai-chat-chips-wrap::after {
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      width: 20px;
      background: linear-gradient(90deg, transparent, rgba(18, 11, 5, 0.95));
      pointer-events: none;
    }

    .ai-chat-chips {
      display: flex;
      gap: 6px;
      overflow-x: auto;
      white-space: nowrap;
      scroll-behavior: smooth;
      padding: 4px 0 6px 0;
      scrollbar-width: thin;
      scrollbar-color: var(--clr-gold-dim) transparent;
    }

    .ai-chat-chips::-webkit-scrollbar {
      height: 4px;
    }

    .ai-chat-chips::-webkit-scrollbar-track {
      background: transparent;
    }

    .ai-chat-chips::-webkit-scrollbar-thumb {
      background: var(--clr-gold-dim);
      border-radius: 4px;
    }

    .ai-chat-chips::-webkit-scrollbar-thumb:hover {
      background: var(--clr-gold);
    }

    .ai-chip {
      background: rgba(212, 175, 55, 0.15);
      border: 1px solid var(--clr-gold-dim);
      color: var(--clr-gold);
      font-size: 0.76rem;
      padding: 5px 10px;
      border-radius: 12px;
      cursor: pointer;
      transition: all 0.2s;
      flex-shrink: 0;
    }

    .ai-chip:hover {
      background: var(--clr-gold);
      color: #1A1008;
      font-weight: 700;
    }

    .ai-chat-inputbar {
      padding: 12px 14px;
      background: #120B05;
      border-top: 1px solid var(--clr-gold-dim);
      display: flex;
      gap: 8px;
      align-items: center;
    }

    .ai-chat-input {
      flex: 1;
      background: rgba(255, 255, 255, 0.08);
      border: 1px solid rgba(212, 175, 55, 0.3);
      border-radius: 20px;
      padding: 8px 14px;
      color: #FFF;
      font-size: 0.85rem;
      outline: none;
    }

    .ai-chat-input:focus {
      border-color: var(--clr-gold);
      box-shadow: 0 0 10px rgba(212, 175, 55, 0.3);
    }

    .ai-chat-send {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: var(--clr-gold);
      color: #1A1008;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1rem;
      transition: transform 0.2s;
    }

    .ai-chat-send:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);

  // Create Chatbot Elements
  const triggerBtn = document.createElement('div');
  triggerBtn.className = 'ai-chat-trigger';
  triggerBtn.title = 'Ask Haryana AI Assistant';
  triggerBtn.innerHTML = `<img src="assets/ai_assistant_avatar.png" alt="Haryana Traders AI" style="width: 100%; height: 100%; object-fit: cover; border-radius: 50%;"><span class="ai-chat-badge">AI</span>`;

  const chatWindow = document.createElement('div');
  chatWindow.className = 'ai-chat-window';
  chatWindow.innerHTML = `
    <div class="ai-chat-header">
      <div class="ai-chat-header__info">
        <div class="ai-chat-avatar" style="overflow: hidden; padding: 0;">
          <img src="assets/ai_assistant_avatar.png" alt="Haryana Traders AI" style="width: 100%; height: 100%; object-fit: cover;">
        </div>
        <div>
          <h4 class="ai-chat-header__title">Haryana Woodcraft AI</h4>
          <span class="ai-chat-header__status">Instant Palwal Assistant</span>
        </div>
      </div>
      <button class="ai-chat-close" id="ai-chat-close-btn">&times;</button>
    </div>

    <div class="ai-chat-messages" id="ai-chat-messages">
      <div class="msg-bubble msg-bubble--bot">
        Namaste! 🙏 I am <strong>Haryana Traders Royal AI Assistant</strong>.<br>
        Ask me anything about our 100% Solid Sheesham & Teak furniture, prices, cash vouchers (₹2,000–₹15,000), 50km free delivery, or showroom location in Palwal!
      </div>
    </div>

    <div class="ai-chat-chips-bar">
      <button class="ai-chips-arrow" id="ai-chips-prev" title="Scroll Left">◀</button>
      <div class="ai-chat-chips-wrap">
        <div class="ai-chat-chips" id="ai-chat-chips">
          <button class="ai-chip" data-query="Show me Solid Sheesham Beds">🪑 Sheesham Beds</button>
          <button class="ai-chip" data-query="How do Mystery Cash Vouchers work?">💸 Cash Vouchers</button>
          <button class="ai-chip" data-query="Where is the Palwal showroom located?">📍 Showroom Location</button>
          <button class="ai-chip" data-query="What is your delivery policy?">🚚 Free 50km Delivery</button>
          <button class="ai-chip" data-query="Talk to owner on WhatsApp">📲 Talk on WhatsApp</button>
        </div>
      </div>
      <button class="ai-chips-arrow" id="ai-chips-next" title="Scroll Right">▶</button>
    </div>

    <div class="ai-chat-inputbar">
      <input type="text" id="ai-chat-input" class="ai-chat-input" placeholder="Ask about products, offers, or wood types..." />
      <button class="ai-chat-send" id="ai-chat-send-btn">➔</button>
    </div>
  `;

  document.body.appendChild(triggerBtn);
  document.body.appendChild(chatWindow);

  // Event Handlers
  const messagesBox = chatWindow.querySelector('#ai-chat-messages');
  const inputEl = chatWindow.querySelector('#ai-chat-input');
  const sendBtn = chatWindow.querySelector('#ai-chat-send-btn');
  const closeBtn = chatWindow.querySelector('#ai-chat-close-btn');
  const chipsRow = chatWindow.querySelector('#ai-chat-chips');
  const btnChipsPrev = chatWindow.querySelector('#ai-chips-prev');
  const btnChipsNext = chatWindow.querySelector('#ai-chips-next');

  btnChipsPrev?.addEventListener('click', () => {
    chipsRow.scrollBy({ left: -140, behavior: 'smooth' });
  });

  btnChipsNext?.addEventListener('click', () => {
    chipsRow.scrollBy({ left: 140, behavior: 'smooth' });
  });

  chipsRow?.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      chipsRow.scrollLeft += e.deltaY;
    }
  });

  triggerBtn.addEventListener('click', () => {
    chatWindow.classList.toggle('open');
    if (chatWindow.classList.contains('open')) {
      inputEl.focus();
    }
  });

  closeBtn.addEventListener('click', () => {
    chatWindow.classList.remove('open');
  });

  // Knowledge Engine (Zero Cost, Instant Expert Bot)
  function getKnowledgeResponse(query) {
    const q = query.toLowerCase().trim();

    if (q.includes('bed') || q.includes('bedroom') || q.includes('maharaja') || q.includes('wardrobe')) {
      return `🛏️ <strong>Royal Bedroom Collection:</strong><br>
        • <strong>Maharaja Sheesham King Bed</strong>: ₹2,85,000 (100% Solid Sheesham with crown headboard & storage)<br>
        • <strong>Mughal Carved 4-Door Wardrobe</strong>: ₹2,40,000 (Dark Rosewood satin finish)<br><br>
        <a href="products.html?category=Bedroom" class="ai-action-btn">Explore Bedroom Collection →</a>`;
    }

    if (q.includes('dining') || q.includes('table') || q.includes('darbar')) {
      return `🍽️ <strong>Royal Dining Collection:</strong><br>
        • <strong>Darbar Hall Dining Table (8-Seater)</strong>: ₹1,85,000 (Premium Teak Wood with imperial brass inlay craftsmanship).<br><br>
        <a href="products.html?category=Dining" class="ai-action-btn">View Dining Table Details →</a>`;
    }

    if (q.includes('sofa') || q.includes('living') || q.includes('recliner') || q.includes('rajputana')) {
      return `🛋️ <strong>Living Room Luxury:</strong><br>
        • <strong>Rajputana Solid Wood Sofa Set (3+2+1)</strong>: ₹1,45,000 (Teak wood frame with memory foam velvet cushions).<br>
        • <strong>Sheesham Corner TV Credenza</strong>: ₹55,000<br>
        • <strong>Royal Sheesham Leather Lounge Recliner</strong>: ₹92,000<br><br>
        <a href="products.html?category=Living" class="ai-action-btn">View Living Room Furniture →</a>`;
    }

    if (q.includes('office') || q.includes('desk') || q.includes('executive') || q.includes('study')) {
      return `💼 <strong>Executive Office Suite:</strong><br>
        • <strong>Executive CEO L-Desk</strong>: ₹1,25,000 (Solid Walnut & Brushed Brass with wireless charging pad)<br>
        • <strong>Heritage Teak Study Desk</strong>: ₹68,000<br><br>
        <a href="products.html?category=Office" class="ai-action-btn">Browse Office Collection →</a>`;
    }

    if (q.includes('voucher') || q.includes('offer') || q.includes('cash') || q.includes('discount') || q.includes('gift') || q.includes('unwrap')) {
      return `💸 <strong>Royal Cash Voucher Rewards:</strong><br>
        You can unwrap a random cash discount voucher worth <strong>₹2,000 to ₹15,000</strong>!<br>
        • Vouchers apply automatically on qualifying orders from ₹50,000 to ₹2,50,000+.<br><br>
        <a href="offer.html" class="ai-action-btn">🎁 Unwrap Cash Voucher Page →</a>`;
    }

    if (q.includes('location') || q.includes('address') || q.includes('where') || q.includes('showroom') || q.includes('palwal') || q.includes('map')) {
      return `📍 <strong>Showroom Location:</strong><br>
        <strong>Haryana Traders</strong><br>
        Near OBC Bank, Jaber Nagar, Palwal, Haryana 121102.<br><br>
        <a href="https://maps.google.com/?q=Jaber+Nagar+OBC+Bank+Palwal+Haryana" target="_blank" class="ai-action-btn">Open Google Maps Directions ↗</a>`;
    }

    if (q.includes('delivery') || q.includes('ship') || q.includes('transport') || q.includes('free')) {
      return `🚚 <strong>White-Glove Delivery Guarantee:</strong><br>
        • We provide <strong>FREE White-Glove Home Delivery & Professional Assembly</strong> within 50km radius of Palwal showroom (Palwal, Faridabad, Gurgaon, Hodal, Ballabgarh).<br>
        • Safe protective transit packaging for zero scratches!`;
    }

    if (q.includes('wood') || q.includes('material') || q.includes('quality') || q.includes('sheesham') || q.includes('teak')) {
      return `🪵 <strong>100% Solid Wood Guarantee:</strong><br>
        • Zero MDF, Zero Particle Board, Zero Plywood Veneers.<br>
        • Every piece is crafted from 100% certified, kiln-seasoned Indian Sheesham, Teak, and Rosewood to prevent warping and termite damage.`;
    }

    if (q.includes('contact') || q.includes('whatsapp') || q.includes('phone') || q.includes('call') || q.includes('owner')) {
      return `📞 <strong>Direct Contact Details:</strong><br>
        • Phone / WhatsApp: <strong>+91 9896097124</strong><br><br>
        <a href="https://wa.me/919896097124?text=Hello%20Haryana%20Traders%20owner%2C%20I'm%20inquiring%20about%20furniture" target="_blank" class="ai-action-btn" style="background:#25D366; color:#FFF !important;">💬 Open WhatsApp Chat ↗</a>`;
    }

    // Default intelligent response
    return `✨ At <strong>Haryana Traders (Est. 2009, Palwal)</strong>, we craft 100% solid Sheesham & Teak furniture.<br><br>
      <a href="products.html" class="ai-action-btn">🪑 Explore 8 Handcrafted Pieces →</a><br>
      <a href="offer.html" class="ai-action-btn" style="margin-top:4px;">🎁 Unwrap ₹2k-₹15k Voucher →</a>`;
  }

  function sendMessage(text) {
    if (!text) return;

    // User Message
    const userBubble = document.createElement('div');
    userBubble.className = 'msg-bubble msg-bubble--user';
    userBubble.innerText = text;
    messagesBox.appendChild(userBubble);
    inputEl.value = '';
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // Typing Indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.className = 'msg-typing';
    typingIndicator.innerHTML = `<dot></dot><dot></dot><dot></dot>`;
    messagesBox.appendChild(typingIndicator);
    messagesBox.scrollTop = messagesBox.scrollHeight;

    // Response Generation
    setTimeout(() => {
      typingIndicator.remove();

      const botBubble = document.createElement('div');
      botBubble.className = 'msg-bubble msg-bubble--bot';
      botBubble.innerHTML = getKnowledgeResponse(text);
      messagesBox.appendChild(botBubble);
      messagesBox.scrollTop = messagesBox.scrollHeight;
    }, 600);
  }

  sendBtn.addEventListener('click', () => sendMessage(inputEl.value.trim()));
  inputEl.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') sendMessage(inputEl.value.trim());
  });

  chatWindow.querySelectorAll('.ai-chip').forEach(chip => {
    chip.addEventListener('click', () => sendMessage(chip.dataset.query));
  });
})();

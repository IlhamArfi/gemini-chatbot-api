const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

// Array to store conversation history
let conversation = [];

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const userMessage = input.value.trim();
  if (!userMessage) return;

  // Add the user's message to the chat box
  appendMessage('user', userMessage);
  input.value = '';

  // Append user message to conversation history
  conversation.push({ role: 'user', text: userMessage });

  // Show a temporary "Thinking..." bot message
  const thinkingId = 'thinking-msg';
  appendMessage('bot', 'Thinking...', thinkingId);

  try {
    // Send the POST request to the backend API
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ conversation })
    });

    // Remove the "Thinking..." message
    removeMessage(thinkingId);

    if (!response.ok) {
      throw new Error(`Server returned status: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.result) {
      // Append AI reply to chat box
      appendMessage('bot', data.result);
      
      // Append bot response to conversation history
      conversation.push({ role: 'model', text: data.result });
    } else {
      // If no result is received
      appendMessage('bot', 'Sorry, no response received.');
    }
  } catch (error) {
    console.error('Error fetching chat response:', error);
    // Remove the "Thinking..." message in case of a network or parsing error
    removeMessage(thinkingId);
    
    // Show error message
    appendMessage('bot', 'Failed to get response from server.');
  }
});

function appendMessage(sender, text, id = null) {
  const msg = document.createElement('div');
  msg.classList.add('message', sender);
  
  if (sender === 'bot') {
    msg.innerHTML = formatBotMessage(text);
  } else {
    msg.textContent = text;
  }
  
  // Clear floats to ensure each message starts on a new line
  msg.style.clear = 'both';
  
  if (id) {
    msg.id = id;
  }
  
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function removeMessage(id) {
  const msg = document.getElementById(id);
  if (msg) {
    msg.remove();
  }
}

function formatBotMessage(text) {
  // Escape HTML to prevent XSS
  const div = document.createElement('div');
  div.textContent = text;
  let html = div.innerHTML;

  // Replace **text** with <strong>text</strong>
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

  // Format paragraphs
  const paragraphs = html.split(/\n\n+/);
  return paragraphs.map(p => `<p style="margin: 0 0 10px 0;">${p.replace(/\n/g, '<br>')}</p>`).join('');
}

// Toggle Chat Widget Logic
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatClose = document.getElementById('chat-close');

if (chatToggle && chatContainer && chatClose) {
  chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('hidden');
  });

  chatClose.addEventListener('click', () => {
    chatContainer.classList.add('hidden');
  });
}

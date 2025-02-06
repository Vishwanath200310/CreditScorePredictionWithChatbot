document.addEventListener('DOMContentLoaded', function () {
    // Credit Rating Form
    const creditForm = document.getElementById('creditForm');
    const resultDiv = document.getElementById('result');
  
    creditForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const monthly_spending = parseFloat(
        document.getElementById('monthly_spending').value
      );
      const utility_spending = parseFloat(
        document.getElementById('utility_spending').value
      );
      const ecom_transaction_volume = parseFloat(
        document.getElementById('ecom_transaction_volume').value
      );
      const investment_activity = parseFloat(
        document.getElementById('investment_activity').value
      );
      const social_trust_score = parseFloat(
        document.getElementById('social_trust_score').value
      );
  
      const creditRating = getCreditRating(
        monthly_spending,
        utility_spending,
        ecom_transaction_volume,
        investment_activity,
        social_trust_score
      );
      resultDiv.textContent = 'Credit Rating: ' + creditRating;
    });
  
    function getCreditRating(monthly, utility, ecom, investment, trust) {
      // Sample logic to determine credit rating
      if (trust >= 90 && investment >= 50) {
        return 'Excellent';
      } else if (trust >= 70) {
        return 'Good';
      } else if (trust >= 50) {
        return 'Average';
      } else {
        return 'Poor';
      }
    }
  
    // Chatbot Logic
    const chatInput = document.getElementById('chatbot-user-input');
    const chatSend = document.getElementById('chatbot-send');
    const chatMessages = document.getElementById('chatbot-messages');
  
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function (e) {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });
  
    function sendMessage() {
      const userText = chatInput.value.trim();
      if (userText === '') return;
      appendMessage('user', userText);
      chatInput.value = '';
  
      setTimeout(function () {
        const botResponse = getBotResponse(userText);
        appendMessage('bot', botResponse);
        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
    }
  
    function appendMessage(sender, text) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'message ' + sender;
      messageDiv.textContent = text;
      chatMessages.appendChild(messageDiv);
    }
  
    function getBotResponse(userText) {
      const text = userText.toLowerCase();
      if (text.includes('credit') || text.includes('rating')) {
        return 'Your credit rating is determined by several factors including your spending habits, investment activity, and social trust score.';
      } else if (text.includes('investment')) {
        return 'Investing regularly and diversifying your portfolio can improve your financial health.';
      } else if (text.includes('budget') || text.includes('spending')) {
        return 'Keeping track of your monthly spending and utility expenses can help you manage your finances better.';
      } else if (text.includes('savings')) {
        return 'It is important to save a portion of your income each month for unforeseen expenses.';
      } else if (text.includes('loan') || text.includes('credit card')) {
        return 'Always review the terms and ensure you can manage repayments before taking a loan or using a credit card extensively.';
      } else {
        return 'I am here to help! Could you please elaborate on your financial question?';
      }
    }
  });
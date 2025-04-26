// Wait until the page content is fully loaded
document.addEventListener('DOMContentLoaded', function() {

    const urlForm = document.getElementById('urlForm');
    const urlInput = document.getElementById('urlInput');
    const resultDiv = document.getElementById('result');
  
    urlForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const userURL = urlInput.value.trim();
  
      if (!userURL) {
        showResult("❗ Please enter a valid URL.", "unsafe");
        return;
      }
  
      // Show loading message
      showLoading();
  
      // Simulate checking delay for better UX
      setTimeout(() => {
        const safe = checkURLSafety(userURL);
        if (safe) {
          showResult("✅ This website looks safe!", "safe");
        } else {
          showResult("⚠️ Warning: This website might be unsafe!", "unsafe");
        }
      }, 1500); // 1.5 seconds loading effect
    });
  
    // Show checking result
    function showResult(message, status) {
      resultDiv.className = "result-box"; // reset classes
      resultDiv.textContent = message;
      resultDiv.classList.add(status);
    }
  
    // Show loading spinner
    function showLoading() {
      resultDiv.className = "result-box"; // reset classes
      resultDiv.innerHTML = `<div class="loader"></div> Checking...`;
    }
  
    // Very basic fake URL safety check (expand later)
    function checkURLSafety(url) {
      const suspiciousWords = ['free', 'cheap', 'winner', 'prize', 'click', 'urgent', 'account', 'verify', 'claim', 'gift', 'login'];
      const urlLower = url.toLowerCase();
      return !suspiciousWords.some(word => urlLower.includes(word));
    }
  
  });
  
  

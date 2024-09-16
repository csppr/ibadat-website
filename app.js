function calculateZakat() {
    // Get the value of the wealth input
    const wealth = document.getElementById('wealth').value;
    
    // Check if input is valid
    if (wealth > 0) {
      // Calculate zakat (2.5%)
      const zakat = wealth * 0.025;
      
      // Display the result
      document.getElementById('result').innerText = `Your zakat is: ${zakat.toFixed(2)}`;
    } else {
      // Show an error if input is invalid
      document.getElementById('result').innerText = "Please enter a valid amount.";
    }
  }

  
  // Sample prayer times (you can replace this with real data from an API)
const prayerTimes = {
    Fajr: "5:00 AM",
    Dhuhr: "12:30 PM",
    Asr: "3:45 PM",
    Maghrib: "6:20 PM",
    Isha: "8:00 PM"
  };
  
  // Function to display prayer times
  function displayPrayerTimes() {
    const prayerList = document.getElementById('prayer-list');
    
    // Loop through the prayer times and create list items
    for (const prayer in prayerTimes) {
      const listItem = document.createElement('li');
      listItem.textContent = `${prayer}: ${prayerTimes[prayer]}`;
      prayerList.appendChild(listItem);
    }
  }
  
  // Call the function when the page loads
  window.onload = displayPrayerTimes;

  
  function checkProgress() {
    const fajr = document.getElementById('fajr').checked;
    const dhuhr = document.getElementById('dhuhr').checked;
    const asr = document.getElementById('asr').checked;
    const maghrib = document.getElementById('maghrib').checked;
    const isha = document.getElementById('isha').checked;
    
    // Calculate how many prayers are completed
    const totalPrayers = [fajr, dhuhr, asr, maghrib, isha].filter(Boolean).length;
    document.getElementById('progress').innerText = `You have completed ${totalPrayers} out of 5 prayers.`;
  }
  
document.addEventListener("DOMContentLoaded", function () {
  const daySelect = document.getElementById("day");
  const monthSelect = document.getElementById("month");
  const yearSelect = document.getElementById("year");

  // Populate days (1-31)
  for (let i = 1; i <= 31; i++) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    daySelect.appendChild(option);
  }

  // Populate months (January-December)
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
  for (let i = 0; i < months.length; i++) {
    const option = document.createElement("option");
    option.value = i + 1;
    option.textContent = months[i];
    monthSelect.appendChild(option);
  }

  // Populate years (current year to current year - 100)
  const currentYear = new Date().getFullYear();
  for (let i = currentYear; i >= currentYear - 14; i--) {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = i;
    yearSelect.appendChild(option);
  }

  monthSelect.addEventListener("change", updateDays);
  yearSelect.addEventListener("change", updateDays);

  function updateDays() {
    const selectedYear = parseInt(yearSelect.value);
    const selectedMonth = parseInt(monthSelect.value);

    // Check if both month and year are selected
    if (!isNaN(selectedYear) && !isNaN(selectedMonth)) {
      const daysInMonth = new Date(selectedYear, selectedMonth, 0).getDate();

      // Clear previous days
      daySelect.innerHTML = "";
      for (let i = 1; i <= daysInMonth; i++) {
        const option = document.createElement("option");
        option.value = i;
        option.textContent = i;
        daySelect.appendChild(option);
      }
    }
  }
});

function calculateAge() {
  const day = parseInt(document.getElementById("day").value);
  const month = parseInt(document.getElementById("month").value);
  const year = parseInt(document.getElementById("year").value);
  const gender = document.getElementById("gender").value;

  if (!day || !month || !year || !gender) {
    alert("Please select your date of birth and gender.");
    return;
  }

  const dob = new Date(year, month - 1, day);
  const today = new Date();
  let age = today.getFullYear() - dob.getFullYear();
  const monthDifference = today.getMonth() - dob.getMonth();

  if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < dob.getDate())) {
    age--;
  }

  document.getElementById("result").textContent = `You are a ${age} years old ${gender}.`;

  const ageGroup = determineAgeGroup(age, gender);
  loadWebsiteInIframe(ageGroup);
}

function determineAgeGroup(age, gender) {
  if (age >= 7 && age <= 9 && gender === "Male") {
    return "a";
  } else if (age == 0 && gender == "Male") {
    return "test";
  } else if (age >= 10 && age <= 12 && gender === "Male") {
    return "b";
  } else if ((age == 13 && gender === "Male") || (age == 14 && gender === "Male")) {
    return "c";
  } else if (age >= 7 && age <= 9 && gender === "Female") {
    return "d";
  } else if (age >= 10 && age <= 12 && gender === "Female") {
    return "e";
  } else if ((age == 13 && gender === "Female") || (age == 14 && gender === "Female")) {
    return "f";
  } else {
    url = "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/9/7/5/9/9759c4afa28f61ee32831311b3d5d55f67f5e172.png"; // Default URL
  }
}

function loadWebsiteInIframe(ageGroup) {
  const iframe = document.getElementById("contentFrame");
  let url = "";

  switch (ageGroup) {
    case "a":
      url = "https://mohid.co/go/mga65EQ";
      break;
    case "b":
      url = "https://mohid.co/go/nQl7a7g";
      break;
    case "c":
      url = "https://mohid.co/go/VK40MnK";
      break;
    case "d":
      url = "https://mohid.co/go/lQV7wEK";
      break;
    case "e":
      url = "https://mohid.co/go/WgL7X6o";
      break;
    case "f":
      url = "https://mohid.co/go/yoRdqEQ";
      break;
    case "test":
      url = "https://mohid.co/go/JoZB6vo";
      alert("This is not an official registration, this is for TESTING purposes");
      break;
    default:
      url = "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/9/7/5/9/9759c4afa28f61ee32831311b3d5d55f67f5e172.png"; // Default URL
  }

  iframe.src = url;
  iframe.style.display = "block";
}

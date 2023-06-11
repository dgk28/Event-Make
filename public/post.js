
//for the event mode option
const eventTypeSelect = document.getElementById("event-type");
const eventPlaceDiv = document.getElementById("event-place");

eventTypeSelect.addEventListener("change", function() {
    eventPlaceDiv.innerHTML = "";
  if (eventTypeSelect.value === "Online") {
    const eventLinkLabel = document.createElement("label");
    eventLinkLabel.setAttribute("for", "event-link");
    eventLinkLabel.innerText = "Event Link:";
    
    const eventLinkInput = document.createElement("input");
    eventLinkInput.setAttribute("type", "text");
    eventLinkInput.setAttribute("id", "event-link");
    eventLinkInput.setAttribute("name", "eventLink");
    
    eventPlaceDiv.appendChild(eventLinkLabel);
    eventPlaceDiv.appendChild(eventLinkInput);
  } else if (eventTypeSelect.value === "Offline") {
    const eventLocationLabel = document.createElement("label");
    eventLocationLabel.setAttribute("for", "event-location");
    eventLocationLabel.innerText = "Event Location:";
    
    const eventLocationInput = document.createElement("input");
    eventLocationInput.setAttribute("type", "text");
    eventLocationInput.setAttribute("id", "event-location");
    eventLocationInput.setAttribute("name", "eventLocation");
    
    eventPlaceDiv.appendChild(eventLocationLabel);
    eventPlaceDiv.appendChild(eventLocationInput);
  } else {
    // Clear any previously added input fields
    eventPlaceDiv.innerHTML = "";
  }
});



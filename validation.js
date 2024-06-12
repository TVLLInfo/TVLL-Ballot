function validateForm(form) {
  // Validate name and email (adapt as needed)
  // ... your validation logic here ...

  // Get the selected options
  var selectedOptions = form.options.selectedOptions;

  // Check if number of selections is between 7 and 14
  if (selectedOptions.length < 7 || selectedOptions.length > 14) {
    alert("Please select between 7 and 14 candidates.");
    return false;
  }

  return true;
}

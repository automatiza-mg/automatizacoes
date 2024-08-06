// Target external links blank
var all_links = document.querySelectorAll('a');
for (var i = 0; i < all_links.length; i++){
       var a = all_links[i];
       if(a.hostname != location.hostname && a.parentElement.id != 'download-button') {
            a.target = '_blank';
       }
}

// Download .csv content into Excel files
const downloadButton = document.getElementById("download-button");

if (downloadButton) {
  document.getElementById("download-button").addEventListener("click", async function() {
    const button = this;
    button.disabled = true;

    let url = null;
    try {
      // Get the CSV file path (replace with your actual file path)
      const csvFilePath = button.getAttribute('path');

      // Fetch the CSV file contents
      const response = await fetch(csvFilePath);
      const csvText = await response.text();

      // Manually convert CSV text to an array of arrays
      const rows = csvText.split('\n').map(row => row.split(','));

      // Convert the array of arrays to a worksheet
      const worksheet = XLSX.utils.aoa_to_sheet(rows);

      // Create a new workbook and append the worksheet
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");

      // Generate binary Excel file
      const wbout = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

      // Create a Blob from the binary Excel file
      const blob = new Blob([wbout], { type: "application/octet-stream" });

      // Create a temporary URL for the file
      url = URL.createObjectURL(blob);

      // Create a link element and simulate a click
      const link = document.createElement("a");
      link.href = url;
      link.download = button.getAttribute('fileName');
      link.click();

    } catch (error) {
      console.error("Download error:", error);
    } finally {
      // Re-enable button for future clicks
      button.disabled = false;

      // Clean up even if an error occurs
      if (url) {
        URL.revokeObjectURL(url);
      }
    }
  });
}

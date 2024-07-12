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
  downloadButton.addEventListener("click", async () => {
    // Prevent multiple simultaneous clicks
    downloadButton.disabled = true;

    try {
      // Get the CSV file path (replace with your actual file path)
      const csvFilePath = downloadButton.attributes.path.value;

      // Fetch the CSV file contents
      const response = await fetch(csvFilePath);
      const blob = await response.blob();

      // Create a temporary URL for the file
      const url = URL.createObjectURL(blob);

      // Create a link element and simulate a click
      const link = document.createElement("a");
      link.href = url;
      link.download = downloadButton.attributes.fileName.value;
      link.click();

    } catch (error) {
      console.error("Download error:", error);
    } finally {
      // Re-enable button for future clicks
      downloadButton.disabled = false;
      // Clean up even if an error occurs
      URL.revokeObjectURL(url);
    }
  });
}

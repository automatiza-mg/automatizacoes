// Target external links blank
var all_links = document.querySelectorAll('a');
for (var i = 0; i < all_links.length; i++){
       var a = all_links[i];
       if(a.hostname != location.hostname) {
            a.target = '_blank';
       }
}


// Download .csv content into Excel files
const downloadButton = document.getElementsByClassName("download-button")[0];

if (downloadButton) {
  downloadButton.addEventListener("click", () => {
    // Get the CSV file path (replace with your actual file path)
    const csvFilePath = downloadButton.attributes.path.value;

    // Fetch the CSV file contents
    fetch(csvFilePath)
      .then(response => response.blob())
      .then(blob => {
        // Create a temporary URL for the file
        const url = URL.createObjectURL(blob);

        // Create a link element and simulate a click
        const link = document.createElement("a");
        link.href = url;
        // Set desired filename
        link.download = downloadButton.attributes.fileName.value;
        link.click();

        // Revoke the temporary URL to clean up
        URL.revokeObjectURL(url);
      });
  });
}

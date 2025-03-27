import html2canvas from 'html2canvas';

class PrintService {
    async printPage() {
        const unwantedElements = document.querySelectorAll(".btn, #rollModal");
        unwantedElements.forEach(el => el.style.display = "none");

        const element = document.body;

        const canvas = await html2canvas(element, { scale: 2 });
        const imgData = canvas.toDataURL("image/png");
        const printWindow = window.open("", "_blank");

        printWindow.document.write(`
      <html>
        <head>
          <title>The Quail King welcomes you to the..</title>
          <style>
            body { margin: 0; text-align: center; font-family: Arial, sans-serif; }
            img { width: 100%; }
            .seal { position: fixed; bottom: 10px; right: 10px; width: 100px; }
          </style>
        </head>
        <body>
          <img src="${imgData}" />
          <script>
            window.onload = function() { 
              window.print();
              window.close();
            };
          </script>
        </body>
        <footer>Thank you for your patronage</footer>
      </html>
    `);

        printWindow.document.close();

        unwantedElements.forEach(el => el.style.display = "");
    }
}
export const printService = new PrintService();
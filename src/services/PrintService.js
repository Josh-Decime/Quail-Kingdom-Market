class PrintService {
  printPage(items, blackMarketMode, logoUrl, sealUrl) {
    if (!items || items.length === 0) {
      alert("No items to print!");
      return;
    }

    const printWindow = window.open("", "_blank");
    if (!printWindow) {
      alert("Popup blocked! Allow popups for printing.");
      return;
    }

    // Build HTML content dynamically
    let itemsHtml = '';
    items.forEach(item => {
      const headerStyle = this.getHeaderStyle(item);
      const subTextStyle = this.getSubTextStyle(item);
      const textStyle = this.getTextStyle(item.description);
      const isBlackMarket = item.blackMarket || blackMarketMode;
      const cardClass = item.description.length > 800 ? 'long-description' : '';
      // Conditionally add "Purchased" label if item.purchased is true
      // Conditionally add "Purchased" label if item.purchased is true
      const priceText = item.price ? `${item.purchased ? '(Purchased) ' : ''}${item.price} gp` : '(Not Priced)';

      itemsHtml += `
        <div class="card ${cardClass}">
          <div class="header">
            <h5 style="${headerStyle}" class="${isBlackMarket ? 'black-market-text' : ''}">${item.name}</h5>
            <p style="${subTextStyle}" class="${isBlackMarket ? 'black-market-price' : ''}"><strong>${priceText}</strong></p>
          </div>
          <div class="details">
            ${isBlackMarket ? '<span style="' + subTextStyle + '"><strong>Black Market Item</strong></span>' : ''}
            <span style="${subTextStyle}"><strong>${isBlackMarket ? 'Estimated Rarity' : 'Rarity'}: ${item.rarity}</strong></span>
            <span style="${subTextStyle}"><strong>Type: ${item.type}</strong></span>
            <span style="${subTextStyle}"><strong>Weight: ${item.weight} lbs</strong></span>
            ${item.attunement ? '<span style="' + subTextStyle + '"><strong>Requires Attunement</strong></span>' : ''}
          </div>
          <hr>
          <p class="description" style="${textStyle}">${item.description.replace(/\n/g, '<br>')}</p>
        </div>
      `;
    });

    const html = `
      <html>
        <head>
          <title>Magic Items Print</title>
          <style>
            @page { size: letter portrait; margin: 0.5in; }
            body { margin: 0; font-family: Arial, sans-serif; position: relative; }
            .container { width: 7.5in; margin: 0 auto; padding-top: 0.2in; padding-bottom: 0.5in; } /* Balanced for single-page and lower push */
            .header-section { text-align: left; margin-bottom: 0.1in; }
            .header-section img { width: 0.6in; height: auto; vertical-align: middle; margin-right: 0.1in; }
            .header-section h1 { display: inline; font-size: 0.8rem; margin: 0; }
            .row { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.1in; }
            .card { border: 1px solid #000; border-radius: 0.1in; padding: 0.2in; page-break-inside: avoid; overflow: hidden; font-size: 0.6rem; }
            .header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.05in; }
            .header h5 { margin: 0; font-size: 0.75rem; }
            .details { display: flex; flex-direction: row; flex-wrap: wrap; justify-content: space-between; gap: 0.1in; margin-bottom: 0.05in; font-size: 0.5rem; line-height: 1; }
            .details span { margin: 0; }
            .description { margin-top: 0.05in; font-size: 0.65rem; line-height: 1.1; word-wrap: break-word; }
            hr { margin: 0.05in 0; border-top: 1px solid #000; }
            .black-market-text { background: #000; color: #fff; padding: 0.05in; border-radius: 0.05in; }
            .black-market-price { color: #838383; }
            footer { position: fixed; bottom: 0.05in; left: 0; width: 100%; text-align: center; font-size: 0.7rem; } /* Lower pinning, text only */
            .seal { position: fixed; bottom: 0.05in; right: 0.5in; width: 0.6in; height: auto; opacity: 0.8; } /* Right corner, scaled up */
            /* Adjust for long content */
            .card.long-description .description { font-size: 0.6rem; line-height: 1.05; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header-section">
              <img src="${logoUrl}" alt="Quail Kingdom Logo" />
              <h1>Quail Kingdom Market</h1>
            </div>
            <div class="row">
              ${itemsHtml}
            </div>
          </div>
          <footer>DM Authorization Signature: ________________________________</footer>
          <img class="seal" src="${sealUrl}" alt="Quail Kingdom Seal" />
          <script>
            window.onload = () => { window.print(); setTimeout(() => window.close(), 500); };
          </script>
        </body>
      </html>
    `;

    printWindow.document.write(html);
    printWindow.document.close();
  }

  getHeaderStyle(item) {
    return item.name.length > 30 ? 'font-size: 0.65rem;' : 'font-size: 0.75rem;';
  }

  getSubTextStyle(item) {
    return 'font-size: 0.5rem;';
  }

  getTextStyle(description) {
    let size = '0.65rem';
    if (description.length > 800) size = '0.6rem';
    if (description.length > 1200) size = '0.55rem';
    return `font-size: ${size}; line-height: 1.1;`;
  }
}

export const printService = new PrintService();
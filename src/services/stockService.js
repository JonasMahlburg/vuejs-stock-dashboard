import axios from 'axios';

const API_URL = 'https://sheetdb.io/api/v1/rqlnqbo8i5pwf?sheet=$AAPL';

const order = [
  'Mar 21',
  'Jun 21',
  'Sep 21',
  'Dec 21',
  'Mar 22',
  'Jun 22',
  'Sep 22',
  'Dec 22',
  'Mar 23',
  '""',
  '3 Aug 23',
  '2 Nov 23',
  '1 Feb 24',
  '2 Mai 24',
  '1 Aug 24',
];

// Helper-Funktion, um die API-Daten nach dem "order"-Array zu sortieren
const sortStockData = (data) => {
  return data.sort((a, b) => {
    // Holen der Indizes der period-Werte im order-Array
    const indexA = order.indexOf(a.period);
    const indexB = order.indexOf(b.period);

    // Wenn ein Datum nicht im order-Array ist, wird es ans Ende verschoben
    return indexA - indexB;
  });
};

export const stockService = async () => {
  try {
    const response = await axios.get(API_URL);

    // Annahme: Die API-Daten haben eine Eigenschaft 'period', die den Zeitraum angibt
    const sortedData = sortStockData(response.data);

    return sortedData; // Sortierte Daten zurückgeben
  } catch (error) {
    console.error('Fehler beim Abrufen der API-Daten:', error);
    throw error;
  }
};
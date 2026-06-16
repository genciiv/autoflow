import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  section: {
    marginBottom: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "1 solid #e5e7eb",
    paddingVertical: 8,
  },
  total: {
    marginTop: 20,
    fontSize: 16,
    textAlign: "right",
  },
});

export function InvoiceDocument() {
  const invoice = {
    number: "INV-0001",
    date: "12.06.2026",
    customer: "Arben Hoxha",
    vehicle: "Volkswagen Jetta",
    plate: "AA123BB",
    items: [
      { name: "Punë servisi", qty: 1, price: "€50", total: "€50" },
      { name: "Vaj motori 5W30", qty: 5, price: "€9", total: "€45" },
    ],
    total: "€95",
  };

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <Text style={styles.title}>AutoFlow - Faturë</Text>

        <View style={styles.section}>
          <Text>Fatura: {invoice.number}</Text>
          <Text>Data: {invoice.date}</Text>
        </View>

        <View style={styles.section}>
          <Text>Klienti: {invoice.customer}</Text>
          <Text>
            Automjeti: {invoice.vehicle} - {invoice.plate}
          </Text>
        </View>

        <View style={styles.section}>
          {invoice.items.map((item) => (
            <View key={item.name} style={styles.row}>
              <Text>{item.name}</Text>
              <Text>
                {item.qty} x {item.price} = {item.total}
              </Text>
            </View>
          ))}
        </View>

        <Text style={styles.total}>Totali: {invoice.total}</Text>
      </Page>
    </Document>
  );
}
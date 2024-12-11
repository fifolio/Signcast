import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { CollectedData_interface } from '@/interfaces/CollectedData_interface';

const PDF = ({ collectedData }: { collectedData: CollectedData_interface }) => (

    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <Text style={styles.title}>{collectedData.title}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text render={({ pageNumber, totalPages }) => `Sheets ${pageNumber} / ${totalPages}`} />
                </View>
            </View>
            <View>
                <Text style={styles.subtitle}>{collectedData.date}    {collectedData.department}    Drawer: {collectedData.drawer}</Text>
            </View>


            {/* Main Content Row */}
            <View style={styles.row}>
                {/* Screen Specifications */}
                <View style={styles.column}>
                    <Text style={styles.sectionTitle}>Screen Specifications</Text>

                    <Text style={styles.label}>Model</Text>
                    <Text style={styles.value}>Samsung LH55QMBTBGCXZA</Text>

                    <Text style={styles.label}>Dimensions</Text>
                    <View style={styles.dimensionRow}>
                        <Text style={styles.value}>Height: 28.71"</Text>
                        <Text style={styles.value}>Width: 49.01"</Text>
                    </View>
                    <View style={styles.dimensionRow}>
                        <Text style={styles.value}>Depth: 2.35"</Text>
                        <Text style={styles.value}>Weight: 40.12 lbs</Text>
                    </View>

                    <Text style={styles.label}>Screen Size</Text>
                    <Text style={styles.value}>55"</Text>
                </View>

                {/* Installation Details */}
                <View style={styles.column}>
                    <Text style={styles.sectionTitle}>Installation Details</Text>

                    <Text style={styles.label}>Media Player</Text>
                    <Text style={styles.value}>Intel NUC Mini PC</Text>

                    <Text style={styles.label}>Mount Configuration</Text>
                    <View style={styles.dimensionRow}>
                        <Text style={styles.value}>Type: Recessed Niche</Text>
                        <Text style={styles.value}>Orientation: Horizontal</Text>
                    </View>
                    <View style={styles.dimensionRow}>
                        <Text style={styles.value}>Niche Depth: 5.1"</Text>
                        <Text style={styles.value}>Floor Distance: 50"</Text>
                    </View>

                    <Text style={styles.label}>Receptacle Box</Text>
                    <Text style={styles.value}>TVBU505GC</Text>
                </View>
            </View>

            {/* Installation Notes */}
            <View style={styles.installationNotes}>
                <Text style={styles.sectionTitle}>Installation Notes</Text>

                <Text style={styles.label}>Receptacle Box Requirements:</Text>
                <Text style={styles.bulletPoint}>• 2× Terminated Power Outlets</Text>
                <Text style={styles.bulletPoint}>• 1× Terminated Data CAT5 Ethernet Outlet</Text>

                <Text style={styles.label}>Screen-to-Niche Gap:</Text>
                <Text style={styles.bulletPoint}>• Screens under 55": 1.5" gap on each side</Text>
                <Text style={styles.bulletPoint}>• Screens 55" and over: 2" gap on each side</Text>
            </View>

            {/* Technical Diagram */}
            <View style={styles.technicalDiagram}>
                <Text style={styles.sectionTitle}>Technical Diagram</Text>
                {/* <Image
            style={styles.image}
            src="https://via.placeholder.com/500x500" // Replace with your image URL or local path
          /> */}
            </View>

            {/* Footer */}
            <View style={styles.footer}>
                <Text>SignCast Media</Text>
                <Text>361 Steelcase Rd. W #1, Markham, Ontario | Phone: (416) 900-2233</Text>
            </View>
        </Page>
    </Document>
);

export default PDF;

const styles = StyleSheet.create({
    page: {
        padding: 25,
        fontFamily: 'Helvetica',
    },
    header: {
        flexDirection: 'row', // Makes title and page number appear on the same line
        justifyContent: 'space-between', // Spreads the title and page number across the page
        marginBottom: 8,
    },
    leftSection: {
        flex: 1, // Take up available space on the left
    },
    rightSection: {
        fontSize: '10px',
        textAlign: 'right', // Align page number to the right
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 10,
        color: '#333333',
        marginBottom: 18,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 8,
    },
    column: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    label: {
        fontSize: 10,
        color: '#2d3436',
        marginBottom: 3,
    },
    value: {
        fontSize: 10,
        marginBottom: 5,
    },
    dimensionRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
    },
    installationNotes: {
        backgroundColor: '#FFFFFF',
        marginBottom: 20,
    },
    bulletPoint: {
        fontSize: 10,
        marginBottom: 5,
    },
    technicalDiagram: {
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        height: 400,
        marginBottom: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        marginTop: 5,
        fontWeight: 'bold',
        width: '100%',
        height: '100%',
        backgroundColor: '#f1f2f6',
    },
    footer: {
        position: 'absolute',
        bottom: 35,
        left: 0,
        right: 0,
        textAlign: 'center',
        fontSize: 10,
        color: '#333333',
    },
});
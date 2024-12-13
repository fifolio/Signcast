import { Page, Text, View, Image, Document, StyleSheet, Font } from '@react-pdf/renderer';
import { CollectedData_interface } from '@/interfaces/CollectedData_interface';

Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const PDF = ({ data }: { data: CollectedData_interface }) => (
    <Document>
        <Page size="A4" style={styles.page}>
            {/* Header */}
            <View style={styles.header}>
                <View style={styles.leftSection}>
                    <Text style={styles.title}>{data.title || 'Sample Title'}</Text>
                </View>
                <View style={styles.rightSection}>
                    <Text render={({ pageNumber, totalPages }) => `Sheet ${pageNumber} / ${totalPages}`} />
                </View>
            </View>

            {/* General Information */}
            <View style={styles.generalInfo}>
                <Text style={styles.subtitleInline}>Date: <Text style={styles.value}>{data.date || 'N/A'}</Text>   Department: <Text style={styles.value}>{data.department || 'N/A'}</Text>   Drawn by: <Text style={styles.value}>{data.drawer || 'N/A'}</Text></Text>
            </View>

            {/* Screen Specifications & Niche Dimensions */}
            <View style={styles.row}>
                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Screen Specifications</Text>
                    <Text style={styles.label}>Model: <Text style={styles.value}>{data.screen_MFR || 'N/A'}</Text></Text>
                    <Text style={styles.label}>Screen Size: <Text style={styles.value}>{data.screen_size || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Dimensions:</Text>
                    <Text style={styles.label}>Width: <Text style={styles.value}>{data.screen_width || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Height: <Text style={styles.value}>{data.screen_height || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Floor Line: <Text style={styles.value}>{data.screen_floorLine || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Weight: <Text style={styles.value}>{data.screen_weight || 'N/A'} lbs</Text></Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Niche Dimensions</Text>
                    <Text style={styles.label}>Width: <Text style={styles.value}>{data.niche_width || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Height: <Text style={styles.value}>{data.niche_height || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Depth: <Text style={styles.value}>{data.niche_depth || 'N/A'} inches</Text></Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Installation Details</Text>
                    <Text style={styles.label}>Media Player: <Text style={styles.value}>{data.media_Player_MFR || 'N/A'}</Text></Text>
                    <Text style={styles.label}>Mounts: <Text style={styles.value}>{data.mounts || 'N/A'}</Text></Text>
                    <Text style={styles.label}>Receptacle Box: <Text style={styles.value}>{data.receptacle_Box || 'N/A'}</Text></Text>
                    <Text style={styles.label}>Orientation: <Text style={styles.value}>{data.orientation || 'N/A'}</Text></Text>
                    <Text style={styles.label}>Placement: <Text style={styles.value}>{data.placement || 'N/A'}</Text></Text>
                    <Text style={styles.label}>Niche Depth: <Text style={styles.value}>{data.nicheDepthVar || 'N/A'} inches</Text></Text>
                    <Text style={styles.label}>Distance from Floor: <Text style={styles.value}>{data.floorDistance || 'N/A'} inches</Text></Text>
                </View>
            </View>

            {/* Notes Section */}
            <View style={styles.notesSection}>
                <Text style={styles.sectionTitle}>Installation Notes</Text>
                <Text style={styles.note}>{data.notes || 'No additional notes provided.'}</Text>
            </View>

            {/* Diagram section */}
            <View style={styles.diagramSection}>
                <Text style={styles.diagramTitle}>Technical Diagram</Text>
                <Image src={data.diagramURL ? data.diagramURL : 'https://149355274.v2.pressablecdn.com/wp-content/uploads/2018/05/signcast-email-logo.png'} style={{ width: '100%', height: 'auto' }} />
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8,
    },
    leftSection: {
        flex: 1,
    },
    rightSection: {
        fontSize: 10,
        textAlign: 'right',
        textTransform: 'capitalize'
    },
    title: {
        fontSize: 16,
        fontWeight: 'ultrabold',
        textTransform: 'capitalize',
    },
    generalInfo: {
        marginBottom: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    subtitleInline: {
        fontSize: 10,
        textTransform: 'capitalize',
        color: '#222f3e',
        marginBottom: 5,
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    section: {
        flex: 1,
        marginRight: 10,
    },
    sectionTitle: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        color: 'black',
    },
    label: {
        fontSize: 10,
        color: '#222f3e',
        marginBottom: 3,
    },
    value: {
        fontSize: 10,
        color: 'black',
        marginBottom: 5,
    },
    note: {
        fontSize: 10,
        marginBottom: 3,
        color: 'black',
    },
    notesSection: {
        width: '100%',
        marginBottom: 20,
    },
    diagramTitle: {
        fontSize: 12,
  	    textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 10,
        color: 'black',
    },
    diagramSection: {
        width: '100%',
        height: '55%',
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

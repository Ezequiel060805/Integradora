import { View, Text, StyleSheet } from 'react-native';

const EspirulinaDashboard = () => {
  return (
    <View style={styles.container}>
      {/* Title */}
      <Text style={styles.title}>Espirulina</Text>
      
      {/* Current Data Section */}
      <Text style={styles.sectionHeader}>Datos Actuales</Text>
      <View style={styles.dataRow}>
        <View style={styles.dataColumn}>
          <Text style={styles.dataLabel}>Indice de PH</Text>
          <Text style={styles.dataValue}>Neutro</Text>
        </View>
        
        <View style={styles.dataColumn}>
          <Text style={styles.dataLabel}>Indice de CO2</Text>
          <Text style={styles.dataValue}>I23456</Text>
        </View>
      </View>
      
      {/* Separator */}
      <View style={styles.separator} />
      
      {/* Temperature Section */}
      <View style={styles.dataRow}>
        <View style={styles.dataColumn}>
          <Text style={styles.dataLabel}>Temperatura</Text>
          <Text style={styles.temperatureValue}>25"</Text>
          <Text style={styles.noteText}>Faltan 3 horas</Text>
        </View>
        
        <View style={styles.dataColumn}>
          <Text style={styles.dataLabel}>Movimiento del agua</Text>
          <Text style={styles.dataValue}>-</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f9fa',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 25,
    color: '#2c3e50',
  },
  sectionHeader: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#34495e',
  },
  dataRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dataColumn: {
    flex: 1,
    alignItems: 'center',
  },
  dataLabel: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 8,
  },
  dataValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  temperatureValue: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#e74c3c',
    marginBottom: 4,
  },
  noteText: {
    fontSize: 14,
    color: '#95a5a6',
    fontStyle: 'italic',
  },
  separator: {
    height: 1,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderStyle: 'dashed',
    marginVertical: 15,
  },
});

export default EspirulinaDashboard;

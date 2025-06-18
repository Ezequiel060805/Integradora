import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface LoginScreenProps {
  onLogin: () => void;
  email: string;
  setEmail: (text: string) => void;
  password: string;
  setPassword: (text: string) => void;
  rememberMe: boolean;
  setRememberMe: (value: boolean) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({
  onLogin,
  email,
  setEmail,
  password,
  setPassword,
  rememberMe,
  setRememberMe
}) => {
  return (
    <View style={styles.container}>
    <Image
      source={require('../assets/images/logotipo allge care.png')}
      resizeMode='contain'
      style={styles.logo}
      />
      {/*<Text style={styles.mainTitle}>ALLGE CARE</Text>*/}
      <Text style={styles.subTitle}>Bienvenido</Text>
    <View style={styles.box}>  
      <TextInput
        style={styles.input}
        placeholder="Correo Electrónico"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <View style={styles.row}>
        <TouchableOpacity 
          style={styles.checkboxContainer} 
          onPress={() => setRememberMe(!rememberMe)}
        >
          <View style={[styles.checkbox, rememberMe && styles.checked]}>
            {rememberMe && <Text style={styles.checkmark}>✓</Text>}
          </View>
          <Text style={styles.checkboxLabel}>Recuerdame</Text>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <Text style={styles.forgotPassword}>Olvídaste tu contraseña?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginButtonText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding:20,
    backgroundColor: 'green',
  },
  box:{
    position: 'absolute',
    bottom: 200,
    top: 500,
    left: 0,
    right: 0,
    height: '100%',
    backgroundColor: 'white',
    borderRadius: 20,
    //borderTopEndRadius: 60,
    paddingTop: '20%',
    paddingRight: '8%',
    paddingLeft: '6%',
  },
  logo:{
    position: 'absolute',
    top:'20%',
    left: '15%',
    width:300,
    height:300,
    //marginBottom: 20,
  },
  mainTitle: {
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: 'blue',
  },
  subTitle: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
    color: 'white',
  },
  input: {
    height: 50,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    borderRadius: 8,
    paddingHorizontal: 15,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkbox: {
    width: 22,
    height: 22,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checked: {
    backgroundColor: '#3498db',
    borderColor: '#3498db',
  },
  checkmark: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#555',
  },
  forgotPassword: {
    fontSize: 16,
    color: '#3498db',
    textDecorationLine: 'underline',
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
});

export default LoginScreen;

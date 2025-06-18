import { useState } from 'react'; import { Alert } from 'react-native';
import LoginScreen from './LoginScreen';
import HomeScreen from './HomeScreen';

export default function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    const validEmail = 'anon@gmail.com';
    const validPassword = 'EZEQUIEL';

    if (email === validEmail && password === validPassword) {
      setLoggedIn(true);
    } else {
      Alert.alert('Error', 'Email o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
    // Reset form if needed
    setEmail('');
    setPassword('');
  };

  return loggedIn ? (
    <HomeScreen onLogout={handleLogout} />
  ) : (
    <LoginScreen
      onLogin={handleLogin}
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      rememberMe={rememberMe}
      setRememberMe={setRememberMe}
    />
  );
}

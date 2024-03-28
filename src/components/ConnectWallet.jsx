import React, { useState } from 'react';
import ConnectKit from 'connect-kit';

const ConnectWallet = () => {
  const [connectedWallet, setConnectedWallet] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const connectToWallet = async () => {
    setLoading(true);
    setError('');

    try {
      // Lógica para conectar a la wallet usando ConnectKit
      const wallet = await ConnectKit.connectToWallet();
      setConnectedWallet(wallet);
    } catch (error) {
      setError('Error al conectar con la wallet');
      console.error('Error al conectar con la wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      {connectedWallet ? (
        <div style={styles.connectedContainer}>
          <p style={styles.connectedText}>Conectado a la wallet: {connectedWallet.name}</p>
          <button style={styles.disconnectButton} onClick={() => setConnectedWallet(null)}>Desconectar</button>
        </div>
      ) : (
        <div style={styles.connectContainer}>
          <button style={loading ? styles.connectButtonDisabled : styles.connectButton} onClick={connectToWallet} disabled={loading}>
            {loading ? 'Conectando...' : 'Conectar Wallet'}
          </button>
          {error && <p style={styles.errorText}>{error}</p>}
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    marginTop: '50px',
  },
  connectedContainer: {
    marginBottom: '20px',
  },
  connectedText: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  disconnectButton: {
    backgroundColor: '#f44336',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  connectContainer: {},
  connectButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  connectButtonDisabled: {
    backgroundColor: '#cccccc',
    color: '#666666',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'not-allowed',
  },
  errorText: {
    color: 'red',
    marginTop: '10px',
  },
};

export default ConnectWallet;


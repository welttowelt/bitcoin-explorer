# Bitcoin Explorer

This project is a simple Bitcoin Block Explorer built with Node.js and React.

## Features

- Fetch and display information about Bitcoin blocks and transactions.
- Simple and user-friendly interface.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/welttowelt/bitcoin-explorer.git
   cd bitcoin-explorer
   ```

2. Install backend dependencies:
   ```sh
   cd bitcoin-explorer
   npm install
   ```

3. Install frontend dependencies:
   ```sh
   cd ../bitcoin-explorer-frontend
   npm install
   ```

## Configuration

1. Set up Bitcoin Core:
   - Ensure Bitcoin Core is installed and running.
   - Create or edit the `bitcoin.conf` file with the following content:
     ```conf
     server=1
     rpcuser=orangemaster
     rpcpassword=hugahuga837Luka
     rpcport=8332
     ```

## Running the Project

1. Start the backend server:
   ```sh
   cd bitcoin-explorer
   node server.js
   ```

2. Start the frontend application:
   ```sh
   cd ../bitcoin-explorer-frontend
   npm start
   ```

3. Open your browser and navigate to `http://localhost:3000`.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.


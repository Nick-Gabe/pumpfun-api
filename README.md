# Pump.fun API - SDK

![API Health](https://img.shields.io/badge/dynamic/json?url=https%3A%2F%2Ffrontend-api-v3.pump.fun%2Fhealth&query=status&label=API%20Health)
![GitHub Repo Size](https://img.shields.io/github/repo-size/nick-gabe/pumpfun-api)
![GitHub package.json version](https://img.shields.io/github/package-json/v/nick-gabe/pumpfun-api)

<img src="https://pump.fun/icon.png" height="200" align="right" alt="pump.fun logo" />

> The **Pump.fun API SDK** provides a set of tools to easily
> interact with the [Pump.fun](https://pump.fun) API.
> It allows developers to automate tasks and execute operations such as
> fetching coin data, managing users, handling replies, and more.

The SDK is fully typed, ensuring that all methods, parameters, and responses are clearly defined and aligned with Pump.fun's API responses.

## Features

- Access to **coin** information (e.g., get candlestick data, king of the hill).
- Manage **users** and perform user-related operations.
- Fetch and manipulate **metas** (metadata) and other useful information.
- Perform operations requiring **authentication** with ease.
- Fully typed for enhanced development experience and API safety.

## Installation

To install the SDK in your project, run the following command:

```bash
npm install pumpfun-api
# or yarn, pnpm, etc...
```

## Getting Started

Here’s how you can start using the SDK in your project:

### Import and Initialize

```typescript
import PumpFun from 'pumpfun-api';

const pumpFun = new PumpFun();
```

### Authentication

If you need to perform authenticated operations, you can authenticate using:

```typescript
await pumpFun.authenticate('phantom');
```

### Example Operations

You can now access various API endpoints. Below are some examples of what you can do:

- **Get King of the Hill (top player/coin):**

  ```typescript
  const kingOfTheHill = await pumpFun.coins.getKingOfTheHill();
  ```

- **Fetch Candlestick Data for a Coin:**

  ```typescript
  const candles = await pumpFun.coins.getCoinCandlesticks('<coin_id>');
  ```

- **Get Current Coin Metas:**

  ```typescript
  const coinMetas = await pumpFun.metas.getCurrentMetas();
  ```

- **Search for Coins:**

  ```typescript
  const coins = await pumpFun.coins.getCoins({
    searchTerm: 'dog',
    limit: 10,
    offset: 0,
  });
  ```

Explore more by using other available methods, all typed for easy discovery.

## Documentation

The code itself it documented and has typed responses, but you can also refer to the [official Pump.fun API documentation](https://frontend-api-v3.pump.fun/api) for more information.

## Contributing

We welcome contributions from the community! To contribute:

1. Check the open issues for improvements or bug fixes.
2. Fork the repository and create a new branch for your feature or fix.
3. Submit a pull request with a detailed explanation of your changes.

**All contributions**, whether large or small, are appreciated!

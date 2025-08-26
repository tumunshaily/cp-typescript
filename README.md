# CP Typescript/JavaScript Template

A basic template for setting up competitive programming local dev env. We are using Bun for running our .ts or .js files

## Project Structure

```
cp-typescript/
├── cp/
│   └── main.ts      # Main entry point for solutions
├── dist/            # Compiled JavaScript output
├── tsconfig.json    # TypeScript configuration
└── README.md        # Project documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [TypeScript](https://www.typescriptlang.org/)

### Install Dependencies

```sh
npm install
bun install
yarn install
```

### Run Solutions

```sh
bun cp
bun cpw
node dist/cp/main.js
```


### Compile TypeScript

```sh
npx tsc
```



## Contributing

Feel free to submit pull requests or open issues for improvements and new solutions!

## License

This project is licensed under the MIT License.

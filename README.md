# chaos-kilz-club

## Overview
Chaos Kilz Club is a web application built with SolidJS and Tailwind CSS. This project serves as a template for creating modern web applications with a focus on performance and developer experience.

## Project Structure
```
chaos-kilz-club
├── src
│   ├── components
│   │   └── Header.tsx
│   ├── pages
│   │   └── Home.tsx
│   ├── App.tsx
│   └── index.tsx
├── public
│   └── index.html
├── tailwind.config.js
├── vite.config.ts
├── package.json
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (version 22 or higher)
- [Bun](https://bun.sh/) (version 1.0 or higher)
- [Nix](https://nixos.org/download.html) (optional, for reproducible development environments via `flake.nix`)

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/chaos-kilz-club.git
   ```
2. Navigate to the project directory:
   ```
   cd chaos-kilz-club
   ```
3. (Optional) Enter the Nix development shell:
   ```
   nix develop
   ```
   This will use `flake.nix` to provide all necessary dependencies.

4. Install the dependencies:
   ```
   bun install
   ```

### Development
To start the development server, run:
```
just dev
```
The application will be available at `http://localhost:1234`.

### Building for Production
To build the application for production, run:
```
just build
```

### License
This project is licensed under the MIT License. See the LICENSE file for more details.